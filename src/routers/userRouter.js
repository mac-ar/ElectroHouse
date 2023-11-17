const express = require('express');

const router = express.Router();

const userController = require('../controllers/userControl');

router.get('/Login', userController.login);

router.get('/Registro', userController.register);

module.exports = router;