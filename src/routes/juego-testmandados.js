const express= require('express');

//Traemos el schema de user desde el models/juego
const juegoSchema = require('../models/juego');

const router = express.Router();


//CreateJuego
router.post('/juegos',(req,res)=>{
    // res.send('ruta de createJuego');
    // esto crea un juego con los datos del REQ:
    //console.log(req.body);
    const juego = juegoSchema(req.body);
    // para guardarlo en la bd
    juego.save().
        then((data)=> res.json(data)) //ACA LE DIJE QUE SI ESTA OK, RESPONDEME CON LOS DATOS JSON
        .catch((error)=> res.json({message:error}));
});
//GetAllJuegos
router.get('/juegos',(req,res)=>{
    // res.send('ruta de createJuego');
    // usaremos directamente el squema de juego
    juegoSchema
    // para buscar en la bd
        .find().
        then((data)=> res.json(data)) //ACA LE DIJE QUE SI ESTA OK, RESPONDEME CON LOS DATOS JSON
        .catch((error)=> res.json({message:error}));
});
//GetOneJuego
router.get('/juegos/:id',(req,res)=>{
    // debo extraer el parametro del path donde tengo el id.
    //const {id } = req.params;
    const {id }= req.params;
    // res.send('ruta de createJuego');
    // usaremos directamente el squema de juego
    juegoSchema
    // para buscar en la bd un JUEGO especifico 
        // si se usa id de mongo usar  .findById(id).
        .find({id:id}).
        then((data)=> res.json(data)) //ACA LE DIJE QUE SI ESTA OK, RESPONDEME CON LOS DATOS JSON
        .catch((error)=> res.json({message:error}));
});
//UpdateOneJuego
router.put('/juegos/:id',(req,res)=>{
    // debo extraer el parametro del path donde tengo el id.
    //const {id } = req.params;
    const {id }= req.params;
    // debo extraer los campos del juego
    const {tipo, user, posiciones, posicionesTiempo, posicionesNumericas}= req.body;
    // res.send('ruta de createJuego');
    // usaremos directamente el squema de juego
    juegoSchema
    // para actualizar en la bd un JUEGO especifico 
        //lo va a entrar con _id:id
        // tambien para actualizar los datos
        //debemos hacer un $set y dentro los campos a updatear
        .updateOne({id:id},{$set:{tipo, user, posiciones, posicionesTiempo, posicionesNumericas}}).
        then((data)=> res.json(data)) //ACA LE DIJE QUE SI ESTA OK, RESPONDEME CON LOS DATOS JSON
        .catch((error)=> res.json({message:error}));
});
//DeleteOneJuego
router.delete('/juegos/:id',(req,res)=>{
    // debo extraer el parametro del path donde tengo el id.
    //const {id } = req.params;
    const {id }= req.params;
    // res.send('ruta de createJuego');
    // usaremos directamente el squema de juego
    juegoSchema
    // para remover en la bd un JUEGO especifico 
        //lo va a entrar con _id:id
        // tambien para borrar los datos
        .remove({id:id})
        .then((data)=> res.json(data)) //ACA LE DIJE QUE SI ESTA OK, RESPONDEME CON LOS DATOS JSON
        .catch((error)=> res.json({message:error}));
});

module.exports = router;    