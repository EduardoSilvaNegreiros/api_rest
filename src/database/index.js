import Sequelize from 'sequelize'; // ORM para se conectar ao banco de dados
import databaseConfig from '../config/database'; // Configurações do banco de dados
import Aluno from '../models/Aluno'; // Modelo Aluno
import User from '../models/User'; // Modelo User

const models = [Aluno, User]; // Array com todos os modelos

const connection = new Sequelize(databaseConfig); // Cria a conexão com o banco

// Inicializa cada modelo com a conexão
models.forEach((model) => model.init(connection));

// Associa os modelos se houver a função associate
models.forEach((model) => model.associate && model.associate(connection.models));
