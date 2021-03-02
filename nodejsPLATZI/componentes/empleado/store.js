const mongoose = require('mongoose');
const Empleado = require('./modelo');

mongoose.Promise = global.Promise;
const user = "manu";
const pass = "manu";
const dbname = "coleccion";
const uri = `mongodb+srv://${user}:${pass}@manucluster.c1h7e.mongodb.net/${dbname}?retryWrites=true&w=majority`;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
    console.log(`conectado a la DDBB ${dbname}`);
});

function addEmpleado(empleado){
    const miEmpleado = new Empleado(empleado);
    miEmpleado.save();
}

async function getEmpleados(){
    const empleados = await Empleado.find();
    return empleados;
}

module.exports = {
    addEmpleado,
    getEmpleados
}