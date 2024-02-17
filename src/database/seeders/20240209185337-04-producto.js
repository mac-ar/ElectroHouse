'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /* Example:*/
    await queryInterface.bulkInsert('productos', [{
      nombre: "Heladera Electrolux",
      descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      especificaciones: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      img: "heladera.jpg",
      precio: 390770,
      descuento: 10,
      verIndex_id: 1,
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null
    },
    {
      nombre: "Aire Split BGH",
      descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      especificaciones: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      img: "aire.jpg",
      precio: "690770",
      descuento: 20,
      verIndex_id: 1,
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null
    },
    {
      nombre: "Licuadora Liliana",
      descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      especificaciones: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      img: "licuadora.jpg",
      precio: "69770",
      descuento: 10,
      verIndex_id: 1,
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null
    },
    {
      nombre: "Plancha Phillips",
      descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      especificaciones: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      img: "plancha.jpg",
      precio: 36750,
      descuento: 20,
      verIndex_id: 1,
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null
    },
    {
      nombre: "Microondas BGH",
      descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      especificaciones: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      img: "micro.jpg",
      precio: 115770,
      descuento: 5,
      verIndex_id: 1,
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null
    },
    {
      nombre: "Estufa Gamma",
      descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      especificaciones: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img: "estufa.jpg",
      precio: 25530,
      descuento: 40,
      verIndex_id: 2,
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null
    },
    {
      nombre: "Cafetera Express",
      descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      especificaciones: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img: "cafetera.jpg",
      precio: 116290,
      descuento: 40,
      verIndex_id: 2,
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null
    },
    {
      nombre: "Lavarropa Drean",
      descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      especificaciones: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img: "lavarropa.jpg",
      precio: 389999,
      descuento: 40,
      verIndex_id: 2,
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null
    },
    {
      nombre: "Aspiradora",
      descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      especificaciones: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img: "aspiradora.jpg",
      precio: 85490,
      descuento: 40,
      verIndex_id: 2,
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null
    },
    {
      nombre: "Batidora",
      descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      especificaciones: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img: "batidora.jpg",
      precio: 77399,
      descuento: 40,
      verIndex_id: 2,
      createdAt: new Date(),
      updatedAt: null,
      deletedAt: null
    }], {});

  },

  async down(queryInterface, Sequelize) {
    /*Example://      */
    await queryInterface.bulkDelete('productos', null, {});

  }
};
