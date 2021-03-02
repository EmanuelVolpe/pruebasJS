const express = require('express');
const mensaje = require('../componentes/empleado/network');

const routes = function(index) {
    index.use('/empleado', mensaje);
}

module.exports = routes;