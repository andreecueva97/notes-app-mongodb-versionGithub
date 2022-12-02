const express= require('express');

//Traemos el schema de user desde el models/user
const userSchema = require('../models/user');

const router = express.Router();
  
//CreateUser
router.post('/users',(req,res)=>{
    // res.send('ruta de createUser');
    // esto crea un usuario con los datos del REQ:
    const user = userSchema(req.body);
    // para guardarlo en la bd
    user.save().
        then((data)=> res.json(data)) //ACA LE DIJE QUE SI ESTA OK, RESPONDEME CON LOS DATOS JSON
        .catch((error)=> res.json({message:error}));
});
//GetAllUsers
router.get('/users',(req,res)=>{
    // res.send('ruta de createUser');
    // usaremos directamente el squema de user
    userSchema
    // para buscar en la bd
        .find().
        then((data)=> res.json(data)) //ACA LE DIJE QUE SI ESTA OK, RESPONDEME CON LOS DATOS JSON
        .catch((error)=> res.json({message:error}));
});
//GetOneUser
router.get('/users/:id',(req,res)=>{
    // debo extraer el parametro del path donde tengo el id.
     // req.params pero en este caso uso el id de schema creado dentro.
    const {id }= req.params;
    // res.send('ruta de createUser');
    // usaremos directamente el squema de user
    userSchema
    // para buscar en la bd un USER especifico 
    // si se usa id de mongo usar  .findById(id).
        .find({id:id}).
        then((data)=> res.json(data)) //ACA LE DIJE QUE SI ESTA OK, RESPONDEME CON LOS DATOS JSON
        .catch((error)=> res.json({message:error}));
});
//UpdateOneUser
router.put('/users/:id',(req,res)=>{
    // debo extraer el parametro del path donde tengo el id.
     // req.parameter pero en este caso uso el id de schema creado dentro.
     const {id }= req.params;
    // debo extraer los campos del usuario
    const {name, edad, telefono, educacion, estadoCivil, genero}= req.body;
    // res.send('ruta de createUser');
    // usaremos directamente el squema de user
    userSchema
    // para actualizar en la bd un USER especifico 
        //lo va a entrar con _id:id
        // tambien para actualizar los datos
        //debemos hacer un $set y dentro los campos a updatear
          // SI USO .updateOne({_id:id}) esto tomando el id creado por mongodb asignado a un objeto
        // EN ESTE CASO USARE el ID asignado dentro del schema
        .updateOne({id:id},{$set:{name, edad, telefono, educacion, estadoCivil, genero}}).
        then((data)=> res.json(data)) //ACA LE DIJE QUE SI ESTA OK, RESPONDEME CON LOS DATOS JSON
        .catch((error)=> res.json({message:error}));
});
//DeleteOneUser
router.delete('/users/:id',(req,res)=>{
    // debo extraer el parametro del path donde tengo el id.
    // req.parameter pero en este caso uso el id de schema creado dentro.
    const {id }= req.params;
    // res.send('ruta de createUser');
    // usaremos directamente el squema de user
    userSchema
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