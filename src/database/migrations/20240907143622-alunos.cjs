require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

module.exports = {
  // Função "up" é executada quando a migração é aplicada
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('alunos', { // Cria a tabela 'alunos' no banco de dados
      id: {
        type: Sequelize.INTEGER, // Define o tipo de dado como inteiro
        allowNull: false, // Não permite valores nulos para esse campo
        autoIncrement: true, // O valor do ID será auto-incrementado
        primaryKey: true, // Define o ID como chave primária
      },

      nome: {
        type: Sequelize.STRING, // Define o tipo de dado como string (texto)
        allowNull: false, // Campo obrigatório
      },

      sobrenome: {
        type: Sequelize.STRING, // Define o tipo de dado como string
        allowNull: false, // Campo obrigatório
      },

      email: {
        type: Sequelize.STRING, // Define o tipo de dado como string
        allowNull: false, // Campo obrigatório
      },

      idade: {
        type: Sequelize.INTEGER, // Define o tipo de dado como inteiro (número)
        allowNull: false, // Campo obrigatório
      },

      peso: {
        type: Sequelize.FLOAT, // Define o tipo de dado como ponto flutuante (número decimal)
        allowNull: false, // Campo obrigatório
      },

      altura: {
        type: Sequelize.FLOAT, // Define o tipo de dado como ponto flutuante (número decimal)
        allowNull: false, // Campo obrigatório
      },

      created_at: {
        type: Sequelize.DATE, // Define o tipo de dado como data
        allowNull: false, // Campo obrigatório
      },

      updated_at: {
        type: Sequelize.DATE, // Define o tipo de dado como data
        allowNull: false, // Campo obrigatório
      },
    });
  },

  // Função "down" é executada quando a migração é revertida
  down: async (queryInterface) => {
    await queryInterface.dropTable('alunos'); // Remove a tabela 'alunos' do banco de dados
  },
};
