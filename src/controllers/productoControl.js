const fs = require('fs');
const path = require('path')

const pathProducto = path.join(__dirname, '../data/listaProductos.json')
const listaProductos = JSON.parse(fs.readFileSync(pathProducto, 'utf-8'))

const productoController = {
    productoDetalle: (req, res) => {
        let id = req.params.id
        let productoEncontrado = listaProductos.find(producto => producto.id == id)
        if (productoEncontrado) {
            return res.render('../views/products/ProductoDetalle', { producto: productoEncontrado })
        } else {
            return res.send('/')
        }
    },
    agregarProducto: (req, res) => {
        res.render('../views/products/agregarProducto')
    },
    storeProducto: (req, res) => {
        const newProducto = {
            id: Date.now(), //id unico 
            ...req.body
        }
        // Agrego nuevo producto al listado
        listaProductos.push(newProducto)
        fs.writeFileSync(pathProducto, JSON.stringify(listaProductos, null, ' '))
        res.redirect('/')
    },
    editarProducto: (req, res) => {
        res.render('../views/products/editarProducto')
    },
    updateProducto: (req, res) => {
        const productos = JSON.parse(fs.readFileSync(pathProducto, 'utf-8'));
        const pToEdit = productos.find(producto => producto.id == req.params.id)
        pToEdit.nombre = req.body.nombre || pToEdit.nombre
        pToEdit.descripcion = req.body.descripcion || pToEdit.descripcion
        pToEdit.img = req.body.img || pToEdit.img
        pToEdit.categoria = req.body.categoria || pToEdit.categoria
        pToEdit.precio = req.body.precio || pToEdit.precio
        pToEdit.descuento = req.body.descuento || pToEdit.descuento
        pToEdit.especificaciones = req.body.especificaciones || pToEdit.especificaciones
        fs.writeFileSync(pathProducto, JSON.stringify(productos, null, ' '))
        res.redirect('/')
    },
    destroyProducto: (req, res) => {
        const id = req.params.id
        let newProducts = listaProductos.filter(producto => producto.id != id)
        fs.writeFileSync(pathProducto, JSON.stringify(newProducts, null, ' '))
        res.redirect('/')
    }
}

module.exports = productoController;