const path = require('path');
const db = require('../../database/models');

const productoAPIController = {
    list: async (req, res) => {
        try {
            const productos = await db.Productos.findAll({
                include: ['perfiles']
            })
            const result = {
                meta: {
                    count: productos.length,
                    status: 200,
                    url: '/api/product'
                },
                data: {
                    id: productos.id,
                    nombre: productos.nombre,
                    descripcion: productos.descripcion,
                    detalle:`/:${productos.id}`
                }
            }
            res.json(result)
        } catch (error) {
            console.log(error);
        }
    },
    detail: async (req,res) => {        
        try {
            const id = req.params.id || req.query.id
            const producto = await db.productos.findByPk(id, {include: [{
                model: db.Verindex,
                as: "verIndex",
                attributes: ['nombre'],
                required: false}]
            })
            const result = {
                meta: {
                    status: 200,
                    url: `/api/product/${producto.nombre}`
                },
                data: {
                    id: producto.id,
                    nombre: producto.nombre,
                    descripcion: producto.descripcion,
                    img:`/img/product/${producto.img}`,
                    precio: producto.precio,
                    especificaciones: producto.especificaciones,
                    verIndex: producto.verIndex.nombre
                }
            }
            res.json(result)
        } catch (error) {
            console.log(error.message);
        }        
    }
}
module.exports = productoAPIController;