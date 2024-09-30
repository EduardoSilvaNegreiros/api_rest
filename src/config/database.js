require('dotenv').config();

module.exports = {
  dialect: 'mysql', // Tipo de banco de dados

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
    timestamps: true, // Campos de data automática
    underscored: true, // Estilo snake_case
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
