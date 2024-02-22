'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /** Example:*/
    await queryInterface.bulkInsert('perfiles', [{
      nombre: 'ADMINISTRADOR',
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null
    },
    {
      nombre: 'CLIENTE',
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null
    }], {});

  },

  async down(queryInterface, Sequelize) {
    /** Example:*/
    await queryInterface.bulkDelete('perfiles', null, {});

  }
};
