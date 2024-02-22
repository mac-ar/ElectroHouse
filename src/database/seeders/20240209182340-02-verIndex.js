'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /* Example:*/
    await queryInterface.bulkInsert('verIndex', [{
      nombre: 'NUEVO',
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null
    },
    {
      nombre: 'OFERTA',
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null
    },
    {
      nombre: 'OUTLET',
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null
    }], {});

  },

  async down(queryInterface, Sequelize) {
    /* Example:*/
    await queryInterface.bulkDelete('verIndex', null, {});

  }
};
