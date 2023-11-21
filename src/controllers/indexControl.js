const listaProductos = require('../data/listaProductos');
const listaOfertas = require('../data/listaOfertas');

const indexControl = {
    index: (req, res) => {
        res.render('index', { listaProductos, listaOfertas })
    }
}

module.exports = indexControl;