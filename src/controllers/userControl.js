const fs = require('fs');
const path = require('path')
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const session = require('express-session');

const pathRegister = path.join(__dirname, '../data/listaClientes.json')
const listaClientes = JSON.parse(fs.readFileSync(pathRegister, 'utf-8'))


const userControl = {
    login: (req, res) => {
        res.render('../views/users/Login')
    },
    checkLogin: (req,res) => {

        let {usuario, password} = req.body;
        console.log(usuario,password);

        const errorLogin = validationResult(req);

        //-----

     //   const getData = function() {
      //          return JSON.parse(fs.readFileSync(this.listaClientes, 'utf-8'));
       //      };

     //   const findAll = function () {
     //           return this.getData();
     //        };

     // getProductoDetalle: (req, res) => {
     //   let prodDet = productJs.find(e => e.id == req.params.id)
     //   res.render('products/ProductoDetalle', { prodDet })
    //},

      //  const userFound = function (usuario1) {
        //        let allUsers = JSON.parse(fs.readFileSync(listaClientes, 'utf-8'));
                const userFound = listaClientes.find(oneUser => oneUser.usuario == req.body.usuario);
                
   //         };


        if (errorLogin.isEmpty()) {
        
             //--
            

             if (userFound && bcryptjs.compareSync(password, userFound.password)) {

          //      req.session.userLogged = userFound.usuario;

                console.log('Todo salió ok, estas logueado');

                res.redirect('/')

             } else {

               // res.send('El password o email es incorrecto')
               res.render('../views/users/Login')
             }

        } else {
            return res.render('../views/users/Login.ejs', {
                errors: errorLogin.mapped(),
                oldData: req.body
            }),
            console.log(errorLogin)
        }

    },

    register: (req, res) => {
        res.render('../views/users/Registro')
    },
    createRegister: (req, res) => {

        const resulValidation = validationResult(req);

        if (!resulValidation.isEmpty()) {
            return res.render('../views/users/Registro.ejs', {
                errors: resulValidation.mapped(),
                oldData: req.body
            })
        } else {
            //console.log(req.file);
            let pass = bcryptjs.hashSync(req.body.password, 10);
            let pass2 = bcryptjs.hashSync(req.body.password2, 10);
            //console.log(`pass  ${pass}  pass2  ${pass2}`);
            const registerNuevo = {
                id: Date.now(),
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                img: req.file?.filename || 'img-default.png',
                usuario: req.body.usuario,
                password: pass,
                password2: pass2
            }
            listaClientes.push(registerNuevo)

            // escribir el json
            fs.writeFileSync(pathRegister, JSON.stringify(listaClientes, null, ' '))
            // redireccionamos a index
            res.render('../views/users/Login')

        }
    }
}

module.exports = userControl;