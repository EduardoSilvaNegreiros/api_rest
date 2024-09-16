import jwt from 'jsonwebtoken'; // Importa o módulo JWT (JSON Web Token) para gerar e verificar tokens.
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers; // Extrai o cabeçalho de autorização da requisição.

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(401).json({
      errors: ['Login requerido'],
    });
  }

  const token = authorization.split(' ')[1];

  try {
    // Verifica o token JWT usando a chave secreta armazenada em 'process.env.TOKEN_SECRET'.
    // Se o token for válido, extrai os dados (id e email) contidos no token.
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);

    const userId = dados.id.id || dados.id; // Verifica se id é um objeto ou um valor simples
    const userEmail = dados.email;

    const user = await User.findOne({ where: { id: userId, email: userEmail } });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário Inválido'],
      });
    }

    // Chama o próximo middleware da cadeia.
    return next();
  } catch (e) {
    console.error('Erro ao verificar token:', e);
    console.error('Erro mensagem:', e.message);
    console.error('Erro stack:', e.stack); // Se houver qualquer erro durante a verificação do token
    return res.status(401).json({
      errors: ['Token expirado ou inválido.'],
    });
  }
};
