const path = require('path');
const db = require('../../database/models');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const URL_SERVER = "http://localhost:3000"

const productoAPIController = {
    list: async (req, res) => {
        try {
            const productos = await db.Productos.findAll({
                attributes: ['id', 'nombre', 'descripcion', 'img'],
                include: [{
                    model: db.VerIndex,
                    as: 'verIndex',
                    attributes: [],
                }]
            });

            productos.forEach(element => {
                element.setDataValue('detail', `${URL_SERVER}/api/product/detail/${element.id}`)
                element.setDataValue('img', `${URL_SERVER}/img/product/${element.img}`)
            });

            const result = {
                meta: {
                    count: productos.length,
                    status: 200,
                    url: `${URL_SERVER}/api/product/detail/:id`
                },
                data: productos
            }
            res.json(result)
        } catch (error) {
            console.log(error);
        }
    },
    show: async (req, res) => {
        try {
            const verindex = await db.VerIndex.findAll({
                attributes: ['nombre', [db.sequelize.fn('COUNT', sequelize.col('producto.verIndex_id')), 'total_productos']], // selecciona el nombre del género y cuenta los productos asociados
                include: [{
                    model: db.Productos,
                    as: 'producto',
                    attributes: [],
                }],
                group: ['id']
            })
            const result = {
                meta: {
                    count: verindex.length,
                    detail: `${URL_SERVER}/api/product/show/:id`,
                },
                data: verindex,
            };
            res.json(result)
        } catch (error) {
            console.log(error.message);
        }
    },
    detail: async (req, res) => {
        try {
            const id = req.params.id || req.query.id
            const producto = await db.Productos.findByPk(id, {
                include: [{
                    model: db.VerIndex,
                    as: 'verIndex',
                    attributes: ['nombre'],
                    required: false
                }]
            })
            const result = {
                meta: {
                    status: 200,
                    url: `${URL_SERVER}/api/product/detail/${producto.id}`
                },
                data: {
                    id: producto.id,
                    nombre: producto.nombre,
                    descripcion: producto.descripcion,
                    img: `${URL_SERVER}/img/product/${producto.img}`,
                    precio: producto.precio,
                    especificaciones: producto.especificaciones,
                    verIndex: producto.verIndex.nombre
                }
            }
            res.json(result)
        } catch (error) {
            console.log(error.message);
        }
    },
    last: async (req, res) => {
        try {
            const ultProd = await db.Productos.findAll({
                order: [['id', 'desc']],
                limit: 1
            })
            const result = {
                meta: {
                    detail: `${URL_SERVER}/api/product/last/${ultProd[0].id}`,
                },
                data: ultProd[0],
            };
            res.json(result)

        } catch (error) {
            console.log(error.message);
        }
    },
    getList: async (req, res) => {
        try {
            const lists = await db.Productos.findAll({
                include: ["verIndex"],
                attributes: {
                    exclude: ["verIndex_id"],
                    // Agregar el campo extra "url" utilizando la función sequelize.literal
                    include: [
                        [
                            sequelize.literal(
                                `CONCAT('http://localhost:3000/api/product/detail/', Productos.id)`
                            ),
                            "url",
                        ],
                    ],
                },
            });

            const response = {
                meta: {
                    status: 200,
                    count: lists.length,
                    path: "http://localhost:3000/api/products",
                },
                data: lists,
            };

            res.json(response);
        } catch (error) {
            console.log(error);
        }
    },
    search: async (req, res) => {
        try {
            const name = req.query.nombre;

            const productos = await db.Productos.findAll({
                where: {
                    nombre: { [Op.like]: '%' + name + '%' }
                },
                attributes: { exclude: ['verIndex_id'] },
                include: [{
                    model: db.VerIndex,
                    as: 'verIndex',
                    attributes: ['nombre'],
                }]
            });

            productos.forEach(element => {
                element.setDataValue('foto', `${URL_SERVER}/img/product/${element.img}`)
            });

            const result = {
                meta: {
                    status: 200,
                    url: `${URL_SERVER}/api/product/detail/${productos.id}`
                },
                data: productos
            }
            res.json(result)


        } catch (error) {
            console.log(error.message);
        }
    }
}
module.exports = productoAPIController;