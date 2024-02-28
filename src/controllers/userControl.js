const fs = require('fs');
const path = require('path')
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

const pathRegister = path.join(__dirname, '../data/listaClientes.json')
const listaClientes = JSON.parse(fs.readFileSync(pathRegister, 'utf-8'))
const pathUser = path.join(__dirname, '../public/img/users/')

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

    perfil: (req, res) => {
        // let usuario = req.cookies.user;
        let id = req.params.id;
        const userFound = listaClientes.find(oneUser => oneUser.id == id);
        console.log(userFound);
        res.render('../views/users/MiPerfil', { userFound })
    },
    getEditarPerfil: (req, res) => {
        // let usuario = req.cookies.user;
        let id = req.params.id;
        const userFound = listaClientes.find(oneUser => oneUser.id == id);
        // console.log(userFound);
        res.render('../views/users/editarPerfil', { userFound })
    },

    editarPerfil: (req, res) => {

        const errorLogin = validationResult(req);

        if (!errorLogin.isEmpty()) {
            const deleteFile = req.file?.filename
            //  console.log(errorLogin);
            fs.unlink(pathUser + deleteFile, function (err) {
                if (err && err.code == 'ENOENT') {
                    // file doens't exist
                    console.log("File doesn't exist, won't remove it.   ");
                } else if (err) {
                    // other errors, e.g. maybe we don't have enough permission
                    console.log("Error occurred while trying to remove file");
                } else {
                    console.log(`removed   ${deleteFile}`);
                }
            });

            return res.render('../views/users/editarPerfil.ejs', {
                errors: errorLogin.mapped(),
                oldData: req.body,
                idUser: req.params.id,
                userN: req.body.nombre
            })
        } else {
            let UsUpdate = listaClientes.find(e => e.id == req.params.id);

            UsUpdate.nombre = req.body.nombre || UsUpdate.nombre;
            UsUpdate.apellido = req.body.apellido || UsUpdate.apellido;
            UsUpdate.email = req.body.email || UsUpdate.email;
            UsUpdate.img = req.file?.filename || UsUpdate.img;
            UsUpdate.usuario = req.body.usuario || UsUpdate.usuario;
            if (req.body.password != UsUpdate.password) {
                let pass = bcryptjs.hashSync(req.body.password, 10);
                UsUpdate.password = pass;
            } else {
                UsUpdate.password = UsUpdate.password
            }
            UsUpdate.perfil_id = req.body.perfil || UsUpdate.perfil_id;

            fs.writeFileSync(pathRegister, JSON.stringify(listaClientes, null, ' '))
            // console.log('actualizo');
            res.clearCookie('user');
            req.session.destroy();
            res.redirect('/')
        }

    },

    register: (req, res) => {
        res.render('../views/users/Registro')
    },

    createRegister: (req, res) => {
        const resulValidation = validationResult(req);

        if (!resulValidation.isEmpty()) {
            const deleteFile = req.file?.filename

            fs.unlink(pathUser + deleteFile, function (err) {
                if (err && err.code == 'ENOENT') {
                    // file doens't exist
                    console.log("File doesn't exist, won't remove it.   ");
                } else if (err) {
                    // other errors, e.g. maybe we don't have enough permission
                    console.log("Error occurred while trying to remove file");
                } else {
                    console.log(`removed   ${deleteFile}`);
                }
            });
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
                password: pass, //req.body.password, //pass,
                perfil_id: req.body.perfil
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