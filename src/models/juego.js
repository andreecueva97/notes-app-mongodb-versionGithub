const mongoose = require('mongoose');
//const { Schema } = mongoose;
const userSchema = require('../models/user').schema;
// const userSchema = mongoose.Schema( //opcion2
//     {
//      ...   
//     }
// );

const juegoSchema = mongoose.Schema(
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
        tipo:{
            type: Number,
            required:true,
            //unique   : true,
            validate : {
                 validator : Number.isInteger,
                  message   : '{VALUE} is not an integer value'
            }
        },
        user:
        //[userSchema]
        userSchema //este funciono correctamente
        //[{ type: Schema.Types.ObjectId, ref: 'User' }]
        ,
        posiciones:{
            type : Array , 
            "default" : []
        },
        posicionesTiempo:{
            type : Array , 
            "default" : []
        },
        posicionesNumericas:{
            type : Array , 
            "default" : []
        },
    }
);

//module.exports = mongoose.model('User', userSchema);
module.exports = mongoose.model('Juego', juegoSchema);