const mongoose = require('mongoose');

const Schema = new mongoose.Schema(
    {
        id:Number,
        nombre: String,
        ocupacion:String
    }
);


module.exports = mongoose.model('User', Schema);