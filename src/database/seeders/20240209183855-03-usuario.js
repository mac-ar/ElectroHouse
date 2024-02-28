'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /*Example:*/
    await queryInterface.bulkInsert('usuarios', [
      {
        nombre: "Constanza",
        apellido: "Fontenla",
        email: "mcf@gmail.com",
        img: "img-1704155430324.jpg",
        usuario: "mcf",
        password: "$2a$10$b3w5pTDubwMkJqP5k8AmhOIeun/KeGuUywJvjwVL88O5YgYHg0Id2",
        perfil_id: 1,
        createdAt: new Date(),
        updatedAt: null,
        deletedAt: null
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    /* Example: */
    await queryInterface.bulkDelete('usuarios', null, {});

  }
};
