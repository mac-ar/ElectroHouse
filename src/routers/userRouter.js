const express = require('express');
const router = express.Router();
const path = require('path')
const { check } = require('express-validator');
//const bcrypt = require('bcryptjs')

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
    check('password2').notEmpty().withMessage('Ingrese una Contraseña').bail()
        .custom((value, { req }) => {
            let pass = req.body.password;
            let pass2 = req.body.password2;
            //console.log(`pass  ${pass}  pass2  ${pass2}`);
            if (pass !== pass2) {
                throw new Error('Debe ingrasar la misma contraseña');
            }
            return true;
        })
]

const loginValidator = [
    check('usuario').notEmpty().withMessage('Escribe un nombre de Usuario'),
    check('password').notEmpty().withMessage('Ingrese una Contraseña').bail()
]


router.get('/Login', userController.login);
router.post('/Login', loginValidator, userController.checkLogin);

router.get('/Registro', userController.register);
router.post('/Registro', uploadFile.single('foto'), validations, userController.createRegister);

module.exports = router;