const db = require('../database/models')
const path = require('path')
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

const pathUser = path.join(__dirname, '../public/img/users/')
const fs = require('fs');

const userControl = {
    login: async (req, res) => {
        try {
            res.render('../views/users/Login')
        } catch (error) {
            console.log(error);
        }

    },

    checkLogin: async (req, res) => {
        try {
            let { usuario, password } = req.body;
            const errorLogin = validationResult(req);

            let userFound = await db.Usuarios.findOne({
                where: {
                    usuario: req.body.usuario
                }
            })

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
        } catch (error) {
            console.log(error);
        }

    },

    perfil: async (req, res) => {
        // let usuario = req.cookies.user;
        try {
            let userFound = await db.Usuarios.findOne({
                where: {
                    id: req.params.id
                }
            })
            res.render('../views/users/MiPerfil', { userFound })
        } catch (error) {
            console.log(error);
        }

    },
    compras: async (req, res) => {
        let id = req.session.userLogged.id
        let producto = await db.Productos.findAll();
        let usuario = await db.Usuarios.findByPk(id);

        try {
            let carrito = await db.CabeceraCompras.findAll({
                where: {
                    usuario_id: id,
                },
                include: [{
                    model: db.DetalleCompras,
                    as: "detalleCompra",
                    attributes: ['id', 'cantidad'],
                    required: false,
                    include: [
                        {
                            model: db.Productos,
                            as: "producto",
                            attributes: ['id', 'nombre', 'img', 'precio'],
                            required: false
                        }
                    ]
                }]
            });
            //res.json(carrito)
            res.render('../views/users/MisCompras', { carrito })

        } catch (error) {
            console.log(error);
        }
    },
    getEditarPerfil: async (req, res) => {
        // let usuario = req.cookies.user;
        // let id = req.params.id;
        //  const userFound = listaClientes.find(oneUser => oneUser.id == id);
        // console.log(userFound);
        try {
            let userFound = await db.Usuarios.findOne({
                where: {
                    id: req.params.id
                }
            })
            res.render('../views/users/editarPerfil', { userFound })
        } catch (error) {
            console.log(error);
        }

    },

    editarPerfil: async (req, res) => {
        const { nombre, apellido, foto, email, usuario, password, perfil } = req.body;
        const { id } = req.params;

        try {

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
                // let UsUpdate = listaClientes.find(e => e.id == req.params.id);
                let UsUpdate = await db.Usuarios.findOne({
                    where: {
                        id: req.params.id
                    }
                    //  where: { id }
                })

                //console.log(UsUpdate);
                //console.log(req.params.id);
                let pass = ' ';
                if (req.body.password != UsUpdate.password) {
                    pass = bcryptjs.hashSync(req.body.password, 10);
                    UsUpdate.password = pass;
                    // password = pass;
                } else {
                    UsUpdate.password = UsUpdate.password
                    pass = UsUpdate.password
                }
                UsUpdate.nombre = req.body.nombre
                UsUpdate.apellido = req.body.apellido
                UsUpdate.email = email || UsUpdate.email;
                UsUpdate.img = req.file?.filename || UsUpdate.img;
                UsUpdate.usuario = usuario || UsUpdate.usuario;
                UsUpdate.perfil_id = perfil || UsUpdate.perfil_id;
                let foto = req.file?.filename || UsUpdate.img;

                await db.Usuarios.update({
                    nombre: UsUpdate.nombre,
                    apellido: apellido,
                    email: email,
                    img: foto,
                    usuario: usuario,
                    password: pass,
                    perfil_id: perfil
                }, {
                    where: {
                        id: id
                    }
                })
                // res.json(usuarionuevo)
                res.clearCookie('user');
                req.session.destroy();
                res.redirect('/')
            }
        } catch (error) {
            console.log(error);
        }
    },

    register: async (req, res) => {
        try {
            res.render('../views/users/Registro')
        } catch (error) {
            console.log(error);
        }

    },

    createRegister: async (req, res) => {
        try {
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
                    // id: Date.now(),
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    email: req.body.email,
                    img: req.file?.filename || 'img-default.png',
                    usuario: req.body.usuario,
                    password: pass,
                    perfil_id: req.body.perfil
                }

                await db.Usuarios.create(registerNuevo)
                res.render('../views/users/Login')
            }
        } catch (error) {
            console.log(error);
        }
    },

    logout: (req, res) => {
        try {
            res.clearCookie('user');
            req.session.destroy();
            res.redirect('/');
        } catch (error) {
            console.log(error);
        }

    }
}

module.exports = userControl;