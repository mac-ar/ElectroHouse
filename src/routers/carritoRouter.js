const express = require('express');

const router = express.Router();

const carritoController = require('../controllers/carritoControl');


router.get('/Carrito', carritoController.Carrito);
//  Cargo producto en el carrito
router.post('/Carrito/createCarrito/:id', carritoController.storeCarrito);
// Elimino producto del carrito
router.delete('/borrarCarrito/:id', carritoController.destroyCarrito);


module.exports = router;