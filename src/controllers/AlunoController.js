// Importa o modelo Aluno, que representa a tabela 'alunos' no banco de dados
import Aluno from '../models/Aluno';

class AlunoController {
  // Método assíncrono index - responsável por listar todos os alunos
  async index(req, res) {
    // Busca todos os registros da tabela 'alunos' no banco de dados
    const alunos = await Aluno.findAll();

    // Retorna a lista de alunos em formato JSON como resposta
    res.json(alunos);
  }

  async store(req, res) { }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) { }

  async update(req, res) { }
}

// Exporta uma instância da classe AlunoController
export default new AlunoController();
