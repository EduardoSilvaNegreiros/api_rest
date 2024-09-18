import jwt from 'jsonwebtoken';
import User from '../models/User';

const tokenSecret = process.env.TOKEN_SECRET;

const loginRequired = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ errors: ['Login Requerido'] });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, tokenSecret);
    console.log('Dados:', dados);

    const { id, email } = dados;

    if (!Number.isInteger(id)) {
      return res.status(401).json({ errors: ['Token inválido'] });
    }

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });
    console.log('Usuário autenticado:', user);

    if (!user) {
      return res.status(401).json({ errors: ['Usuário inválido'] });
    }

    req.user = user;
    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (e) {
    return res.status(401).json({ errors: ['Token inválido'] });
  }
};

export default loginRequired;
