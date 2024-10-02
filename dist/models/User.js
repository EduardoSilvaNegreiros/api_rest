"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// Importa Sequelize para modelagem de dados e bcryptjs para hash de senhas
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

// Classe User que estende Model do Sequelize
 class User extends _sequelize.Model {
  // Método estático init para inicializar o modelo
  static init(sequelize) {
    // Define os campos da tabela
    super.init({
      // Campo nome: string com validação de comprimento
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      // Campo email: string única com validação de email
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      // Campo password_hash: armazena o hash da senha
      password_hash: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      // Campo virtual password: não salvo no banco, apenas na instância
      password: {
        type: _sequelize2.default.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha precisa ter entre 6 e 50 caracteres',
          },
        },
      },
    }, {
      sequelize, // Conexão do banco de dados
    });

    // Hook para criptografar a senha antes de salvar o usuário
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await _bcryptjs2.default.hash(user.password, 8);
      }
    });

    return this; // Retorna a instância do modelo
  }

  // Método para validar a senha
  passwordIsValid(password) {
    return _bcryptjs2.default.compare(password, this.password_hash);
  }
} exports.default = User;
