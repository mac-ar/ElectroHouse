const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')
const session = require('express-session')
const cookies = require('cookie-parser');
const validateUser = require('./middlewares/validateUser.js')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

app.use(session({
    secret: 'El Grupo 4',
    resave: true,
    saveUninitialized: false
}))

app.use(cookies());
app.use(validateUser);

app.use(express.static(path.join(__dirname, 'public')));

//const mainRouter = require('./routers/indexRouter');
const mainRouter = require('./routers/indexRouters');
//const productoRouter = require('./routers/productoRouter');
const productoRouter = require('./routers/productoRouters');
//const userRouter = require('./routers/userRouter.js');
const userRouter = require('./routers/userRouters.js');
const carritoRouter = require('./routers/carritoRouter.js');

app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
app.use('/', mainRouter);

app.use('/user', userRouter);

app.use('/products', productoRouter);

app.use('/Carrito', carritoRouter);

/* PORT */
const port = 3000;
app.listen(port, () => console.log(`Servidor Ejecuntandose en http://localhost:${port}`))