module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('People', [{
      name: 'John Doe',
      isBetaMember: false
    }], {});
  },

  down() => { },
};
