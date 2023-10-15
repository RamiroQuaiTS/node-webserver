const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// app.get('/', (req, res)=>{
//     res.send('Hola desde servidor nuevo');
// });

//HBS
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('home', {
        titulo: 'Curso de node',
        desarrollo: 'Ramiro Tello'
    });
});

app.get('/generic', (req, res)=>{
    res.render('generic',{
        titulo: 'Curso de node',
        desarrollo: 'Ramiro Tello'
    });
});

app.get('/elements', (req, res)=>{
    res.render('elements',{
        titulo: 'Curso de node',
        desarrollo: 'Ramiro Tello'
    });
});

app.get('/*', (req, res)=>{
    res.send('404 no se encontró pagina');
});

app.listen(port, () => {
    console.log(`Aplicación escuchando en http://localhost ${port}`)
});