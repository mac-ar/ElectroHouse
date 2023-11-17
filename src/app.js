const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const mainRouter = require('./routers/indexRouter');
const productoRouter = require('./routers/productoRouter');
const userRouter = require('./routers/userRouter.js');

app.use('/', mainRouter);

/* app.use('/abmProducto', productoRouter);
app.use('/Carrito', productoRouter);
app.use('/ProductoDetalle', productoRouter); */



app.set('users', path.join(__dirname, 'views', 'users'));
app.use('/', userRouter);

app.set('products', path.join(__dirname, 'views', 'products'));
app.use('/', productoRouter);



/* app.use('/Registro', userRouter); */




/* RUTAS */
/* app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "src", 'views', 'index.html'))
})
app.get('/ProductoDetalle', (req, res) => {
    res.sendFile(path.join(__dirname, "src", 'views', 'ProductoDetalle.html'))
})
app.get('/Registro', (req, res) => {
    res.sendFile(path.join(__dirname, "src", 'views', 'Registro.html'))
})
app.get('/Login', (req, res) => {
    res.sendFile(path.join(__dirname, "src", 'views', 'Login.html'))
})
app.get('/Carrito', (req, res) => {
    res.sendFile(path.join(__dirname, "src", 'views', 'Carrito.html'))
})

app.get('/products/abmProducto', (req, res) => {
    res.sendFile(path.join(__dirname, "src", 'views/products', 'abmProducto.html'))
}) */

/* PORT */
const port = 3000;
app.listen(port, () => console.log(`Servidor Ejecuntandose en puerto: ${port}`))