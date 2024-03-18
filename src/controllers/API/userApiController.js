const path = require('path');
const db = require('../../database/models');

const userAPIController = {
    list: async (req, res) => {
        try {
            const usuarios = await db.Usuarios.findAll({
                include: ['perfiles']
            })
            const result = {
                meta: {
                    count: usuarios.length,
                    status: 200,
                    url: '/api/users'
                },
                data: {
                    id: usuarios.id,
                    nombre: usuarios.nombre,
                    email: usuarios.email,
                    detalle:`/:${usuarios.id}`
                }
            }
            res.json(result)
        } catch (error) {
            console.log(error);
        }
    },
    detail: async (req,res) => {        
        try {
            const id = req.params.id || req.query.id
            const usuario = await db.Usuarios.findByPk(id, {include: [{
                model: db.Perfiles,
                as: "perfil",
                attributes: ['nombre'],
                required: false}]
            })
            const result = {
                meta: {
                    status: 200,
                    url: `/api/users/${usuario.nombre}`
                },
                data: {
                    id: usuario.id,
                    nombre: usuario.nombre,
                    apellido: usuario.apellido,
                    img:`/img/users/${usuario.img}`,
                    email: usuario.email,
                    usuario: usuario.usuario,
                    perfil: usuario.perfil.nombre
                }
            }
            res.json(result)
        } catch (error) {
            console.log(error.message);
        }        
    }
}
module.exports = userAPIController;