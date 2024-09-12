import User from '../models/User';

class TokenController {
  async store(req, res) {
    res.json('OK');
  }
}

export default new TokenController();
