const express = require('express');
const router = express.Router();

const carritoController = require('../controllers/carritoControl');


router.get('/', carritoController.Carrito);
//  Cargo producto en el carrito
router.post('/createCarrito/:id', carritoController.storeCarrito);
// Compra del Carrito
router.get('/compraCarrito/:id', carritoController.compra);
// pago el carrito
router.post('/historialCarrito/:id', carritoController.historial);
// Elimino producto del carrito
router.delete('/borrarCarrito/:id', carritoController.destroyCarrito);


module.exports = router;