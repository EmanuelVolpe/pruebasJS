exports.succes = function(req, res, mensaje, status){
    res.status(status || 200).send({
        'Error': '',
        'Body': mensaje
    });
}

exports.error = function(req, res, mensaje, status){
    res.status(status || 500).send({
        'Error': mensaje,
        'Body': ''
    });
}