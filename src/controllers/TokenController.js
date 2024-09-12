import User from '../models/User';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais Inválidas'],
      });
    }

    const user = await User.findOne({ where: { email } });

    res.json('OK');
  }
}

export default new TokenController();
