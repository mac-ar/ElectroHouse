const express = require('express');
const app = express();
const path = require('path');



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'index.html'))
})
app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'Registro.html'))
})

const port = 3000;
app.listen(port, () => console.log(`Servidor Ejecuntandose en puerto: ${port}`))