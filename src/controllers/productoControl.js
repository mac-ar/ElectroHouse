const fs = require('fs');
const path = require('path');

const productFilePath = path.join(__dirname, '../data/listaProductos.json');
let productJs = JSON.parse(fs.readFileSync(productFilePath), 'utf-8');



const productoController = {

    getListadoProductos: (req, res) => {
        res.render('products/listadoProductos', { productJs })
    },
    getProductoDetalle: (req, res) => {
        let prodDet = productJs.find(e => e.id == req.params.id)
        res.render('products/ProductoDetalle', { prodDet })
    },
    
    getEditarProducto: (req, res) => {
        let editProducto = productJs.find(e => e.id == req.params.id);
        res.render('../views/products/editarProducto', {editProducto})
    },

    putActualizarProducto: (req, res) =>{
        let pUpdate = productJs.find(e => e.id == req.params.id);

        pUpdate.nombre = req.body.nombre || pUpdate.nombre;
        pUpdate.descripcion = req.body.descripcion || pUpdate.descripcion;
        pUpdate.categoria = req.body.categoria || pUpdate.categoria;
        pUpdate.envio = req.body.envio || pUpdate.envio;
        pUpdate.nuevo = req.body.nuevo || pUpdate.nuevo;
        pUpdate.pago = req.body.pago || pUpdate.pago;
        pUpdate.oferta = req.body.oferta || pUpdate.oferta;
        pUpdate.precio = req.body.precio || pUpdate.precio;
        pUpdate.descuento = req.body.descuento || pUpdate.descuento;
        pUpdate.especificaciones = req.body.especificaciones || pUpdate.especificaciones;
        pUpdate.img = req.file?.filename || pUpdate.img;

        fs.writeFileSync(productFilePath, JSON.stringify(productJs, null, ' '))
        res.redirect('/products')

    },
    getAgregarProducto: (req, res) => {
        res.render('../views/products/agregarProducto')
    },

    postGuardarProducto: (req, res) => {
        // Genero codigo para el Id
        let newNumber = productJs.filter(e => e.categoria == req.body.categoria).length + 1;
        let nRandom = Math.floor(Math.random() * 100);
        
        //Genero un nuevo Producto
        const newProduct = {
            id: nRandom + newNumber,
            img: req.file?.filename || 'img-default.png',
            envio: "",
            verIndex: "Oferta",
            pago: "",
            oferta: "true",
            descuento: 40,
            ...req.body
        }
        //Agrego el prod nuevo al array
        productJs.push(newProduct);
        //Escribo el archivo JS y convierto a JSON
        fs.writeFileSync(productFilePath, JSON.stringify(productJs, null, ' '))
        res.redirect('/')
    },

    delEliminarProducto: (req, res) =>{

        prodEliminar = productJs.find(e => e.id == req.params.id);
        productJs = productJs.filter(e => e.id != req.params.id);

        //Escribo el archivo JS y convierto a JSON
        fs.writeFileSync(productFilePath, JSON.stringify(productJs, null, ' '));
        //Elimino Imagen
        fs.unlinkSync(path.join(__dirname, '../public/img/product', prodEliminar.img));
        
        res.redirect('/products')
    }

}

module.exports = productoController;