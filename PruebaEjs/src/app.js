import express from 'express';
import __dirname from './utils.js';
import apiRouter from './routes/productos.js';



const app = express();

const server = app.listen(8080,()=>console.log("Listening on 8080"));

app.set('views',__dirname+'/views');
app.set('view engine','ejs');

app.get('/', (req, res) => {
    const items = products.viewAll()
    res.render('formulario', { items: items, mensaje: 'No hay productos' });
});



