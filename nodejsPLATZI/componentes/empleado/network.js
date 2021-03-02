const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller')

router.get('/', (req, res) => {
  controller.obtieneEmpleados()
  .then((listaUsuarios) => {
    response.succes(req, res, listaUsuarios);
  })
  .catch((error) => {
    response.error(req, res, 'Error al obtener la lista de Empleados');
  })
})
  
router.post('/', (req, res) => {
  controller.agregaEmpleado(req.body.nombre, req.body.ocupacion)
  .then((fullEmpleado)=> {
    response.succes(req, res, fullEmpleado);
  })
  .catch((error) => {
    response.error(req, res, 'Error al crear el Empleado');
  })       
});

  
router.delete('/', (req, res) => {
      response.succes(req, res, 'borrando un empleado');
})

module.exports = router;