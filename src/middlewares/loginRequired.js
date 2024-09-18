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

  console.log(`Chave secreta: ${process.env.TOKEN_SECRET}`);
  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);

    const { id, email } = dados;

    if (!Number.isInteger(id)) {
      return res.status(401).json({
        errors: ['Token inválido'],
      });
    }

    if (dados !== null && dados !== undefined) {
      console.log(`Dados: ${JSON.stringify(dados)}`);
    } else {
      console.log('Dados nullo ou indefinido');
    }

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      console.log(`Usuário não encontrado com o id ${id} e email ${email}`); // Adicione este log
      return res.status(401).json({
        errors: ['Usuário inválido'],
      });
    }

    req.user = user;
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    console.error('Erro ao acessar dados:', e);
    return res.status(500).json({
      errors: ['Erro interno do servidor'],
    });
  }
};
