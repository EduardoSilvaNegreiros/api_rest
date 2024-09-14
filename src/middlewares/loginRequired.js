import jwt from 'jsonwebtoken'; // Importa o módulo JWT (JSON Web Token) para gerar e verificar tokens.
import User from '../models/User'; // Importa o modelo de Usuário para fazer consultas no banco de dados.

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
  const [, token] = authorization.split(' ');

  try {
    // Verifica o token JWT usando a chave secreta armazenada em 'process.env.TOKEN_SECRET'.
    // Se o token for válido, extrai os dados (id e email) contidos no token.
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    console.log('Dados do token:', { id, email });

    // Faz uma consulta ao banco de dados para verificar se existe um usuário com o 'id' e 'email'
    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    console.log('Resultado da busca no banco de dados:', user);

    // Se o usuário não for encontrado, retorna um erro 401.
    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido'],
      });
    }

    // Se o usuário for encontrado, adiciona o 'id' e o 'email' do usuário à requisição (req),
    // para que possam ser usados nas próximas etapas do processo.
    req.userId = user.id;
    req.userEmail = user.email;

    // Chama o próximo middleware da cadeia.
    return next();
  } catch (e) {
    console.error('Erro ao verificar o token:', e);
    // Se houver qualquer erro durante a verificação do token
    return res.status(401).json({
      errors: ['Token expirado ou inválido.'],
    });
  }
};
