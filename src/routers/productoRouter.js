const express = require('express');
const router = express.Router();

const upload = require('../middlewares/multer')
const validateProducts = require('../middlewares/validateProducts')
const productoControl = require('../controllers/productoControl');

router.get('/', productoControl.getListadoProductos);

/* router.get('/editarProducto', productoControl.editarProducto); */
router.get('/editarProducto/:id', productoControl.getEditarProducto);
router.put('/actualizarProducto/:id',upload.single('imagen'), validateProducts, productoControl.putActualizarProducto)

/* router.get('/Carrito', productoControl.Carrito); */

/* router.get('/ProductoDetalle', productoControl.productoDetalle); */
router.get('/ProductoDetalle/:id', productoControl.getProductoDetalle);

router.get('/agregarProducto', productoControl.getAgregarProducto);
router.post('/guardarProducto', upload.single('imagen') , validateProducts, productoControl.postGuardarProducto)
router.delete('/eliminarProducto/:id', productoControl.delEliminarProducto)

module.exports = router;