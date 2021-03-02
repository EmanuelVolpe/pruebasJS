const store = require('./store');

function agregaEmpleado(nombre, ocupacion) {
    return new Promise((resolve, reject) => {
        if(!nombre || !ocupacion){
            console.error('Controlador de Empleado: No se ingreso Nombre u Ocupacion');
            reject('Faltan Datos');
            return false;
        }
        const fullEmpleado = {
            nombre: nombre,
            ocupacion: ocupacion,
            fecha: new Date()
        }
        store.addEmpleado(fullEmpleado);
        resolve(fullEmpleado);
    });  
}

function obtieneEmpleados() {
    return new Promise((resolve, reject) => {
        resolve(store.getEmpleados());
    });
}


module.exports = {
    agregaEmpleado,
    obtieneEmpleados
}