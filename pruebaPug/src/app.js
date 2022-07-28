import express from 'express';
import __dirname from './utils.js';
import apiRouter from './routes/productos.js';

const app = express();

const server = app.listen(8080,()=>console.log("Listening on 8080"));


app.set('views',__dirname+'/views');
app.set('view engine','pug');
//app.use(express.json());


app.get('/', (req, res) => {
    const productos = productos.viewAll()
    console.log('productos', productos)
    if (productos.length > 0) {
        res.render('tabla', { productos: productos.viewAll(), productosExists: true })
    } else {
        res.render('tabla', { productos: productos.viewAll(), productosExists: false })
    }
})

app.use('/api',apiRouter);







