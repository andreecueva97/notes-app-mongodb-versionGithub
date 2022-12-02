const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        id:{
            type: Number,
            required:true,
            //unique   : true,
            validate : {
                 validator : Number.isInteger,
                  message   : '{VALUE} is not an integer value'
            }
        },
        name:{
            type: String,
            required: true
        },
        apellido:{
            type: String,
            required:true
        },
        direccion:{
            type: String,
            required:true
        },
        telefono:{
            type: String,
            required:true
        },
        email:{
            type: String,
            required:true
        },
        contrasena:{
            type: String,
            required:true
        },
    }
);

module.exports = mongoose.model('User', userSchema);