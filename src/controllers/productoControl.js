const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');

const pathProduct = path.join(__dirname, '../public/img/product/')
const productFilePath = path.join(__dirname, '../data/listaProductos.json');
let productJs = JSON.parse(fs.readFileSync(productFilePath), 'utf-8');

fs.unlinkSync

const productoController = {

    getListadoProductos: (req, res) => {
        res.render('products/listadoProductos', { productJs })
    },
    getProductoDetalle: (req, res) => {
        let prodDet = productJs.find(e => e.id == req.params.id)
        res.render('products/ProductoDetalle', { prodDet })
    },

    getEditarProducto: (req, res) => {
        let editProducto = productJs.find(e => e.id == req.params.id);
        res.render('../views/products/editarProducto', { editProducto })
    },

    putActualizarProducto: (req, res) => {

        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let pUpdate = productJs.find(e => e.id == req.params.id);

            pUpdate.nombre = req.body.nombre || pUpdate.nombre;
            pUpdate.descripcion = req.body.descripcion || pUpdate.descripcion;
            pUpdate.categoria = req.body.categoria || pUpdate.categoria;
            pUpdate.envio = req.body.envio || pUpdate.envio;
            pUpdate.verIndex = req.body.verIndex || pUpdate.verIndex;
            pUpdate.oferta = req.body.oferta || pUpdate.oferta;
            pUpdate.precio = req.body.precio || pUpdate.precio;
            pUpdate.descuento = req.body.descuento || pUpdate.descuento;
            pUpdate.especificaciones = req.body.especificaciones || pUpdate.especificaciones;
            pUpdate.img = req.file?.filename || pUpdate.img;

            fs.writeFileSync(productFilePath, JSON.stringify(productJs, null, ' '))
            res.redirect('/products')
        } else {
            res.render('../views/products/editarProducto', { errors: errors.array(), oldData: req.body, idProd: req.params.id, prodN: req.body.nombre })
        }

    },
    getAgregarProducto: (req, res) => {
        res.render('../views/products/agregarProducto')
    },

    postGuardarProducto: (req, res) => {

        let errors = validationResult(req);

        if (errors.isEmpty()) {
            // Genero codigo para el Id
            let newNumber = productJs.filter(e => e.categoria == req.body.categoria).length + 1;
            let nRandom = Math.floor(Math.random() * 100);

            //Genero un nuevo Producto
            const newProduct = {
                id: newNumber && nRandom,
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                img: req.file?.filename || 'img-default.png',
                categoria: req.body.categoria,
                verIndex: req.body.verIndex,
                envio: "",
                oferta: "",
                precio: parseFloat(req.body.precio),
                descuento: 40,
                especificaciones: req.body.especificaciones
            }
            //Agrego el prod nuevo al array
            productJs.push(newProduct);
            //Escribo el archivo JS y convierto a JSON
            fs.writeFileSync(productFilePath, JSON.stringify(productJs, null, ' '))
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
            res.render('../views/products/agregarProducto', { errors: errors.array(), oldData: req.body })
        }
    },

    delEliminarProducto: (req, res) => {

        prodEliminar = productJs.find(e => e.id == req.params.id);
        productJs = productJs.filter(e => e.id != req.params.id);


        //Escribo el archivo JS y convierto a JSON
        fs.writeFileSync(productFilePath, JSON.stringify(productJs, null, ' '));
        //Elimino Imagen
        fs.unlinkSync(path.join(__dirname, '../public/img/product', prodEliminar.img));

        res.redirect('/products')
    }

}

module.exports = productoController;