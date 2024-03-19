const path = require('path');
const db = require('../../database/models');
const sequelize = require('sequelize');
const Op = sequelize.Op;

const productoAPIController = {
    list: async (req, res) => {
        try {
            const productos = await db.Productos.findAll({
                attributes: ['id', 'nombre', 'descripcion'],
                include: [{
                    model: db.VerIndex,
                    as: 'verIndex',
                    attributes: [],
                }]
            })
            const result = {
                meta: {
                    count: productos.length,
                    status: 200,
                    url: 'http://localhost:3000/api/product/detail/:id'
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
                    detail: 'http://localhost:3002/api/genres/detail/:id',
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
                    url: `http://localhost:3000/api/users/detail/${producto.id}`
                },
                data: {
                    id: producto.id,
                    nombre: producto.nombre,
                    descripcion: producto.descripcion,
                    img: `/img/product/${producto.img}`,
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
                order:[['id','desc']],
                limit: 1
            })            
            const result = {
                meta: {
                    count: ultProd.length,
                    detail: 'http://localhost:3002/api/genres/detail/:id',
                },
                data: ultProd,
            };
            res.json(result)
            
        } catch (error) {
            console.log(error.message);
        }
        

    }
}
module.exports = productoAPIController;