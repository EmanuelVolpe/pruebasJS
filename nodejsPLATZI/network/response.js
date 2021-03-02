exports.succes = (req, res, mensaje, codigo) => {
    res.status(codigo = 201).send({ 
        error:'',
        body:mensaje
    });
};

exports.error = (req, res, mensaje, codigo) => {
    res.status(codigo = 400).send({
        error:mensaje,
        body:''
    });
};