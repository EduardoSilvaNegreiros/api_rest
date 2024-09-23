import Sequelize, { Model } from 'sequelize';

// Classe Aluno que herda de Model do Sequelize
export default class Aluno extends Model {
  // Método estático para inicializar o modelo
  static init(sequelize) {
    // Chamando o método init da classe pai com os atributos do modelo
    super.init(
      {
        // Coluna para o nome do aluno
        nome: {
          type: Sequelize.STRING, // Tipo STRING
          defaultValue: '', // Valor padrão
          validate: {
            // Validação para o comprimento do nome
            len: {
              args: [3, 255], // Deve ter entre 3 e 255 caracteres
              msg: 'Nome precisa ter entre 3 e 255 caracteres.',
            },
          },
        },
        // Coluna para o sobrenome do aluno
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            // Validação para o comprimento do sobrenome
            len: {
              args: [3, 255], // Deve ter entre 3 e 255 caracteres
              msg: 'Sobrenome precisa ter entre 3 e 255 caracteres.',
            },
          },
        },
        // Coluna para o email do aluno
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'E-mail já existe', // Mensagem de erro se o e-mail já estiver no banco
          },
          validate: {
            // Validação para garantir que o formato do email seja válido
            isEmail: {
              msg: 'E-mail inválido', // Mensagem de erro se o formato for inválido
            },
          },
        },
        // Coluna para a idade do aluno
        idade: {
          type: Sequelize.INTEGER, // Tipo INTEGER
          defaultValue: '',
          validate: {
            // Validação para garantir que a idade seja um número inteiro
            isInt: {
              msg: 'Idade precisa ser um número inteiro', // Mensagem de erro
            },
          },
        },
        // Coluna para o peso do aluno
        peso: {
          type: Sequelize.FLOAT, // Tipo FLOAT
          defaultValue: '',
          validate: {
            // Validação para garantir que o peso seja um número decimal ou inteiro
            isFloat: {
              msg: 'Peso precisa ser um número inteiro ou de ponto flutuante', // Mensagem de erro
            },
          },
        },
        // Coluna para a altura do aluno
        altura: {
          type: Sequelize.FLOAT, // Tipo FLOAT
          defaultValue: '',
          validate: {
            // Validação para garantir que a altura seja um número decimal ou inteiro
            isFloat: {
              msg: 'Altura precisa ser um número inteiro ou de ponto flutuante', // Mensagem de erro
            },
          },
        },
      },
      {
        sequelize, // Passando a conexão Sequelize para o modelo
      },
    );
    return this; // Retorna a instância do modelo
  }
}
