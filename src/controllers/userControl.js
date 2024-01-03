const fs = require('fs');
const path = require('path')
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

const pathRegister = path.join(__dirname, '../data/listaClientes.json')
const listaClientes = JSON.parse(fs.readFileSync(pathRegister, 'utf-8'))


const userControl = {
    login: (req, res) => {
        res.render('../views/users/Login')
    },
    checkLogin: (req, res) => {

        let { usuario, password } = req.body;
        const errorLogin = validationResult(req);
        const userFound = listaClientes.find(oneUser => oneUser.usuario == usuario);

        if (!errorLogin.isEmpty()) {
            return res.render('../views/users/Login.ejs', {
                errors: errorLogin.mapped(),
                oldData: req.body
            })
        } else {
            if (userFound) {
                let isOk = bcryptjs.compareSync(password, userFound.password)

                if (isOk) {
                    req.session.userLogged = userFound;

                    if (req.body.remember_user) {
                        res.cookie('user', usuario, { maxAge: (1000 * 60) * 60 })
                    }
                    // console.log('Todo salió ok, estas logueado');
                    res.redirect('/')
                } else {
                    return res.render('../views/users/Login.ejs', {
                        errors: {
                            password: {
                                msg: 'Las credenciales son inválidas'
                            }
                        },
                        oldData: req.body
                    })
                }
            } else {
                return res.render('../views/users/Login.ejs', {
                    errors: {
                        usuario: {
                            msg: 'El Usuario es incorrecto'
                        }
                    },
                    oldData: req.body
                })
            }

        }

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

            let pass = bcryptjs.hashSync(req.body.password, 10);

            const registerNuevo = {
                id: Date.now(),
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                img: req.file?.filename || 'img-default.png',
                usuario: req.body.usuario,
                password: pass,
                password2: req.body.password2
            }
            listaClientes.push(registerNuevo)

            // escribir el json
            fs.writeFileSync(pathRegister, JSON.stringify(listaClientes, null, ' '))
            // redireccionamos a index
            res.render('../views/users/Login')

        }
    },
    logout: (req, res) => {
        res.clearCookie('user');
        req.session.destroy();
        res.redirect('/');
    }
}

module.exports = userControl;