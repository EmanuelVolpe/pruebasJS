const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const User = require('./modelos');
const port = 3000;
const hostname = "LocalHost";


app.use(bodyparser.json());

const user = "manu";
const pass = "manu";
const dbname = "coleccion";
const uri = `mongodb+srv://${user}:${pass}@manucluster.c1h7e.mongodb.net/${dbname}?retryWrites=true&w=majority`;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, ()=> {
    console.log("conectado a la DDBB");
});

app.listen(port, hostname, () => {
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
    console.log(`Escuchando solicitud....`);
});

//TRAE TODOS LOS USUARIOS ALMACENADOS EN LA DDBB
app.get('/usuarios', async function (req, res) {
    try {
        const usuarioGuardado = await User.find();
        res.json(usuarioGuardado)
    } catch (error) {
        res.json({mensaje: error})
    }
});

//TRAE EL USUARIO CON EL ID DADO
app.get('/usuarios/:idUser', async function (req, res) {
    try {
        const usuarioGuardado = await User.findById(req.params.idUser)
        res.json(usuarioGuardado)  
        
    } catch (error) {
        res.json({mensaje: error})
    }
});

//SUBE UN USUARIO CON LOS PARAMETROS DADOS
app.post('/usuarios/', async function (req, res) {
    const usuario =  new User({
        nombre: req.body.nombre,
        ocupacion:req.body.ocupacion 
    })
    try {
        const usuarioGuardado = await usuario.save();
        res.json(usuarioGuardado)
    } catch (error) {
        res.json({mensaje: error})
    }
})

//BORRA EL USUARIO CON EL ID DADO DE LA DBB 
app.delete('/usuarios/:idUser', async function (req, res) {
    try {
        const usuarioBorrado = await User.remove({_id: req.params.idUser})
        res.json(usuarioBorrado)  
        
    } catch (error) {
        res.json({mensaje: error})
    }
});