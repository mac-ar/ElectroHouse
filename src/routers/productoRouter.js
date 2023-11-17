const express = require('express');

const router = express.Router();

const productoControl = require('../controllers/productoControl');

router.get('/abmProducto', productoControl.abmProducto);

router.get('/Carrito', productoControl.Carrito);

router.get('/ProductoDetalle', productoControl.productoDetalle);

module.exports = router;