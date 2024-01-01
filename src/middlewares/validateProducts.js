// Usando la destructuracion uso solamente el body del  express-validator
const {body} = require('express-validator');

//Creo la logica del middleware de validacion de carga de producto
module.exports = [
    body('nombre').notEmpty().withMessage('Debes completar el Nombre') ,
    body('descripcion').notEmpty().withMessage('Debes agregar una Descripcion'),
    /* body('imagen').notEmpty().withMessage('Debes ingresar una Imagen'), */ 
    body('categoria').notEmpty().withMessage('Debes seleccionar una Categoria'),
    body('verIndex').notEmpty().withMessage('Debes seleccionar una Opcion para agrupar en l producto en el Index'),
    body('precio').notEmpty().withMessage('Debes ingresar un Precio'),
    body('especificaciones').notEmpty().withMessage('Debes agregar una Especificacion Tecnica')
]