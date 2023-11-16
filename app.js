const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'src', 'public')));

/* RUTAS */
app.get('/', (req, res) => {
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
})
/* PORT */
const port = 3000;
app.listen(port, () => console.log(`Servidor Ejecuntandose en puerto: ${port}`))