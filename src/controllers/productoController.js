const db = require('../database/models')
const path = require('path')
const { validationResult } = require('express-validator')

const pathProduct = path.join(__dirname, '../public/img/product/')
const fs = require('fs');
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

const productoController = {
    getListadoProductos: async (req, res) => {
        try {
            const productJs = await db.Productos.findAll({ include: "verIndex" })
            res.render('products/listadoProductos', { productJs })
        } catch (error) {
            console.log(error);
        }
    },
    getBuscarProducto: async (req, res) => {
        try {
            const productJs = await db.Productos.findAll({
                where: {
                    nombre: { [Op.like]: `%${req.query.buscar}%` },
                },
                order: [["precio", "ASC"]],
                include: "verIndex"
            });
            //res.json(productJs);
            res.render('products/listadoProductos', { productJs })
        } catch (error) {
            console.log(error);
        }
    },
    getMenu: async (req, res) => {
        try {
            const productJs = await db.Productos.findAll({
                where: {
                    verIndex_id: req.params.index,
                },
                order: [["id", "ASC"]],
                include: "verIndex"

            });
            //res.json(productJs);
            res.render('products/listadoProductos', { productJs })
        } catch (error) {
            console.log(error);
        }
    },
    getProductoDetalle: async (req, res) => {
        try {
            const prodDet = await db.Productos.findByPk(req.params.id, { include: "verIndex" })
            res.render('products/ProductoDetalle', { prodDet })
        } catch (error) {
            console.log(error);
        }
    },
    getEditarProducto: async (req, res) => {
        try {
            const editProducto = await db.Productos.findByPk(req.params.id);
            const index = await db.VerIndex.findAll()
            res.render('../views/products/editarProducto', { editProducto, index })

        } catch (error) {
            console.log(error);
        }
    },
    putActualizarProducto: async (req, res) => {
        let errors = validationResult(req);
        try {
            const index = await db.VerIndex.findAll()
            if (errors.isEmpty()) {
                const pUpdate = await db.Productos.findByPk(req.params.id);

                pUpdate.nombre = req.body.nombre || pUpdate.nombre;
                pUpdate.descripcion = req.body.descripcion || pUpdate.descripcion;
                pUpdate.categoria = req.body.categoria || pUpdate.categoria;
                pUpdate.envio = req.body.envio || pUpdate.envio;
                pUpdate.verIndex_id = req.body.verIndex || pUpdate.verIndex_id;
                pUpdate.oferta = req.body.oferta || pUpdate.oferta;
                pUpdate.precio = parseFloat(req.body.precio) || pUpdate.precio;
                pUpdate.descuento = req.body.descuento || pUpdate.descuento;
                pUpdate.especificaciones = req.body.especificaciones || pUpdate.especificaciones;
                pUpdate.img = req.file?.filename || pUpdate.img;

                await db.Productos.update({
                    nombre: req.body.nombre,
                    descripcion: req.body.descripcion,
                    categoria: req.body.categoria,
                    envio: req.body.envio,
                    verIndex_id: req.body.verIndex,
                    oferta: req.body.oferta,
                    precio: parseFloat(req.body.precio),
                    descuento: req.body.descuento,
                    especificaciones: req.body.especificaciones,
                    img: req.file?.filename
                }, {
                    where: {
                        id: req.params.id
                    }
                })

                res.redirect('/products')
            } else {
                res.render('../views/products/editarProducto', { errors: errors.array(), oldData: req.body, idProd: req.params.id, prodN: req.body.nombre, index: index })
            }

        } catch (error) {
            console.log(error);
        }
    },
    getAgregarProducto: async (req, res) => {
        try {
            const index = await db.VerIndex.findAll()
            // console.log(index);
            res.render('../views/products/agregarProducto', { index })
        } catch (error) {
            console.log(error);
        }
    },
    postGuardarProducto: async (req, res) => {
        let errors = validationResult(req);
        try {
            const index = await db.VerIndex.findAll()
            if (errors.isEmpty()) {
                //Genero un nuevo Producto
                const newProduct = {
                    nombre: req.body.nombre,
                    descripcion: req.body.descripcion,
                    especificaciones: req.body.especificaciones,
                    img: req.file?.filename || 'img-default.png',
                    categoria: req.body.categoria,
                    precio: parseFloat(req.body.precio),
                    descuento: 40,
                    verIndex_id: req.body.verIndex
                }
                //Agrego el prod nuevo a la DB
                await db.Productos.create(newProduct)
                res.redirect('/')

            } else {
                const deleteFile = req.file?.filename

                fs.unlink(pathProduct + deleteFile, function (err) {
                    if (err && err.code == 'ENOENT') {
                        // file doens't exist
                        console.log("File doesn't exist, won't remove it.   ");
                    } else if (err) {
                        // other errors, e.g. maybe we don't have enough permission
                        console.log("Error occurred while trying to remove file");
                    } else {
                        console.log(`removed   ${deleteFile}`);
                    }
                });
                res.render('../views/products/agregarProducto', { errors: errors.array(), oldData: req.body, index: index })
            }

        } catch (error) {
            console.log(error);
        }
    },
    delEliminarProducto: async (req, res) => {
        const prodEliminar = await db.Productos.findByPk(req.params.id)
        try {
            await db.Productos.destroy({ where: { id: req.params.id } });
            //Elimino Imagen
            fs.unlinkSync(path.join(__dirname, '../public/img/product', prodEliminar.img));
            res.redirect('/products')
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = productoController;