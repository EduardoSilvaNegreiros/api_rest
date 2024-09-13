import Aluno from '../models/Aluno'; // Importa o modelo 'Aluno', que representa uma tabela no banco de dados.

class HomeController {
  // Método assíncrono 'index', responsável por criar um novo aluno e retornar os dados criados.
  async index(req, res) {
    // Cria um novo aluno no banco de dados usando o método 'create' do Sequelize.
    // Os dados do aluno são passados diretamente como um objeto.
    const novoAluno = await Aluno.create({
      nome: 'Eduardo', // Nome do aluno.
      sobrenome: 'Negreiros', // Sobrenome do aluno.
      email: 'edunegreiross@gmail.com', // Email do aluno.
      idade: 18, // Idade do aluno.
      peso: 85, // Peso do aluno em quilogramas.
      altura: 1.7, // Altura do aluno em metros.
    });

    // Retorna os dados do aluno recém-criado em formato JSON como resposta à requisição.
    res.json(novoAluno);
  }
}

export default new HomeController();
