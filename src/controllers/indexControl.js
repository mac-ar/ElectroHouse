const fs = require('fs');
const path = require('path')

const productFilePath = path.join(__dirname, '../data/listaProductos.json');
const productJs = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'))

const indexController = {
    index: (req, res) => {
        const productJs = JSON.parse(fs.readFileSync(productFilePath), 'utf-8');
        let prodNuevo = productJs.filter(e => e.verIndex == "Nuevo");
        let prodOferta = productJs.filter(e => e.verIndex == "Oferta"); 
        res.render('index', {prodNuevo, prodOferta})
    }
}

module.exports = indexController;
