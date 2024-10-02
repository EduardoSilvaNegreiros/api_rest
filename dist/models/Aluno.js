"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

// Classe Aluno que representa o modelo de dados
 class Aluno extends _sequelize.Model {
  // Método estático para inicializar o modelo
  static init(sequelize) {
    super.init(
      {
        // Coluna para o nome do aluno
        nome: {
          type: _sequelize2.default.STRING,
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
          type: _sequelize2.default.STRING,
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
          type: _sequelize2.default.STRING,
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
          type: _sequelize2.default.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'Idade precisa ser um número inteiro', // Validação para idade
            },
          },
        },
        // Coluna para o peso do aluno
        peso: {
          type: _sequelize2.default.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Peso precisa ser um número inteiro ou de ponto flutuante', // Validação para peso
            },
          },
        },
        // Coluna para a altura do aluno
        altura: {
          type: _sequelize2.default.FLOAT,
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
} exports.default = Aluno;
