const express = require('express');
const router = express.Router();

const carritoController = require('../controllers/carritoController');

// Listado del Carrito
router.get('/', carritoController.getCarrito);
//  Cargo producto en el carrito
router.post('/createCarrito/:id', carritoController.postStoreCarrito);
// Compra del Carrito
router.get('/compraCarrito', carritoController.getCompra);
// pago el carrito
router.post('/historialCarrito', carritoController.postHistorial);
// Elimino producto del carrito
router.delete('/borrarCarrito/:id', carritoController.destroyCarrito);


module.exports = router;