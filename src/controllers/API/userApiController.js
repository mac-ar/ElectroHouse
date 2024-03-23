const path = require('path');
const db = require('../../database/models');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const URL_SERVER = "http://localhost:3000"

const userAPIController = {
    list: async (req, res) => {
        try {
            const usuarios = await db.Usuarios.findAll({
                attributes: ['id', 'nombre', 'apellido', 'email', 'img'],
                include: [{
                    model: db.Perfiles,
                    as: 'perfil',
                    attributes: [],
                }],
            })

            usuarios.forEach(element => {
                element.setDataValue('detail', `${URL_SERVER}/api/users/detail/${element.id}`)
                element.setDataValue('img', `${URL_SERVER}/img/users/${element.img}`)
            });

            const result = {
                meta: {
                    count: usuarios.length,
                    status: 200,
                },
                data: usuarios
            }
            res.json(result)

        } catch (error) {
            console.log(error);
        }
    },
    detail: async (req, res) => {
        try {
            const id = req.params.id || req.query.id
            const usuario = await db.Usuarios.findByPk(id, {
                include: [{
                    model: db.Perfiles,
                    as: "perfil",
                    attributes: ['nombre'],
                    required: false
                }]
            })
            const result = {
                meta: {
                    status: 200,
                    url: `${URL_SERVER}/api/users/detail/${usuario.id}`
                },
                data: {
                    id: usuario.id,
                    nombre: usuario.nombre,
                    apellido: usuario.apellido,
                    img: `${URL_SERVER}/img/users/${usuario.img}`,
                    email: usuario.email,
                    usuario: usuario.usuario,
                }
            }
            res.json(result)
        } catch (error) {
            console.log(error.message);
        }
    },
    show: async (req, res) => {
        try {
            const perfil = await db.Perfiles.findAll({
                attributes: ['nombre', [db.sequelize.fn('COUNT', sequelize.col('usuario.perfil_id')), 'total_usuarios']],
                include: [{
                    model: db.Usuarios,
                    as: 'usuario',
                    attributes: [],
                }],
                group: ['id']
            })
            const result = {
                meta: {
                    count: perfil.length,
                    detail: `${URL_SERVER}/api/users/show/:id`,
                },
                data: perfil,
            };
            res.json(result)
        } catch (error) {
            console.log(error.message);
        }
    },
    last: async (req, res) => {
        try {
            const ultUser = await db.Usuarios.findAll({
                attributes: ['id', 'nombre', 'apellido', 'email', 'img', 'usuario'],
                order: [['id', 'desc']],
                limit: 1
            })
            const result = {
                meta: {
                    detail: `${URL_SERVER}/api/product/last/${ultUser[0].id}`,
                },
                data: {
                    id: ultUser[0].id,
                    nombre: ultUser[0].nombre,
                    apellido: ultUser[0].apellido,
                    email: ultUser[0].email,
                    img: `${URL_SERVER}/img/users/${ultUser[0].img}`,
                    usuario: ultUser[0].usuario,
                },
            };
            res.json(result)

        } catch (error) {
            console.log(error.message);
        }
    },
    search: async (req, res) => {
        try {
            const name = req.query.nombre;

            const usuarios = await db.Usuarios.findAll({
                where: {
                    nombre: { [Op.like]: '%' + name + '%' }
                },
                attributes: { exclude: ['perfil_id', 'password'] },
                include: [{
                    model: db.Perfiles,
                    as: 'perfil',
                    attributes: ['nombre'],
                }]
            });

            usuarios.forEach(element => {
                element.setDataValue('foto', `${URL_SERVER}/img/users/${element.img}`)
            });

            const result = {
                meta: {
                    status: 200,
                    url: `${URL_SERVER}/api/product/detail/${usuarios.id}`
                },
                data: usuarios
            }
            res.json(result)


        } catch (error) {
            console.log(error.message);
        }
    }
}
module.exports = userAPIController;