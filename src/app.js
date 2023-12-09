const express = require('express');
const app = express();
const path = require('path');
const methodOverride =  require('method-override');

const mainRouter = require('./routers/indexRouter');
const productoRouter = require('./routers/productoRouter');
const userRouter = require('./routers/userRouter.js');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
app.use('/', mainRouter);

app.set('users', path.join(__dirname, 'views', 'users'));
app.use('/', userRouter);

app.set('products', path.join(__dirname, 'views', 'products'));
app.use('/products', productoRouter);


/* PORT */
const port = 3000;
app.listen(port, () => console.log(`Servidor Ejecuntandose en http://localhost:${port}`))