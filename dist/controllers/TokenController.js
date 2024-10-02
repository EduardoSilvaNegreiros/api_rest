"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken); // Biblioteca para gerar tokens JWT
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User); // Modelo de usuário

class TokenController {
  // Autentica o usuário e gera um token JWT
  async store(req, res) {
    const { email = '', password = '' } = req.body; // Desestrutura e-mail e senha

    // Verifica se e-mail e senha foram fornecidos
    if (!email || !password) {
      return res.status(401).json({ errors: ['Credenciais inválidas'] });
    }

    // Busca o usuário no banco de dados
    const user = await _User2.default.findOne({ where: { email } });

    // Se o usuário não for encontrado, retorna um erro
    if (!user) {
      return res.status(401).json({ errors: ['Usuário não existe'] });
    }

    // Verifica se a senha está correta
    const isPasswordValid = await user.passwordIsValid(password);
    if (!isPasswordValid) {
      return res.status(401).json({ errors: ['Senha inválida'] });
    }

    // Gera o token JWT com ID e e-mail do usuário
    const { id, nome } = user;
    const token = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    // Retorna o token e informações do usuário
    return res.json({ token, user: { id, nome, email } });
  }
}

exports. default = new TokenController(); // Exporta a instância do TokenController
