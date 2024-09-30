import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  // Verifica se o token está presente
  if (!authorization) {
    return res.status(401).json({
      errors: ['Login requerido'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    // Decodifica o token
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    // Busca o usuário no banco de dados
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

    // Adiciona dados do usuário na requisição
    req.userId = id;
    req.userEmail = email;

    return next(); // Chama o próximo middleware
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido.'],
    });
  }
};
