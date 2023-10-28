const express = require('express');
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, 'src', 'public')));

const port = 3000;

app.listen(port, ()=> console.log(`Servidor Ejecuntandose en puerto: ${port}`))

/* RUTAS */
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'src/views', 'index.html'))
})

