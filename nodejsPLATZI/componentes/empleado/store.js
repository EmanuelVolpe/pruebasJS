const Empleado = require('./modelo');

function addEmpleado(empleado){
    const miEmpleado = new Empleado(empleado);
    miEmpleado.save();
}

async function getEmpleado(idEmpleado){
    const empleado = await Empleado.findById(idEmpleado);
    return empleado;
}

async function getEmpleados(){
    const empleados = await Empleado.find();
    return empleados;
}

async function updateEmpleado(idEmpleado, datosEmpleado){
    console.log(idEmpleado);
    console.log(datosEmpleado);
    const empleado = await Empleado.findById(idEmpleado);
    empleado.ocupacion = datosEmpleado;
    const nuevoEmpleado = await empleado.save();
    return nuevoEmpleado;
}

async function deleteEmpleado(idEmpleado){
    const empleado = await Empleado.findById(idEmpleado);
    empleadoBorrado = await empleado.remove();
}

module.exports = {
    addEmpleado,
    getEmpleados,
    getEmpleado,
    updateEmpleado,
    deleteEmpleado
}