const fs = require('fs');
const path = require('path')

const pathCarrito = path.join(__dirname, '../data/listaCarrito.json')
const pathhistorialCarrito = path.join(__dirname, '../data/historialCarrito.json')
const pathProducto = path.join(__dirname, '../data/listaProductos.json')
const pathCliente = path.join(__dirname, '../data/listaClientes.json')

const carritoController = {
    Carrito: (req, res) => {
        const listaCarrito = JSON.parse(fs.readFileSync(pathCarrito, 'utf-8'))
        res.render('../views/products/Carrito', { listaCarrito })
        //res.render('../views/products/Carrito')
    },
    storeCarrito: (req, res) => {
        // JSON de productos
        const listaProductos = JSON.parse(fs.readFileSync(pathProducto, 'utf-8'))
        const listaCarrito = JSON.parse(fs.readFileSync(pathCarrito, 'utf-8'))
        let cantidad = req.body.cantidad
        listaProductos.forEach(element => {
            if (element.id == req.params.id) {
                // creamos nuevo producto del formulario 
                const newProduct = {
                    id: element.id,
                    nombre: element.nombre,
                    descripcion: element.descripcion,
                    img: element.img,
                    categoria: element.categoria,
                    oferta: element.oferta,
                    precio: element.precio,
                    descuento: element.descuento,
                    especificaciones: element.especificaciones,
                    cantidad: cantidad || req.body.cantidad
                }
                // Agrego nuevo producto al carrito
                listaCarrito.push(newProduct)
            }
        });

        // Convertir a JSON y escribir el archivo js
        fs.writeFileSync(pathCarrito, JSON.stringify(listaCarrito, null, ' '))
        // redireccionamos al listado de productos
        res.redirect('/Carrito')
    },
    compra: (req, res) => {
        const listaCarrito = JSON.parse(fs.readFileSync(pathCarrito, 'utf-8'))

        let carrito = listaCarrito.find(e => e.id == req.params.id)
        res.render('../views/products/compraCarrito', { carrito })

    },
    historial: (req, res) => {
        // JSON de productos
        // const listaProductos = JSON.parse(fs.readFileSync(pathProducto, 'utf-8'))
        const listaCarrito = JSON.parse(fs.readFileSync(pathCarrito, 'utf-8'))
        const listaClientes = JSON.parse(fs.readFileSync(pathCliente, 'utf-8'))

        let userInCookie = req.cookies.user;
        let user = listaClientes.find(oneUser => oneUser.usuario == userInCookie)
        listaCarrito.forEach(element => {
            if (element.id == req.params.id) {
                // creamos nuevo historial del formulario 
                const newProduct = {
                    // id: 1,
                    producto_id: req.body.producto_id,
                    usuario_id: user.id,
                    fecha: Date(),
                    precioTotal: req.body.total,
                    cantidad: req.body.cantidad
                }
                // Agrego nuevo producto al carrito
                historialCarrito.push(newProduct)
            }
        });

        // Convertir a JSON y escribir el archivo js
        fs.writeFileSync(pathhistorialCarrito, JSON.stringify(historialCarrito, null, ' '))
        // redireccionamos al listado de productos
        res.redirect('/')

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