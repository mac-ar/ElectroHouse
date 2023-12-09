const fs = require('fs');
const path = require('path')

const pathProductos = path.join(__dirname, '../data/listaProductos.json')
const listaProductos = JSON.parse(fs.readFileSync(pathProductos, 'utf-8'))

const indexController = {
    index: (req, res) => {
        res.render('index', { listaProductos })
    }
}

module.exports = indexController;
