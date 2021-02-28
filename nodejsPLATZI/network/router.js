const express = require('express'); // IMPORTA MODULO EXPRESSS
const mensaje = require('../componentes/mensajes/network');

const router = function(server) {
    server.use('/mensajes', mensaje);
}

module.exports = router;