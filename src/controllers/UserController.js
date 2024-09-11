import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create({
        nome: 'Aao',
        email: 'adalarto@gmail.com',
        password: '12345aaaaaaaaa6',
      });
      res.json(novoUser);
    } catch (e) {
      res.status(400).json('Deu um erro');
    }
  }
}

export default new UserController();
