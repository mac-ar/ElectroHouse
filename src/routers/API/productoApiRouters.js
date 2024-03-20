const express = require('express');
const router = express.Router();
const productoApiController = require('../../controllers/API/productoApiControler');

//Rutas

router.get('/', productoApiController.list);
router.get('/show', productoApiController.show);
router.get('/last', productoApiController.last);
router.get('/detail/:id', productoApiController.detail);
router.get('/getList', productoApiController.getList);
router.get('/search', productoApiController.search);

module.exports = router;