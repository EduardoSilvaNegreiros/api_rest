// Importa o Sequelize, que é a biblioteca ORM para se conectar ao banco de dados
import Sequelize from 'sequelize';

// Importa as configurações do banco de dados definidas no arquivo config/database.js
import databaseConfig from '../config/database';

// Importa os modelos Aluno e User
import Aluno from '../models/Aluno';
import User from '../models/User';

// Cria um array com todos os modelos que serão inicializados no banco de dados
const models = [Aluno, User];

// Cria a conexão com o banco de dados usando as configurações fornecidas
const connection = new Sequelize(databaseConfig);

// Inicializa cada modelo, associando-o à conexão com o banco de dados
models.forEach((model) => model.init(connection));

models.forEach((model) => model.associate && model.associate(connection.models));
