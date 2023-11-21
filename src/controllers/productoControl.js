const listaProductos = require('../data/listaProductos')
const listaOfertas = require('../data/listaOfertas')

const productoController = {
    productoDetalle: (req, res) => {
        let id = req.params.id
        let productoEncontrado = listaProductos.find(producto => producto.id == id)
        if (productoEncontrado) {
            return res.render('../views/products/ProductoDetalle', { producto: productoEncontrado })
        } else {
            return res.send('/')
        }
    },
    Carrito: (req, res) => {
        res.render('../views/products/Carrito')
    },
    editarProducto: (req, res) => {
        res.render('../views/products/editarProducto')
    },
    agregarProducto: (req, res) => {
        res.render('../views/products/agregarProducto')
    }
}

module.exports = productoController;