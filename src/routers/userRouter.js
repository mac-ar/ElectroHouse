const express = require('express');
const router = express.Router();

const userController = require('../controllers/userControl');
const upload = require('../middlewares/multer')

router.get('/Login', userController.login);

router.get('/Registro', userController.register);
router.post('/Registro', userController.createRegister);

module.exports = router;