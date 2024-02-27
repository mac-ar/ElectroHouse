const fs = require('fs');
const path = require('path')
const db = require('../database/models')

const pathCarrito = path.join(__dirname, '../data/listaCarrito.json')
const pathhistorialCarrito = path.join(__dirname, '../data/historialCarrito.json')
const pathProducto = path.join(__dirname, '../data/listaProductos.json')
const pathCliente = path.join(__dirname, '../data/listaClientes.json')

const subTotal = 0;

const carritoController = {
    getCarrito: (req, res) => {
        const listaCarrito = JSON.parse(fs.readFileSync(pathCarrito, 'utf-8'))
        res.render('../views/products/Carrito', { listaCarrito })
        //res.render('../views/products/Carrito')
    },
    postStoreCarrito: async (req, res) => {
        // JSON de productos
        // listaCarrito = CabeceraCompras
        try {
            const listaProductos = await db.Productos.findByPk(req.params.id);
            const listaCarrito = JSON.parse(fs.readFileSync(pathCarrito, 'utf-8'))
            let cantidad = parseInt(req.body.cantidad)

            const newProduct = {
                id: listaProductos.id,
                nombre: listaProductos.nombre,
                usuario: req.session.userLogged.id,
                img: listaProductos.img,
                precio: listaProductos.precio,
                descuento: listaProductos.descuento,
                subtotal: listaProductos.precio - ((listaProductos.precio * listaProductos.descuento) / 100),
                cantidad: cantidad
            }
            // Agrego nuevo producto al carrito
            listaCarrito.push(newProduct)

            // Convertir a JSON y escribir el archivo js
            fs.writeFileSync(pathCarrito, JSON.stringify(listaCarrito, null, ' '))
            // redireccionamos al listado de productos
            res.redirect('/Carrito')
        } catch (error) {
            console.log(error);
        }

    },
    getCompra: (req, res) => {

        const listaCarrito = JSON.parse(fs.readFileSync(pathCarrito, 'utf-8'))

        let carrito = listaCarrito.filter(e => e.usuario == req.session.userLogged.id)
        // res.json(carrito)
        res.render('../views/products/compraCarrito', { carrito })

    },

    postHistorial: async (req, res) => {
        // JSON de productos
        // const listaProductos = JSON.parse(fs.readFileSync(pathProducto, 'utf-8'))
        const listaCarrito = JSON.parse(fs.readFileSync(pathCarrito, 'utf-8'))
        let carrito = listaCarrito.filter(e => e.usuario == req.session.userLogged.id)

        try {
            let total = 0

            for (let index = 0; index < carrito.length; index++) {
                total = total + carrito[index].precio;
            }

            let cantidad = carrito.length
            const cabecera = {
                usuario_id: req.session.userLogged.id,
                fechaCompra: new Date(),
                precioTotal: total,
                cerrado: 1,
                cantidadTotal: cantidad
            }
            const cabera_id = await db.CabeceraCompras.create(cabecera);

            let detalle = [];
            for (let index = 0; index < carrito.length; index++) {
                let deta = {
                   // id: null,
                    idCabeceraCompra: cabera_id.id,
                    cantidad: carrito[index].cantidad,
                    producto_id: carrito[index].id,
                    precioUnitario: carrito[index].precio,
                    descuento: carrito[index].descuento
                }
                await db.DetalleCompras.create(deta)
            }
            // Borrar el Carrito Json
            let newProducts = []
            fs.writeFileSync(pathCarrito, JSON.stringify(newProducts, null, ' '))

            //alert('Gracias por su Compra')
            res.redirect('/')

        } catch (error) {
            console.log(error);
        }
    },
    destroyCarrito: (req, res) => {
        const pathCarrito = path.join(__dirname, '../data/listaCarrito.json')
        const listaCarrito = JSON.parse(fs.readFileSync(pathCarrito, 'utf-8'))
        const id = req.params.id
        let newProducts = listaCarrito.filter(producto => producto.id != id)
        fs.writeFileSync(pathCarrito, JSON.stringify(newProducts, null, ' '))
        res.redirect('/Carrito');
    }
}


module.exports = carritoController;