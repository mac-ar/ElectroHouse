const express = require('express');
const router = express.Router();
const userApiController = require('../../controllers/API/userApiController');

//Rutas

router.get('/', userApiController.list);
router.get('/detail/:id', userApiController.detail);
router.get('/last', userApiController.last);
router.get('/show', userApiController.show);
router.get('/search', userApiController.search);

module.exports = router;