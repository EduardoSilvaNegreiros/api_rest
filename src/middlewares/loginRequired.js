import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  // Extrai o campo authorization dos cabeçalhos da requisição
  const { authorization } = req.headers;

  // Verifica se o campo authorization está presente
  if (!authorization) {
    return res.status(401).json({
      errors: ['Login requerido'], // Retorna erro se o token não for encontrado
    });
  }

  // Divide a string no espaço e pega a segunda parte (o token em si)
  const [, token] = authorization.split(' ');

  try {
    // Verifica e decodifica o token usando a chave secreta definida nas variáveis de ambiente
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

    // Extrai o id e o email dos dados decodificados do token
    const { id, email } = decoded;

    // Busca o usuário no banco de dados com o id e email obtidos do token
    const user = await User.findOne({
      where: { id, email },
    });

    // Se o usuário não for encontrado, retorna um erro
    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido'],
      });
    }

    // Adiciona o id e o email do usuário no objeto da requisição
    req.userId = id;
    req.userEmail = email;

    // Chama o próximo middleware ou controlador
    return next();
  } catch (e) {
    // Se ocorrer um erro durante a verificação do token, retorna um erro de autenticação
    return res.status(401).json({
      errors: ['Token expirado ou inválido.'],
    });
  }
};
