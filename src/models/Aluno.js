import Sequelize, { Model } from 'sequelize';

// Classe Aluno que representa o modelo de dados
export default class Aluno extends Model {
  // Método estático para inicializar o modelo
  static init(sequelize) {
    super.init(
      {
        // Coluna para o nome do aluno
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255], // Validação do comprimento do nome
              msg: 'Nome precisa ter entre 3 e 255 caracteres.',
            },
          },
        },
        // Coluna para o sobrenome do aluno
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255], // Validação do comprimento do sobrenome
              msg: 'Sobrenome precisa ter entre 3 e 255 caracteres.',
            },
          },
        },
        // Coluna para o email do aluno
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'E-mail já existe', // Verifica unicidade do email
          },
          validate: {
            isEmail: {
              msg: 'E-mail inválido', // Validação do formato do email
            },
          },
        },
        // Coluna para a idade do aluno
        idade: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'Idade precisa ser um número inteiro', // Validação para idade
            },
          },
        },
        // Coluna para o peso do aluno
        peso: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Peso precisa ser um número inteiro ou de ponto flutuante', // Validação para peso
            },
          },
        },
        // Coluna para a altura do aluno
        altura: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Altura precisa ser um número inteiro ou de ponto flutuante', // Validação para altura
            },
          },
        },
      },
      {
        sequelize, // Passa a conexão Sequelize
      },
    );
    return this; // Retorna a instância do modelo
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}
