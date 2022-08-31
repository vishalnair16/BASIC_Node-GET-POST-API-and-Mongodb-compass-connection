const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    description:{
        required: true,
        type:String
    },
    price:{
        required:true,
        type:Number
    },
    productImage:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('Data',dataSchema)