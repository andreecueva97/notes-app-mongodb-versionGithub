const mongoose = require('mongoose')

const fotoSchema = new mongoose.Schema({
  foto: {
    type: String,
    required: false
  },
  fotopath: {
    type: String,
    required: false
  },
  id_user: {
    type: Number,
            required:true,
            //unique   : true,
            validate : {
                 validator : Number.isInteger,
                  message   : '{VALUE} is not an integer value'
            }
   },
  id_dog: {
    type: Number,
            required:true,
            //unique   : true,
            validate : {
                 validator : Number.isInteger,
                  message   : '{VALUE} is not an integer value'
            }
        },
  fotocategoria: {
    type: String,
    required: false
  }
  
})

module.exports = mongoose.model('foto', fotoSchema)