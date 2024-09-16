import jwt from 'jsonwebtoken'; // Importa o módulo JWT (JSON Web Token) para gerar e verificar tokens.
import User from '../models/User';

const verifyToken = (token) => {
  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    return dados;
  } catch (e) {
    console.log('Erro ao verificar token:', e);
    return null;
  }
};

export default async (req, res, next) => {
  const { authorization } = req.headers; // Extrai o cabeçalho de autorização da requisição.

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(401).json({
      errors: ['Login requerido'],
    });
  }

  const token = authorization.split(' ')[1];
  const dados = verifyToken(token);

  if (!dados) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido.'],
    });
  }

  const userId = dados.id.id;
  const userEmail = dados.email;

  const user = await User.findOne({
    where: {
      id: userId,
      email: userEmail,
    },
  });

  if (!user) {
    console.log('Erro ao buscar usuário:', userId, userEmail);
    return res.status(401).json({
      errors: ['Usuário Inválido'],
    });
  }

  try {
    return next();
  } catch (e) {
    console.log('Erro ao chamar próximo middleware:', e);
    return res.status(500).json({
      errors: ['Erro interno do servidor'],
    });
  }
};
