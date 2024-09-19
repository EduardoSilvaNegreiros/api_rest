import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import User from '../models/User'; // Ajuste o caminho conforme necessário

dotenv.config();

const connection = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'mysql',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT || 3306,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    dialectOptions: {
      timezone: 'America/Sao_Paulo',
    },
    timezone: 'America/Sao_Paulo',
  },
);

// Inicializa todos os modelos com a conexão do Sequelize
User.init(connection);

// Testa a conexão com o banco de dados
connection.authenticate()
  .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso.'))
  .catch((err) => {
    console.error('Não foi possível conectar ao banco de dados:', err);
    process.exit(1);
  });

export default connection;
