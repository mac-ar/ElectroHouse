const express = require('express');

const router = express.Router();

const productoControl = require('../controllers/productoControl');

router.get('/editarProducto', productoControl.editarProducto);

router.get('/Carrito', productoControl.Carrito);

router.get('/ProductoDetalle', productoControl.productoDetalle);

router.get('/agregarProducto', productoControl.agregarProducto);

module.exports = router;