const express = require('express');
const app = express();
const path = require('path');

const mainRouter = require('./routers/indexRouter');
const productoRouter = require('./routers/productoRouter');
const userRouter = require('./routers/userRouter.js');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
app.use('/', mainRouter);

app.set('users', path.join(__dirname, 'views', 'users'));
app.use('/', userRouter);
/*
app.set('products', path.join(__dirname, 'views'));*/
app.set('products', path.join(__dirname, 'views', 'products'));
app.use('/', productoRouter);


/* PORT */
const port = 3000;
app.listen(port, () => console.log(`Servidor Ejecuntandose en http://localhost:${port}`))