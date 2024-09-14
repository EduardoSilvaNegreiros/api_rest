// Importa o módulo Sequelize para gerenciar a conexão com o banco de dados
import { Sequelize } from 'sequelize';

// Importa a configuração do banco de dados
import databaseConfig from '../config/database';

// Importa os modelos que serão usados na aplicação
import Aluno from '../models/Aluno';
import User from '../models/User';

// Cria uma lista de modelos para serem inicializados com a conexão
const models = [Aluno, User];

// Cria uma nova instância de Sequelize para gerenciar a conexão com o banco de dados
const connection = new Sequelize(
  process.env.DATABASE_NAME, // Nome do banco de dados
  process.env.DATABASE_USERNAME, // Nome de usuário do banco de dados
  process.env.DATABASE_PASSWORD, // Senha do banco de dados

  {
    dialect: 'mysql', // Dialeto do banco de dados (MySQL)
    host: process.env.DATABASE_HOST, // Endereço do host do banco de dados
    port: 3306, // Porta padrão do MySQL
    username: process.env.DATABASE_USERNAME, // Nome de usuário do banco de dados
    password: process.env.DATABASE_PASSWORD, // Senha do banco de dados
    database: process.env.DATABASE_NAME, // Nome do banco de dados
    define: {
      timestamps: true, // Habilita os timestamps automáticos (created_at e updated_at)
      underscored: true, // Usa nomes de colunas com sublinhados em vez de camelCase
      underscoredAll: true, // Usa sublinhados para todos os nomes de colunas e tabelas
      createdAt: 'created_at', // Define o nome da coluna de criação
      updatedAt: 'updated_at', // Define o nome da coluna de atualização
    },
    dialectOptions: {
      timezone: 'America/Sao_Paulo', // Define o fuso horário para o banco de dados
    },
    timezone: 'America/Sao_Paulo', // Define o fuso horário para a aplicação
  },
);

// Inicializa todos os modelos com a conexão do Sequelize
models.forEach((model) => model.init(connection));
