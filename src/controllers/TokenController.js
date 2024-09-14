import jwt from 'jsonwebtoken'; // Importa a biblioteca jsonwebtoken para criar e verificar tokens JWT.

import User from '../models/User'; // Importa o modelo de usuário para fazer consultas no banco de dados.

class TokenController {
  // Método assíncrono que lida com a criação de tokens JWT.
  async store(req, res) {
    // Extrai o 'email' e 'password' do corpo da requisição (req.body)
    const { email = '', password = '' } = req.body;

    // Verifica se o 'email' ou 'password' estão vazios.
    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais Inválidas'], // Retorna uma mensagem de erro se as credenciais forem inválidas.
      });
    }

    // Procura um usuário no banco de dados que tenha o 'email' fornecido.
    const user = await User.findOne({ where: { email } });

    // Se o usuário não for encontrado, retorna erro 401 (não autorizado).
    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe'], // Retorna uma mensagem de erro se o usuário não existir.
      });
    }

    // Verifica se a senha fornecida é válida comparando com o hash salvo no banco.
    // O método 'passwordIsValid' é um método de instância definido no modelo de Usuário.
    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha Inválida'], // Retorna uma mensagem de erro se a senha for inválida.
      });
    }

    // Cria o payload do token JWT com o 'id' e 'email' do usuário.
    const id = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    // Retorna o token gerado em formato JSON.
    return res.json({ token });
  }
}

export default new TokenController();
