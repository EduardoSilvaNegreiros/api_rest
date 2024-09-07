import dotenv from 'dotenv';

dotenv.config();

import { Sequelize } from 'sequelize';
import Aluno from '../models/Aluno.js';

const models = [Aluno]

const connection = new Sequelize (
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'mariadb',
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

models.forEach (model => model.init(connection))
