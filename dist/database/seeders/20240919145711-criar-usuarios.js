"use strict";const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        nome: 'Luiz',
        email: 'luiz1@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Eduardo',
        email: 'edu@gmail.com',
        password_hash: await bcryptjs.hash('1234567', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Geronimo',
        email: 'geronimo@gmail.com',
        password_hash: await bcryptjs.hash('12345678', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {});
  },

};
