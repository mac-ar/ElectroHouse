const express = require('express');
const router = express.Router();
const userApiController = require('../../controllers/API/userApiController');

//Rutas

router.get('/', userApiController.list);
//Detalle de un ambum en base a un artista indicado
router.get('/:id', userApiController.detail);

module.exports = router;