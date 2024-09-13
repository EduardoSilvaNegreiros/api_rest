import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login requerido'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    // Verificar o token e garantir que 'id' e 'email' são primitivos
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    // Garantir que id e email sejam valores primitivos
    if (typeof id !== 'number' || typeof email !== 'string') {
      return res.status(401).json({
        errors: ['Dados do token inválidos'],
      });
    }

    // Verificar se o usuário existe
    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido'],
      });
    }

    req.userId = user.id;
    req.userEmail = user.email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido.'],
    });
  }
};
