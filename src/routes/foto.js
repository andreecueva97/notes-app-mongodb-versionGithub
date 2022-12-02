const express= require('express');

//Traemos el schema de user desde el models/user
const fotoSchema = require('../models/foto');

const router = express.Router();

const multer = require("multer");

const path = require('path');// FALTA INSTALAR
var fs = require('fs');      // FALTA INSTALAR

const filestorage=multer.diskStorage({
    destination:(req,file,cb)=>{       //ubicacion donde se van a guardar los archivos
        cb(null,"./src/uploads")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+"--"+file.originalname);//timestamp fecha de subida + . + extensionDelArchivoReal 

    },
})
const upload=multer({storage: filestorage})//dest:'uploads/'// deonde se van a guardar los archivos

//Busca Fotos User
router.get('/fotos/user/:id',async (req,res)=>{
    try {
        console.log(req.params.id_user)
        const foto = await fotoSchema.find({id_user:req.params.id}).exec()
        res.json(foto)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
});
//Busca Fotos Perro
router.get('/fotos/dog/:id',async (req,res)=>{
    try {
        console.log(req.params.id_dog)
        const foto = await fotoSchema.find({id_dog:req.params.id}).exec()
        res.json(foto)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
});

//Create foto, guardando los parametros usando SAVE
router.post('/fotos/single',upload.single('image'),(req,res)=>{
    //el nombre avatar debe coincidir con el nombre del archivo de html que pasamos con el valor de single. 
//upload single indica que se va a pasar solo un archivo a la vez.

    console.log(req.file);
    const foto = new fotoSchema({
        foto:req.file.filename,
        fotopath:req.file.path,
        id_user:req.body.id_user,
        id_dog:req.body.id_dog,
        fotocategoria:req.body.fotocategoria,
    })
    try {
        const newfoto = foto.save()
        res.status(201).json(foto)
      } catch (err) {
        res.status(400).json({ message: err.message })
      }
});
//GetOneFoto AND Download OneFoto                                 -----> OK
router.get('/fotos/download/:file',(req,res)=>{
    var file = req.params.file;
    //OR USE BODY TO PASS FOTO NAME EXAMPLE: foto1.jpg
    //var file = req.body.file;
    console.log(file);
    var fileLocation = path.join('./src/uploads',file);
    console.log(fileLocation);
    res.download(fileLocation, file);

});
//Borrar la FOTO de la carpeta de UPLOADS delete => foto/delete   -----> OK
router.post('/fotos/delete',(req,res)=>{ 
    const file = req.body.file;
    const id=req.body.id_user;
    var fileLocation = path.join('./src/uploads',file);
    console.log(fileLocation);
    fotoSchema.deleteMany({foto:file})
    .then(console.log('success'))
    fs.unlink(fileLocation, 
      function (err) {
          if (err){ 
          res.send("failed")
        }else
            res.send('file deleted')
          
    });

});
//GetAllFotos, Muestra todo los archivos guardados                ----> OK
router.get('/fotos/uploads',(req,res)=>{
    const testFolder = './src/uploads';
    console.log(testFolder);
    const fs = require('fs');
    let filelist=[];
    fs.readdir(testFolder, (err, files) => {
      files.forEach(file => {
        filelist.push(file);
      });
      res.send(filelist);
      console.log(filelist);
    });
    
});
//

///////////////////////////////////////////////////////////////////

module.exports = router;    