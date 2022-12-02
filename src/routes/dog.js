const express= require('express');

//Traemos el schema de user desde el models/user
const dogSchema = require('../models/dog');

const router = express.Router();
  
//CreateUser
router.post('/dogs',(req,res)=>{
    // res.send('ruta de createUser');
    // esto crea un usuario con los datos del REQ:
    const dog = dogSchema(req.body);
    // para guardarlo en la bd
    dog.save().
        then((data)=> res.json(data)) //ACA LE DIJE QUE SI ESTA OK, RESPONDEME CON LOS DATOS JSON
        .catch((error)=> res.json({message:error}));
});
//GetAllUsers
router.get('/dogs',(req,res)=>{
    // res.send('ruta de createUser');
    // usaremos directamente el squema de user
    dogSchema
    // para buscar en la bd
        .find().
        then((data)=> res.json(data)) //ACA LE DIJE QUE SI ESTA OK, RESPONDEME CON LOS DATOS JSON
        .catch((error)=> res.json({message:error}));
});
//GetOneUser
router.get('/dogs/:id',(req,res)=>{
    // debo extraer el parametro del path donde tengo el id.
     // req.params pero en este caso uso el id de schema creado dentro.
    const {id }= req.params;
    // res.send('ruta de createUser');
    // usaremos directamente el squema de user
    dogSchema
    // para buscar en la bd un USER especifico 
    // si se usa id de mongo usar  .findById(id).
        .find({id:id}).
        then((data)=> res.json(data)) //ACA LE DIJE QUE SI ESTA OK, RESPONDEME CON LOS DATOS JSON
        .catch((error)=> res.json({message:error}));
});
//UpdateOneUser
router.put('/dogs/:id',(req,res)=>{
    // debo extraer el parametro del path donde tengo el id.
     // req.parameter pero en este caso uso el id de schema creado dentro.
     const {id }= req.params;
    // debo extraer los campos del usuario
    const {name, color, raza, estado, estadoDogSituacion, imagen, informacion, comentarios,id_user}= req.body;
    // res.send('ruta de createUser');
    // usaremos directamente el squema de user
    dogSchema
    // para actualizar en la bd un USER especifico 
        //lo va a entrar con _id:id
        // tambien para actualizar los datos
        //debemos hacer un $set y dentro los campos a updatear
          // SI USO .updateOne({_id:id}) esto tomando el id creado por mongodb asignado a un objeto
        // EN ESTE CASO USARE el ID asignado dentro del schema
        .updateOne({id:id},{$set:{name, color, raza, estado, estadoDogSituacion, imagen, informacion, comentarios,id_user}}).
        then((data)=> res.json(data)) //ACA LE DIJE QUE SI ESTA OK, RESPONDEME CON LOS DATOS JSON
        .catch((error)=> res.json({message:error}));
});
//DeleteOneUser
router.delete('/dogs/:id',(req,res)=>{
    // debo extraer el parametro del path donde tengo el id.
    // req.parameter pero en este caso uso el id de schema creado dentro.
    const {id }= req.params;
    // res.send('ruta de createUser');
    // usaremos directamente el squema de user
    dogSchema
    // para remover en la bd un USER especifico 
        //lo va a entrar con _id:id
        // tambien para borrar los datos
        // SI USO .remove({_id:id}) esto tomando el id creado por mongodb asignado a un objeto
        // EN ESTE CASO USARE el ID asignado dentro del schema
        .remove({id:id})
        .then((data)=> res.json(data)) //ACA LE DIJE QUE SI ESTA OK, RESPONDEME CON LOS DATOS JSON
        .catch((error)=> res.json({message:error}));
});

module.exports = router;    