import Aluno from '../models/Aluno.js';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Eduardo',
      sobrenome: 'Negreiros',
      email: 'edunegreiross@gmail.com',
      idade: 18,
      peso: 85,
      altura: 1.7,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
