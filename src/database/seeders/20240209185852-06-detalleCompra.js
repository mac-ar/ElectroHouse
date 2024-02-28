'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /* Example:*/
    await queryInterface.bulkInsert('detalleCompras', [{
      idCabeceraCompra: 1,
      producto_id: 1,
      cantidad: 1,
      precioUnitario: 390770,
      descuento: 10,
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null
    }], {});

  },

  async down(queryInterface, Sequelize) {
    /* Example:
     */
    await queryInterface.bulkDelete('detalleCompras', null, {});

  }
};
