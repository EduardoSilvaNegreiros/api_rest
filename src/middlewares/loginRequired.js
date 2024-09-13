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

    console.log('Token Data:', dados); // Log para verificar os dados decodificados
    console.log('ID:', id);
    console.log('Email:', email);

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

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    console.error('Error verifying token:', e); // Log para verificar erros
    return res.status(401).json({
      errors: ['Token expirado ou inválido.'],
    });
  }
};
