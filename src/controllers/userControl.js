const fs = require('fs');
const path = require('path')

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
        const registerNuevo = {
            id: Date.now(),
            ...req.body
        }

        listaClientes.push(registerNuevo)

        // escribir el json
        fs.writeFileSync(pathRegister, JSON.stringify(listaClientes, null, ' '))
        // redireccionamos a index
        res.redirect('/')
    }
}

module.exports = userControl;