const path = require('path');
const db = require('../../database/models');
const URL_SERVER = "http://localhost:3000"

const userAPIController = {
    list: async (req, res) => {
        try {
            const usuarios = await db.Usuarios.findAll({
                attributes: ['id', 'nombre', 'email'],
                include: [{
                    model: db.Perfiles,
                    as: 'perfil',
                    attributes: [],
                }],
            })
            //  const {id, nombre, email} = usuarios
            usuarios.forEach(element => {
                element.setDataValue('detail', `http://localhost:3000/api/users/detail/${element.id}`)
            });
            const result = {
                meta: {
                    count: usuarios.length,
                    status: 200,
                    // detail: 'http://localhost:3000/api/users/detail/:id'
                },

                data: usuarios //, detail: `http://localhost:3000/api/users/detail/${usuarios.id}` }
                /*detalle: `http://localhost:3000/api/users/detail/${usuarios.id}`
                } */
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
                    url: `http://localhost:3000/api/users/detail/${usuario.id}`
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
    }
}
module.exports = userAPIController;