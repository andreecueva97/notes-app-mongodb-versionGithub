const express = require('express');

const mongoose = require('mongoose');

require("dotenv").config();

const app = express();
const port = process.env.PORT ||9000;

const userRoutes = require('./routes/user');
const dogRoutes = require('./routes/dog');
const solicitudRoutes = require('./routes/solicitud');
const fotoRoutes = require('./routes/foto');
//middleware
app.use(express.json());
app.use('/api',userRoutes);
app.use('/api',dogRoutes);
app.use('/api',solicitudRoutes);
app.use('/api',fotoRoutes);

//routes
app.get('/',(req,res)=>{
    res.send('welcome to my api')
})
//deep learning
app.get('/deep-learning', function(req, res) {
    res.sendFile('test.html', {root: __dirname })
});

//mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log('conectado a la bd de mongo'))
    .catch((error) => console.error(error));






//////servidor escucha por el puerto tal
app.listen(port,()=> console.log(
    'escuchando ',port
));

//nodemon permite reiniciar el servidor cada 
//vez que haga cambios en el codigo

