const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, 'public')));

const mainRouter = require('./routers/indexRouter.js');
const productoRouter = require('./routers/productoRouter');
const userRouter = require('./routers/userRouter.js');
const carritoRouter = require('./routers/carritoRouter.js');


app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
app.use('/', mainRouter);

app.set('users', path.join(__dirname, 'views', 'users'));
app.use('/', userRouter);

app.set('products', path.join(__dirname, 'views', 'products'));
app.use('/', productoRouter);

app.set('products', path.join(__dirname, 'views', 'products'));
app.use('/', carritoRouter);

/* PORT */
const port = 3000;
app.listen(port, () => console.log(`Servidor Ejecuntandose en http://localhost:${port}`))