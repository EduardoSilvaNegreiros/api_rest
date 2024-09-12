import User from '../models/User';

class TokenController {
  async index(req, res) {
    res.json('OK');
  }
}

export default new TokenController();
