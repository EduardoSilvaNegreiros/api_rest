const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');

dotenv.config();

const config = {
  development: {
    dialect: 'mysql',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    dialectOptions: {
      timezone: 'America/Sao_Paulo',
    },
    timezone: 'America/Sao_Paulo',
    define: {
      timestamps: true,
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
};

const sequelize = new Sequelize(config.development);

const loadConfig = async () => config;

const Aluno = sequelize.define('Aluno', {
  nome: {
    type: sequelize.DataTypes.STRING,
  },
  email: {
    type: sequelize.DataTypes.STRING,
  },
}, {
  timestamps: true,
  underscored: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

module.exports = { sequelize, loadConfig, Aluno };
