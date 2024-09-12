import User from '../models/User'; // Importa o modelo User para interagir com a tabela de usuários no banco de dados.

class UserController { // Define a classe UserController que contem métodos para manipular usuário
  // Método para criar um novo usuário
  async store(req, res) {
    try {
      // Cria um novo usuário com os dados fornecidos no corpo da requisição
      const novoUser = await User.create(req.body);
      // Retorna o novo usuário em formato JSON
      return res.json(novoUser);
    } catch (e) {
      // Em caso de erro, retorna status 400 e uma lista de mensagens de erro
      return res.status(400).json({
        errors: e.errors.map((err) => err.message), // Mapeia as mensagens de erro
      });
    }
  }

  // Método para listar todos os usuários
  async index(req, res) {
    try {
      // Recupera todos os usuários do banco de dados
      const users = await User.findAll();
      // Exibe o ID e o e-mail do usuário autenticado (para depuração)
      console.log('USER ID', req.userId);
      console.log('USER EMAIL', req.userEmail);
      // Retorna a lista de usuários em formato JSON
      return res.json(users);
    } catch (e) {
      // Em caso de erro, retorna null
      return req.json(null);
    }
  }

  // Método para mostrar um usuário específico baseado no ID fornecido
  async show(req, res) {
    try {
      // Recupera o usuário com o ID fornecido nos parâmetros da requisição
      const user = await User.findByPk(req.params.id);
      // Retorna o usuário em formato JSON
      return res.json(user);
    } catch (e) {
      // Em caso de erro, retorna null
      return req.json(null);
    }
  }

  // Método para atualizar um usuário existente
  async update(req, res) {
    try {
      // Verifica se o ID foi fornecido na requisição
      if (!req.params.id) {
        return res.status(400).json({
          erros: ['ID não enviado.'], // Retorna um erro se o ID não for fornecido
        });
      }

      // Recupera o usuário com o ID fornecido
      const user = await User.findByPk(req.params.id);

      // Verifica se o usuário existe
      if (!user) {
        return res.status(400).json({
          erros: ['Usuário não existe'], // Retorna um erro se o usuário não for encontrado
        });
      }

      // Atualiza o usuário com os novos dados fornecidos no corpo da requisição
      const novosDados = await user.update(req.body);

      // Retorna os dados atualizados do usuário em formato JSON
      return res.json(novosDados);
    } catch (e) {
      // Em caso de erro, retorna status 400 e uma lista de mensagens de erro
      return res.status(400).json({
        errors: e.errors.map((err) => err.message), // Mapeia as mensagens de erro
      });
    }
  }

  // Método para deletar um usuário
  async delete(req, res) {
    try {
      // Verifica se o ID foi fornecido na requisição
      if (!req.params.id) {
        return res.status(400).json({
          erros: ['ID não enviado.'], // Retorna um erro se o ID não for fornecido
        });
      }

      // Recupera o usuário com o ID fornecido
      const user = await User.findByPk(req.params.id);

      // Verifica se o usuário existe
      if (!user) {
        return res.status(400).json({
          erros: ['Usuário não existe'], // Retorna um erro se o usuário não for encontrado
        });
      }

      // Deleta o usuário do banco de dados
      await user.destroy();

      // Retorna o usuário deletado em formato JSON
      return res.json(user);
    } catch (e) {
      // Em caso de erro, retorna status 400 e uma lista de mensagens de erro
      return res.status(400).json({
        errors: e.errors.map((err) => err.message), // Mapeia as mensagens de erro
      });
    }
  }
}

export default new UserController(); // Exporta uma instância da classe UserController
