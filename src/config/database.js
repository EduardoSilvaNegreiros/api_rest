// Carrega as variáveis de ambiente do arquivo .env
require('dotenv').config();

module.exports = {
  // Define o tipo de banco de dados que será usado (MySQL neste caso)
  dialect: 'mysql',

  // Configurações de conexão com o banco de dados
  host: process.env.DATABASE_HOST, // Endereço do servidor de banco de dados
  port: process.env.DATABASE_PORT, // Porta do servidor de banco de dados
  username: process.env.DATABASE_USERNAME, // Nome de usuário para autenticação
  password: process.env.DATABASE_PASSWORD, // Senha do usuário
  database: process.env.DATABASE, // Nome do banco de dados a ser acessado

  // Configurações específicas do dialecto (MySQL)
  dialectOptions: {
    timezone: 'America/Sao_Paulo', // Define o fuso horário para o banco de dados
  },

  timezone: 'America/Sao_Paulo', // Define o fuso horário da aplicação

  // Configurações padrão para novos modelos criados
  define: {
    timestamps: true, // Adiciona automaticamente os campos createdAt e updatedAt
    underscored: true, // Utiliza o estilo snake_case para os campos no banco de dados
    underscoredAll: true, // Aplica o estilo snake_case a todos os nomes de campos
    createdAt: 'created_at', // Altera o nome do campo createdAt para created_at
    updatedAt: 'updated_at', // Altera o nome do campo updatedAt para updated_at
  },
};
