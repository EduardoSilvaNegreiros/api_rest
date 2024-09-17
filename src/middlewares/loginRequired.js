import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  const [, token] = authorization.split(' ');

  try {

    const dados = jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log(err);
    } else {
      console.log(decoded);
    }
  });
  } catch (e) {
    console.log(e);
  }



  const { id, email } = dados;
  const userId = Number(id);

  const user = await User.findOne({
    where: {
      id: userId,
      email,
    },
  });

  if (!user) {
    console.log(`User not found with id ${id} and email ${email}`); // Adicione este log
    return res.status(401).json({
      errors: ['Usuário inválido'],
    });
  }

  req.userId = id;
  req.userEmail = email;
  return next();
} catch (e) {
  return res.status(401).json({
    errors: ['Token expirado ou inválido.'],
  });
}
};
