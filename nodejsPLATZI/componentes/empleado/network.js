const { text } = require('body-parser');
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

router.get('/:id', (req, res) => {
  const idEmpleado = req.params.id;
  controller.obtieneEmpleado(idEmpleado)
  .then((usuario) => {
    response.succes(req, res, usuario);
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

router.patch('/:id', (req, res) => {
  controller.actualizaEmpleado(req.params.id, req.body.ocupacion)
  .then((data)=> {
    response.succes(req, res, data);
  })
  .catch((error) => {
    response.error(req, res, 'Error al actualizar el Empleado');
  })       
})

  
router.delete('/:id', (req, res) => {
  controller.eliminaEmpleado(req.params.id)
  .then((data)=> {
    response.succes(req, res, data);
  })
  .catch((error) => {
    response.error(req, res, 'Error al eliminar el Empleado');
  })
});

module.exports = router;