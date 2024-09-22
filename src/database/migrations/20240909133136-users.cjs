module.exports = {
  // Função "up" é executada quando a migração é aplicada
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
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
    email: {
      type: Sequelize.STRING, // Define o tipo de dado como string
      allowNull: false, // Campo obrigatório
      unique: true, // O email deve ser único, não pode se repetir
    },
    password_hash: {
      type: Sequelize.STRING, // Define o tipo de dado como string
      allowNull: false, // Campo obrigatório (armazenará a senha criptografada)
    },
    created_at: {
      type: Sequelize.DATE, // Define o tipo de dado como data
      allowNull: false, // Campo obrigatório
    },
    updated_at: {
      type: Sequelize.DATE, // Define o tipo de dado como data
      allowNull: false, // Campo obrigatório
    },
  }),

  // Função "down" é executada quando a migração é revertida
  down: (queryInterface) => queryInterface.dropTable('users'), // Remove a tabela 'users' do banco de dados
};
