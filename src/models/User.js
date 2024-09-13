import Sequelize, { Model } from 'sequelize'; // Importa o Sequelize e a classe Model do Sequelize.
import bcryptjs from 'bcryptjs'; // Importa o bcryptjs para hashing de senhas.
import sequelize from '../config/database'; // Importa a instância do banco de dados configurado.

// Define a classe User, que estende a classe Model do Sequelize.
class User extends Model {
  // Método para verificar se a senha informada bate com o hash armazenado no banco de dados.
  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}

// Inicializa o modelo User com os campos (colunas) e suas definições.
User.init({
  // Campo 'nome' do usuário.
  nome: {
    type: Sequelize.STRING, // Define o tipo STRING para o campo 'nome'.
    defaultValue: '', // Valor padrão do campo, caso não seja informado.
    validate: {
      // Validação de comprimento: 'nome' deve ter entre 3 e 255 caracteres.
      len: {
        args: [3, 255],
        msg: 'Campo nome deve ter entre 3 e 255 caracteres', // Mensagem de erro se a validação falhar.
      },
    },
  },

  // Campo 'email' do usuário.
  email: {
    type: Sequelize.STRING, // Define o tipo STRING para o campo 'email'.
    unique: {
      msg: 'Email já existe', // Garante que o email seja único no banco de dados e exibe essa mensagem se o email já existir.
    },
    defaultValue: '', // Valor padrão.
    validate: {
      // Validação para verificar se o formato do e-mail é válido.
      isEmail: {
        msg: 'E-mail inválido', // Mensagem de erro para um formato de e-mail inválido.
      },
    },
  },

  // Campo 'password_hash' onde a senha criptografada é armazenada.
  password_hash: {
    type: Sequelize.STRING, // Define o tipo STRING para armazenar o hash da senha.
    defaultValue: '', // Valor padrão.
  },

  // Campo 'password' é virtual, ou seja, não é salvo no banco de dados.
  // Ele é usado apenas temporariamente para receber a senha antes de ser criptografada.
  password: {
    type: Sequelize.VIRTUAL, // Campo virtual que não será salvo no banco.
    defaultValue: '', // Valor padrão.
    validate: {
      // Validação de comprimento: 'password' deve ter entre 6 e 50 caracteres.
      len: {
        args: [6, 50],
        msg: 'A senha precisa ter entre 6 e 50 caracteres', // Mensagem de erro para senha fora do comprimento permitido.
      },
    },
  },
}, {
  sequelize, // A instância do banco de dados é passada aqui.
  modelName: 'User', // Nome do modelo.
  tableName: 'users', // Nome da tabela no banco de dados.
  underscored: true, // Usar formato com underscore (ex: created_at) nos nomes de colunas.
  timestamps: true, // Habilita o Sequelize para adicionar colunas 'createdAt' e 'updatedAt'.
  createdAt: 'created_at', // Define o nome da coluna para a data de criação.
  updatedAt: 'updated_at', // Define o nome da coluna para a data de atualização.
});

// Hook (gancho) que é executado antes de salvar o usuário no banco de dados.
// Ele verifica se o campo 'password' foi preenchido e, se sim, gera um hash para essa senha.
User.addHook('beforeSave', async (user) => {
  if (user.password) { // Se o campo 'password' foi informado,
    user.password_hash = await bcryptjs.hash(user.password, 8);
  }
});

export default User; // Exporta o modelo User para ser utilizado em outras partes do projeto.
