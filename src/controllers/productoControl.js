
const productoController = {

    productoDetalle: (req, res) => {
        res.render('../views/products/ProductoDetalle')
    },
    Carrito: (req, res) => {
        res.render('../views/products/Carrito')
    },
    abmProducto: (req, res) => {
        res.render('../views/products/abmProducto')
    }

}

module.exports = productoController;