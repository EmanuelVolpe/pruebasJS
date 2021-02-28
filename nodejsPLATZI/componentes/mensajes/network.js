const express = require('express'); // IMPORTA MODULO EXPRESSS
const response = require('../../network/response'); // IMPORTA MODULO RESPONSE
const router = express.Router(); // LLAMA AL ROUTER

router.get('/', function(req, res) {
    console.log(req.headers);
    res.header({
        "respuesta-per": "valor personalizado"
    });
    response.succes(req, res, "obtiene los mensajes");
})

router.post('/', function(req, res){
    console.log(req.query);
    if(req.query.error == 'ok'){
        response.error(req, res, "Error al agregar el mensaje", 400);
    }else{
        response.succes(req, res, "mensaje agregado con exito", 201);
    }
})

module.exports = router;