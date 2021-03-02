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

function obtieneEmpleado(idEmpleado) {
    return new Promise((resolve, reject) => {
        resolve(store.getEmpleado(idEmpleado));
    });
}

function actualizaEmpleado(idEmpleado, datosEmpleado){
    return new Promise(async (resolve, reject) => {
        if(!idEmpleado || !datosEmpleado){
            reject('Faltan Datos');
            return false;
        }
        const result = await store.updateEmpleado(idEmpleado, datosEmpleado);
        resolve(result);
    });
}

function eliminaEmpleado(idEmpleado){
    return new Promise(async (resolve, reject) => {
        if(!idEmpleado){
            reject('Faltan Datos');
            return false;
        }
        const result = await store.deleteEmpleado(idEmpleado);
        resolve(result);
    });
}


module.exports = {
    agregaEmpleado,
    obtieneEmpleados,
    obtieneEmpleado,
    actualizaEmpleado,
    eliminaEmpleado
}