import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  const token = jwt.sign({ id: 15, email: 'eduznegreiross@gmail.com' }, process.env.TOKEN_SECRET);

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    console.log(`ID: ${id}`); // Imprima o valor de id aqui

    if (!Number.isInteger(id)) {
      return res.status(401).json({
        errors: ['Token inválido'],
      });
    }

    if (dados !== null && dados !== undefined) {
      console.log(`Dados: ${JSON.stringify(dados)}`);
    } else {
      console.log('Dados is null or undefined');
    }

    console.log(`Dados: ${JSON.stringify(dados)}`);

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      console.log(`User not found with id ${id} and email ${email}`); // Adicione este log
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
