import User from '../models/User'; // Importa o modelo User para interagir com a tabela de usuários no banco de dados.

class UserController { // Define a classe UserController que contem métodos para manipular usuário
  // Método para criar um novo usuário
  async store(req, res) {
    try {
      // Cria um novo usuário com os dados fornecidos no corpo da requisição
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      // Retorna o novo usuário em formato JSON
      return res.json({ id, nome, email });
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
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] }); // Para exibir apenas os atributos selecionados no Index
      // Retorna a lista de usuários em formato JSON
      return res.json(users);
    } catch (e) {
      // Em caso de erro, retorna null
      return res.json(null);
    }
  }

  // Método para mostrar um usuário específico baseado no ID fornecido
  async show(req, res) {
    try {
      // Recupera o usuário com o ID fornecido nos parâmetros da requisição
      const user = await User.findByPk(req.params.id);
      // Mostrar o que queremos para o usuário dentro de show
      const { id, nome, email } = user;
      // Retorna os dados em formato JSON
      return res.json({ id, nome, email });
    } catch (e) {
      // Em caso de erro, retorna null
      return res.json(null);
    }
  }

  // Método para atualizar um usuário existente
  async update(req, res) {
    try {
      const user = await User.findByPk(req.user.id);

      // Verifica se o usuário existe
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'], // Retorna um erro se o usuário não for encontrado
        });
      }

      // Atualiza o usuário com os novos dados fornecidos no corpo da requisição
      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;

      // Retorna os dados atualizados do usuário em formato JSON
      return res.json({ id, nome, email });
    } catch (e) {
      const errorMessages = e.errors && Array.isArray(e.errors) ? e.errors.map((err) => err.message) : ['Erro desconhecido'];
      return res.status(400).json({ errors: errorMessages });
    }
  }

  // Método para deletar um usuário
  async delete(req, res) {
    try {
      // Recupera o usuário com o ID fornecido
      const user = await User.findByPk(req.params.id);

      // Verifica se o usuário existe
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'], // Retorna um erro se o usuário não for encontrado
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
