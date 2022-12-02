const express= require('express');

//Traemos el schema de user desde el models/solicitud
const solicitudSchema = require('../models/solicitud');

const router = express.Router();


//Createsolicitud
router.post('/solicitudes',(req,res)=>{
    // res.send('ruta de createsolicitud');
    // esto crea un solicitud con los datos del REQ:
    //console.log(req.body);
    const solicitud = solicitudSchema(req.body);
    // para guardarlo en la bd
    solicitud.save().
        then((data)=> res.json(data)) //ACA LE DIJE QUE SI ESTA OK, RESPONDEME CON LOS DATOS JSON
        .catch((error)=> res.json({message:error}));
});
//GetAllsolicituds
router.get('/solicitudes',(req,res)=>{
    // res.send('ruta de createsolicitud');
    // usaremos directamente el squema de solicitud
    solicitudSchema
    // para buscar en la bd
        .find().
        then((data)=> res.json(data)) //ACA LE DIJE QUE SI ESTA OK, RESPONDEME CON LOS DATOS JSON
        .catch((error)=> res.json({message:error}));
});
//GetOnesolicitud
router.get('/solicitudes/:id',(req,res)=>{
    // debo extraer el parametro del path donde tengo el id.
    //const {id } = req.params;
    const {id }= req.params;
    // res.send('ruta de createsolicitud');
    // usaremos directamente el squema de solicitud
    solicitudSchema
    // para buscar en la bd un solicitud especifico 
        // si se usa id de mongo usar  .findById(id).
        .find({id:id}).
        then((data)=> res.json(data)) //ACA LE DIJE QUE SI ESTA OK, RESPONDEME CON LOS DATOS JSON
        .catch((error)=> res.json({message:error}));
});
//UpdateOnesolicitud
router.put('/solicitudes/:id',(req,res)=>{
    // debo extraer el parametro del path donde tengo el id.
    //const {id } = req.params;
    const {id }= req.params;
    // debo extraer los campos del solicitud
    const {id_dog, id_user, comentarios, tipo, estadoSolicitud}= req.body;
    // res.send('ruta de createsolicitud');
    // usaremos directamente el squema de solicitud
    solicitudSchema
    // para actualizar en la bd un solicitud especifico 
        //lo va a entrar con _id:id
        // tambien para actualizar los datos
        //debemos hacer un $set y dentro los campos a updatear
        .updateOne({id:id},{$set:{id_dog, id_user, comentarios, tipo, estadoSolicitud}}).
        then((data)=> res.json(data)) //ACA LE DIJE QUE SI ESTA OK, RESPONDEME CON LOS DATOS JSON
        .catch((error)=> res.json({message:error}));
});
//DeleteOnesolicitud
router.delete('/solicitudes/:id',(req,res)=>{
    // debo extraer el parametro del path donde tengo el id.
    //const {id } = req.params;
    const {id }= req.params;
    // res.send('ruta de createsolicitud');
    // usaremos directamente el squema de solicitud
    solicitudSchema
    // para remover en la bd un solicitud especifico 
        //lo va a entrar con _id:id
        // tambien para borrar los datos
        .remove({id:id})
        .then((data)=> res.json(data)) //ACA LE DIJE QUE SI ESTA OK, RESPONDEME CON LOS DATOS JSON
        .catch((error)=> res.json({message:error}));
});

module.exports = router;    