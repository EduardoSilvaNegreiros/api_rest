import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    res.json('ok');
  }
}

export default new AlunoController();
