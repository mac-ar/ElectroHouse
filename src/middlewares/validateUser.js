const fs = require('fs');
const path = require('path')
const pathRegister = path.join(__dirname, '../data/listaClientes.json')
const listaClientes = JSON.parse(fs.readFileSync(pathRegister, 'utf-8'))

function validateUser(req, res, next) {
    res.locals.isLogged = false

    let userInCookie = req.cookies.user;
    let userFromCookie = listaClientes.find(oneUser => oneUser.usuario == userInCookie);

    if (userFromCookie) {
        req.session.userLogged = userFromCookie;
    }

    if (req.session.userLogged) {
        res.locals.isLogged = true
        res.locals.userLogged = req.session.userLogged;
    }
    next();
}

module.exports = validateUser