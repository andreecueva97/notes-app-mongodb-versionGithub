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
        edad:{
            type: String,
            required:true
        },
        telefono:{
            type: String,
            required:true
        },
        educacion:{
            type: String,
            required:true
        },
        estadoCivil:{
            type: String,
            required:true
        },
        genero:{
            type: String,
            required:true
        },
    }
);

module.exports = mongoose.model('User', userSchema);