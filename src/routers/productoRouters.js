const express = require('express');
const router = express.Router();

const upload = require('../middlewares/multer')
const validateProducts = require('../middlewares/validateProducts')
const productoControl = require('../controllers/productoController');

/* Listado Producto */
router.get('/', productoControl.getListadoProductos);

/* Detalle Producto */
router.get('/ProductoDetalle/:id', productoControl.getProductoDetalle);

/* Buscar Producto */
router.get('/buscarProducto/', productoControl.getBuscarProducto);
router.get('/menu/:index', productoControl.getMenu);

/* Editar Producto */
router.get('/editarProducto/:id', productoControl.getEditarProducto);
router.put('/actualizarProducto/:id', upload.single('imagen'), validateProducts, productoControl.putActualizarProducto)

/* Agregar Producto */
router.get('/agregarProducto', productoControl.getAgregarProducto);
router.post('/guardarProducto', upload.single('imagen'), validateProducts, productoControl.postGuardarProducto)

/* Eliminar Producto */
router.delete('/eliminarProducto/:id', productoControl.delEliminarProducto)

module.exports = router;