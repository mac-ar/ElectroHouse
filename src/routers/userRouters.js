const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const validateRegister = require('../middlewares/validateRegister')
const uploadFile = require('../middlewares/multerUser');
const userController = require('../controllers/userController');

const loginValidations = [
    check('usuario').notEmpty().withMessage('Escribe un nombre de Usuario'),
    check('password').notEmpty().withMessage('Ingrese una Contraseña').bail()
]

//Login
router.get('/Login', userController.login);
router.post('/Login', loginValidations, userController.checkLogin);
// mi perfil detalle
router.get('/Perfil/:id', userController.perfil);
// mis compras
router.get('/Compras/:id', userController.compras);
//Ediar Perfil
router.get('/EditarPerfil/:id', userController.getEditarPerfil);
router.put('/ActualizarPerfil/:id', uploadFile.single('foto'), validateRegister, userController.editarPerfil);
// Registro de usuario
router.get('/Registro', userController.register);
router.post('/Registro', uploadFile.single('foto'), validateRegister, userController.createRegister);
// Logout
router.get('/logout/', userController.logout);

module.exports = router;