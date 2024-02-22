const express = require('express');
const router = express.Router();
const path = require('path')
const { check } = require('express-validator');
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/public/img/users');
    },
    filename: (req, file, cb) => {
        let fileName = `img-${Date.now()}${path.extname(file.originalname)}`; //`img-${Date.now()}-${file.originalname}`;  //
        cb(null, fileName);
    }
})

const userController = require('../controllers/userControl');
//const uploadFile = require('../middlewares/valiRegister')
const uploadFile = multer({ storage });

const validations = [
    check('nombre').notEmpty().withMessage('Escribe un Nombre'),
    check('apellido').notEmpty().withMessage('Escribe un Apellido'),
    check('email').notEmpty().withMessage('Escribe un Email').bail()
        .isEmail().withMessage('Escribe un Email valido'),
    //check('foto').notEmpty().withMessage('Ingrese una foto de perfil'),
    check('foto').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];

        if (!file) {
            throw new Error('Debe ingrasar un foto de Perfil');
        } else {
            let fileExtension = path.extname(file.originalname);
            console.log(fileExtension);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }
        return true;
    }),
    check('usuario').notEmpty().withMessage('Escribe un nombre de Usuario'),
    check('password').notEmpty().withMessage('Ingrese una Contraseña').bail(),

    check('perfil').notEmpty().withMessage('Debes Elegir un tipo de Usuario')
]

const loginValidations = [
    check('usuario').notEmpty().withMessage('Escribe un nombre de Usuario'),
    check('password').notEmpty().withMessage('Ingrese una Contraseña').bail()
]

//Login
router.get('/Login', userController.login);
router.post('/Login', loginValidations, userController.checkLogin);
// mi perfil
router.get('/Perfil/:id', userController.perfil);
//Ediar Perfil
router.get('/EditarPerfil/:id', userController.getEditarPerfil);
router.put('/ActualizarPerfil/:id', uploadFile.single('foto'), validations, userController.editarPerfil);
// Registro
router.get('/Registro', userController.register);
router.post('/Registro', uploadFile.single('foto'), validations, userController.createRegister);
// Logout
router.get('/logout/', userController.logout);

module.exports = router;