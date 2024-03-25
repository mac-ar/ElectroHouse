const db = require('../database/models');
const path = require('path');

async function validateUser(req, res, next) {
    res.locals.isLogged = false;

    if (req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    if (req.cookies.user) {
        try {
            let userInCookie = req.cookies.user;
            let userFromCookie = await db.Usuarios.findOne({
                where: {
                    usuario: userInCookie
                }
            });

            if (userFromCookie) {
                req.session.userLogged = userFromCookie;
                res.locals.isLogged = true;
                res.locals.userLogged = req.session.userLogged;
            }
        } catch (error) {
            console.error('Error al validar el usuario:', error);
        }
    }
    next();
}

module.exports = validateUser;

