const express = require('express');
const router = express.Router();

const productoControl = require('../controllers/productoControl');

router.get('/ProductoDetalle/:id', productoControl.productoDetalle);
router.get('/agregarProducto', productoControl.agregarProducto);
//router.post('/agregarProducto', upload.single('img'), productoControl.storeProducto);

router.get('/editarProducto', productoControl.editarProducto);
//router.put('/editarProducto', upload.single('img'), productoControl.updateProducto);

router.delete('/borrarProducto/:id', productoControl.destroyProducto);


module.exports = router;