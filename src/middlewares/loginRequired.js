import jwt from 'jsonwebtoken';
import User from '../models/User';

const tokenSecret = process.env.TOKEN_SECRET;

export default async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        errors: ['Login Requerido'],
      });
    }

    const [, token] = authorization.split(' ');

    const dados = jwt.verify(token, process.env.TOKEN_SECRET);

    const { id, email } = dados;

    if (!Number.isInteger(id)) {
      return res.status(401).json({
        errors: ['Token inválido'],
      });
    }

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

    req.user = user;
    req.userId = id;
    req.userEmail = email;

    next();
  } catch (e) {
    if (e.name === 'TokenExpiredError') {
      return res.status(401).json({
        errors: ['Token expirado'],
      });
    }

    return res.status(401).json({
      errors: ['Token inválido'],
    });
  }
};
