const express = require('express');
const app = express();

const path = require('path');

const port = 3000;
app.listen(port, ()=> console.log(`Servidor Ejecuntandose en puerto: ${port}`))


app.get('/', (req,res)=>{
    res.send(console.log('hola mundo'))
})

