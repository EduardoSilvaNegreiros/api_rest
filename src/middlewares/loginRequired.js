import jwt from 'jsonwebtoken'; // Importa o módulo JWT (JSON Web Token) para gerar e verificar tokens.
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers; // Extrai o cabeçalho de autorização da requisição.

  // Verifica se o cabeçalho de autorização está presente. Se não estiver, retorna erro 401.
  if (!authorization) {
    return res.status(401).json({
      errors: ['Login requerido'],
    });
  }

  // O cabeçalho de autorização geralmente tem o formato "Bearer token".
  // Aqui, ele divide o valor em duas partes e armazena a segunda (o token) na variável 'token'.
  const token = authorization.trim();

  try {
    // Verifica o token JWT usando a chave secreta armazenada em 'process.env.TOKEN_SECRET'.
    // Se o token for válido, extrai os dados (id e email) contidos no token.
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);

    const user = await User.findOne({ where: { id: dados.id.id, email: dados.email } });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário Inválido'],
      });
    }

    // Chama o próximo middleware da cadeia.
    return next();
  } catch (e) {
    // Se houver qualquer erro durante a verificação do token
    return res.status(401).json({
      errors: ['Token expirado ou inválido.'],
    });
  }
};
