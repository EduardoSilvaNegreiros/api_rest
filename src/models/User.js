// Importa as bibliotecas Sequelize e bcryptjs para modelagem de dados e hash de senhas
import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

// Criação da classe User que estende a classe Model do Sequelize
export default class User extends Model {
  // Método estático init para inicializar o modelo
  static init(sequelize) {
    // Chama o método init da classe pai Model, definindo os campos da tabela
    super.init({
      // Campo nome: uma string que deve ter entre 3 e 255 caracteres
      nome: {
        type: Sequelize.STRING, // Tipo string no banco de dados
        defaultValue: '', // Valor padrão caso não seja fornecido
        validate: { // Validações aplicadas ao campo
          len: {
            args: [3, 255], // Limita o comprimento do nome
            msg: 'Campo nome deve ter entre 3 e 255 caracteres', // Mensagem de erro
          },
        },
      },
      // Campo email: uma string que armazena o email, única no banco de dados
      email: {
        type: Sequelize.STRING, // Tipo string
        defaultValue: '', // Valor padrão
        unique: { // O email deve ser único
          msg: 'Email já existe', // Mensagem se o email já existir
        },
        validate: { // Validação para garantir que seja um email válido
          isEmail: {
            msg: 'Email inválido', // Mensagem se o email for inválido
          },
        },
      },
      // Campo password_hash: armazena o hash da senha (a senha criptografada)
      password_hash: {
        type: Sequelize.STRING, // Tipo string para armazenar o hash da senha
        defaultValue: '', // Valor padrão
      },
      // Campo virtual password: não é salvo no banco, apenas existe na instância do modelo
      password: {
        type: Sequelize.VIRTUAL, // Campo virtual, não existe no banco de dados
        defaultValue: '', // Valor padrão
        validate: { // Validação para garantir que a senha tenha entre 6 e 50 caracteres
          len: {
            args: [6, 50], // Limite de caracteres da senha
            msg: 'A senha precisa ter entre 6 e 50 caracteres', // Mensagem de erro
          },
        },
      },
    }, {
      sequelize, // Passa a conexão do banco de dados para o Sequelize
    });

    // Hook que é executado antes de salvar o usuário, criptografando a senha
    this.addHook('beforeSave', async (user) => {
      if (user.password) { // Se a senha estiver presente
        // Criptografa a senha e armazena no campo password_hash
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this; // Retorna a instância do modelo
  }

  // Método para validar a senha comparando-a com o hash armazenado
  passwordIsValid(password) {
    // Compara a senha fornecida com o hash armazenado no banco de dados
    return bcryptjs.compare(password, this.password_hash);
  }
}
