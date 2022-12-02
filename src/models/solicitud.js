const mongoose = require('mongoose');

// const userSchema = require('../models/user').schema;


const solicitudSchema = mongoose.Schema(
    {
        id:{
            type: Number,
            required:true,
            unique   : true,
            validate : {
                 validator : Number.isInteger,
                  message   : '{VALUE} is not an integer value'
            }
        },
        id_dog:{
            type: Number,
            required:true,
            //unique   : true,
            validate : {
                 validator : Number.isInteger,
                  message   : '{VALUE} is not an integer value'
            }
        },
        id_user:{
            type: Number,
            required:true,
            //unique   : true,
            validate : {
                 validator : Number.isInteger,
                  message   : '{VALUE} is not an integer value'
            }
        },
        comentarios:{
            type : Array , 
            "default" : []
        },
        tipo:{
            type: String,
            required:true
        },
        estadoSolicitud:{
            type: Number,
            required:true,
            //unique   : true,
            validate : {
                 validator : Number.isInteger,
                  message   : '{VALUE} is not an integer value'
            }
        },
        // user:
        //     userSchema
        // ,
    }
);

//module.exports = mongoose.model('User', userSchema);
module.exports = mongoose.model('Solicitud', solicitudSchema);