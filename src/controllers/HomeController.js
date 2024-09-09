import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Adalberto',
      sobrenome: 'Marujo',
      email: 'adalberto@gmail.com',
      idade: 18,
      peso: 85,
      altura: 1.7,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
