// Importa Sequelize para modelagem de dados e bcryptjs para hash de senhas
import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

// Classe User que estende Model do Sequelize
export default class User extends Model {
  // Método estático init para inicializar o modelo
  static init(sequelize) {
    // Define os campos da tabela
    super.init({
      // Campo nome: string com validação de comprimento
      nome: {
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
        defaultValue: '',
      },
      // Campo virtual password: não salvo no banco, apenas na instância
      password: {
        type: Sequelize.VIRTUAL,
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
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this; // Retorna a instância do modelo
  }

  // Método para validar a senha
  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
