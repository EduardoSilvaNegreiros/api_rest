const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [
      {
      name: 'Luiz',
      email: 'luiz1@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
      {
      name: 'Eduardo',
      email: 'edu@gmail.com',
      password_hash: await bcryptjs.hash('1234567', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
      {
      name: 'Geronimo',
      email: 'geronimo@gmail.com',
      password_hash: await bcryptjs.hash('12345678', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    ],
      {});
  },

  down() => { },
};
