import jwt from 'jsonwebtoken'; // Importa a biblioteca JWT para criação de tokens
import User from '../models/User'; // Importa o modelo User, que contém a lógica para usuários no banco de dados

class TokenController {
  // Método para autenticar o usuário e gerar um token JWT
  async store(req, res) {
    // Extrai email e senha do corpo da requisição, atribuindo valores vazios caso não existam
    const { email = '', password = '' } = req.body;

    // Verifica se o email ou a senha estão vazios
    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas'], // Retorna erro caso os campos sejam inválidos
      });
    }

    // Busca o usuário no banco de dados com base no email fornecido
    const user = await User.findOne({ where: { email } });

    // Se o usuário não for encontrado, retorna erro de usuário inexistente
    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe'],
      });
    }

    // Verifica se a senha fornecida é válida comparando com a senha hashada no banco
    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha inválida'], // Retorna erro se a senha estiver incorreta
      });
    }

    // Se o usuário for encontrado e a senha estiver correta, extrai o id
    const { id } = user;

    // Gera um token JWT assinado com o ID e email do usuário e define o tempo de expiração
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION, // O token expira em um tempo configurado
    });

    // Retorna o token e as informações do usuário (nome, id, email) na resposta
    return res.json({ token, user: { nome: user.nome, id, email } });
  }
}

export default new TokenController(); // Exporta uma instância do TokenController
