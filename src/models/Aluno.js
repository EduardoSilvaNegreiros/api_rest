// Importando Sequelize e a classe Model
import Sequelize, { Model } from 'sequelize';

// Definindo a classe Aluno que herda da classe Model
export default class Aluno extends Model {
  // Método estático init, usado para inicializar o modelo e definir as colunas
  static init(sequelize) {
    // Chamando o método init da classe Model
    super.init({
      // Coluna nome
      nome: {
        // Definindo o tipo como STRING (texto)
        type: Sequelize.STRING,
        // Valor padrão se nenhum valor for fornecido
        defaultValue: '',
        // Validações para o campo
        validate: {
          // A validação de comprimento exige entre 3 e 255 caracteres
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres.', // Mensagem de erro
          },
        },
      },
      // Coluna sobrenome (semelhante à coluna nome)
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobrenome precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      // Coluna email
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        // Definindo o e-mail como único (não pode haver duplicados)
        unique: {
          msg: 'E-mail já existe', // Mensagem de erro se já existir no banco de dados
        },
        // Validações
        validate: {
          // Validação para garantir que o valor seja um e-mail válido
          isEmail: {
            msg: 'E-mail inválido', // Mensagem de erro se o formato for inválido
          },
        },
      },
      // Coluna idade
      idade: {
        // Definindo o tipo como INTEGER (número inteiro)
        type: Sequelize.INTEGER,
        defaultValue: '',
        // Validação para garantir que a idade seja um número inteiro
        validate: {
          isInt: {
            msg: 'Idade precisa ser um número inteiro', // Mensagem de erro
          },
        },
      },
      // Coluna peso
      peso: {
        // Definindo o tipo como FLOAT (número decimal)
        type: Sequelize.FLOAT,
        defaultValue: '',
        // Validação para garantir que o peso seja um número decimal ou inteiro
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um número inteiro ou de ponto flutuante', // Mensagem de erro
          },
        },
      },
      // Coluna altura
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        // Validação para garantir que a altura seja um número decimal ou inteiro
        validate: {
          isFloat: {
            msg: 'Altura precisa ser um número inteiro ou de ponto flutuante', // Mensagem de erro
          },
        },
      },
    }, {
      // Passando a conexão Sequelize para o modelo
      sequelize,
    });

    // Retorna a instância do modelo
    return this;
  }
}
