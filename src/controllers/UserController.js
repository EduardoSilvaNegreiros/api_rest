import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      console.log('Updating user:', req.userId);
      const user = await User.findByPk(req.userId);

      if (!user) {
        console.log('User not found:', req.userId);
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      console.log('Updated user data:', req.body);
      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;
      console.log('Updated user:', { id, nome, email });
      return res.json({ id, nome, email });
    } catch (e) {
      console.log('Error updating user:', e);
      const errorMessages = e.errors && Array.isArray(e.errors) ? e.errors.map((err) => err.message) : ['Erro desconhecido'];
      return res.status(400).json({ errors: errorMessages });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      console.log('Deleting user:', req.userId);
      const user = await User.findByPk(req.userId);

      if (!user) {
        console.log('User not found:', req.userId);
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      console.log('User found:', user.id);
      await user.destroy();
      console.log('User deleted:', user.id);
      return res.json(null);
    } catch (e) {
      console.log('Error deleting user:', req.userId, e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
