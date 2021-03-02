const mongoose = require('mongoose');

const mySchema = new mongoose.Schema(
    {
        nombre: String,
        ocupacion:String,
        fecha: Date
    }
);

const modelo = mongoose.model('Empleado', mySchema);
module.exports = modelo;