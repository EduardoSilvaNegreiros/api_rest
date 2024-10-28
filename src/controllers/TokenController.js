import jwt from 'jsonwebtoken'; // Biblioteca para gerar tokens JWT
import User from '../models/User'; // Modelo de usuário

class TokenController {
  // Autentica o usuário e gera um token JWT
  async store(req, res) {
    const { email = '', password = '' } = req.body; // Desestrutura e-mail e senha

    // Verifica se e-mail e senha foram fornecidos
    if (!email || !password) {
      return res.status(401).json({ errors: ['Credenciais inválidas'] });
    }

    // Busca o usuário no banco de dados
    const user = await User.findOne({ where: { email } });

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
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    // Retorna o token e informações do usuário
    return res.json({ token, user: { nome, id, email } });
  }
}

export default new TokenController(); // Exporta a instância do TokenController
