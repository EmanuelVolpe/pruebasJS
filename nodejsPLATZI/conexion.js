const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

async function conectar(uri, dbname) {
    await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
        console.log(`conectado a la DDBB ${dbname}`);
    });
}

module.exports = conectar;