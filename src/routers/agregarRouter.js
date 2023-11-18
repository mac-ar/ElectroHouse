const express = require('express');
const router = express.Router();

const agregarControl = require('../controllers/agregarControl');

router.get('/agregar', agregarControl.agregar);

module.exports = router;