const fs = require('fs');
const path = require('path')
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs')

const pathRegister = path.join(__dirname, '../data/listaClientes.json')
const listaClientes = JSON.parse(fs.readFileSync(pathRegister, 'utf-8'))


const userControl = {
    login: (req, res) => {
        res.render('../views/users/Login')
    },
    register: (req, res) => {
        res.render('../views/users/Registro')
    },
    createRegister: (req, res) => {

        const resulValidation = validationResult(req);

        if (!resulValidation.isEmpty()) {
            return res.render('../views/users/Registro.ejs', {
                errors: resulValidation.mapped(),
                oldData: req.body
            })
        } else {
            //console.log(req.file);
            let pass = bcryptjs.hashSync(req.body.password, 10);
            let pass2 = bcryptjs.hashSync(req.body.password2, 10);
            //console.log(`pass  ${pass}  pass2  ${pass2}`);
            const registerNuevo = {
                id: Date.now(),
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                img: req.file?.filename || 'img-default.png',
                usuario: req.body.usuario,
                password: pass,
                password2: pass2
            }
            listaClientes.push(registerNuevo)

            // escribir el json
            fs.writeFileSync(pathRegister, JSON.stringify(listaClientes, null, ' '))
            // redireccionamos a index
            res.render('../views/users/Login')

        }
    }
}

module.exports = userControl;