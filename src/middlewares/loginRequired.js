import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login não realizado'],
    });
  }

  const [, token] = authorization.split(' ');

  // Agora quem controla o login é o usuário, não o desenvolvedor
  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      erros: ['Token expirado ou inválido'],
    });
  }
};
