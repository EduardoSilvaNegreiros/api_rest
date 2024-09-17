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
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    if (!Number.isInteger(id)) {
      return res.status(401).json({
        errors: ['Token inválido'],
      });
    }

    const userId = parseInt(id, 10);

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
    console.error(e); // Adicionei essa linha para imprimir o erro no console
    return res.status(500).json({
      errors: ['Erro interno do servidor'],
    });
  }
};
