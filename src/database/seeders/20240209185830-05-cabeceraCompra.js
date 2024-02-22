'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /* Example:*/
    await queryInterface.bulkInsert('cabeceraCompras', [{
      usuario_id: 1,
      cantidadTotal: 1,
      precioTotal: 351693,
      fechaCompra: new Date(),
      cerrado: 1,
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null
    }], {});

  },

  async down(queryInterface, Sequelize) {
    /* Example:*/
    await queryInterface.bulkDelete('cabeceraCompras', null, {});

  }
};
