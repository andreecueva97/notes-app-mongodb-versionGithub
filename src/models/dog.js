const mongoose = require('mongoose');

const dogSchema = mongoose.Schema(
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
        color:{
            type: String,
            required:true
        },
        raza:{
            type: String,
            required:true
        },
        estado:{
            type: String,
            required:true
        },
        estadoDogSituacion:{
            type: Number,
            required:true,
            //unique   : true,
            validate : {
                 validator : Number.isInteger,
                  message   : '{VALUE} is not an integer value'
            }
        },
        imagen:{
            type : Array , 
            "default" : []
        },
        informacion:{
            type: String,
            required:true
        },
        comentarios:{
            type : Array , 
            "default" : []
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
    }
);

module.exports = mongoose.model('Dog', dogSchema);