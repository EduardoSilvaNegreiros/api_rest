// Importa o modelo User, que representa os usuários no banco de dados
import User from '../models/User';

class UserController {
  // Método para criar um novo usuário
  async store(req, res) {
    try {
      // Cria um novo usuário no banco de dados com os dados recebidos da requisição
      const novoUser = await User.create(req.body);

      // Extrai os campos id, nome e email do novo usuário criado
      const { id, nome, email } = novoUser;

      // Retorna os dados do novo usuário como resposta JSON
      return res.json({ id, nome, email });
    } catch (e) {
      // Em caso de erro, retorna uma resposta com status 400 e a lista de mensagens de erro
      return res.status(400).json({
        errors: e.errors.map((err) => err.message), // Mapeia e retorna as mensagens de erro
      });
    }
  }

  // Método para listar todos os usuários (Index)
  async index(req, res) {
    try {
      // Busca todos os usuários no banco de dados, retornando apenas os atributos id, nome e email
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });

      // Retorna a lista de usuários em formato JSON
      return res.json(users);
    } catch (e) {
      // Em caso de erro, retorna null como resposta
      return res.json(null);
    }
  }

  // Método para exibir um único usuário (Show) com base no ID
  async show(req, res) {
    try {
      // Busca o usuário pelo ID fornecido na URL (req.params.id)
      const user = await User.findByPk(req.params.id);

      // Extrai os campos id, nome e email do usuário encontrado
      const { id, nome, email } = user;

      // Retorna os dados do usuário como resposta JSON
      return res.json({ id, nome, email });
    } catch (e) {
      // Em caso de erro ou usuário não encontrado, retorna null
      return res.json(null);
    }
  }

  // Método para atualizar os dados de um usuário existente (Update)
  async update(req, res) {
    try {
      // Busca o usuário pelo ID fornecido no token de autenticação (req.userId)
      const user = await User.findByPk(req.userId);

      // Se o usuário não for encontrado, retorna uma resposta com erro
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      // Atualiza os dados do usuário com as informações fornecidas no corpo da requisição
      const novosDados = await user.update(req.body);

      // Extrai os campos id, nome e email do usuário atualizado
      const { id, nome, email } = novosDados;

      // Retorna os dados atualizados como resposta JSON
      return res.json({ id, nome, email });
    } catch (e) {
      // Em caso de erro, retorna uma resposta com status 400 e a lista de mensagens de erro
      return res.status(400).json({
        errors: e.errors.map((err) => err.message), // Mapeia e retorna as mensagens de erro
      });
    }
  }

  // Método para deletar um usuário (Delete)
  async delete(req, res) {
    try {
      // Busca o usuário pelo ID fornecido no token de autenticação (req.userId)
      const user = await User.findByPk(req.userId);

      // Se o usuário não for encontrado, retorna uma resposta com erro
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      // Exclui o usuário do banco de dados
      await user.destroy();

      // Retorna uma resposta JSON vazia (null) indicando que a exclusão foi bem-sucedida
      return res.json(null);
    } catch (e) {
      // Em caso de erro, retorna uma resposta com status 400 e a lista de mensagens de erro
      return res.status(400).json({
        errors: e.errors.map((err) => err.message), // Mapeia e retorna as mensagens de erro
      });
    }
  }
}

// Exporta uma instância da classe UserController
export default new UserController();
