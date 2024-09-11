import User from '../models/User';

class UserController {
  async store(req, res) {
    const novoUser = await User.create({
      nome: 'Adalberto',
      email: 'adalberto@gmail.com',
      password: '123456',
    });
    res.json(novoUser);
  }
}

export default new UserController();
