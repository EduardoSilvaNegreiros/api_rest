import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database.js';
import Aluno from '../models/Aluno';

const models = [Aluno];

const connection = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,

  {
    dialect: 'mysql',
    host: process.env.DATABASE_HOST,
    port: 3306,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },

    dialectOptions: {
      timezone: 'America/Sao_Paulo'
    },

    timezone: 'America/Sao_Paulo'
  }
)

models.forEach(model => model.init(connection))
