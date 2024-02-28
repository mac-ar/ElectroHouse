//const fs = require('fs');
const db = require('../database/models')
const path = require('path')

const indexController = {
    index: async (req, res) => {
        try {
            let prodNuevo = await db.Productos.findAll()

            res.render('index', { prodNuevo })
            //   res.json(prodNuevo)
        } catch (error) {
            console.log(error);
        }

    }
}

module.exports = indexController;
