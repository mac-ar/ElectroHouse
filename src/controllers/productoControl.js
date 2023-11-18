
const productoController = {

    productoDetalle: (req, res) => {
        res.render('../views/products/ProductoDetalle')
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