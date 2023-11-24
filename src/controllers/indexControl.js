const listaProductos = require('../data/listaProductos');

const indexControl = {
    index: (req, res) => {
        res.render('index', { listaProductos })
    }
}

module.exports = indexControl;