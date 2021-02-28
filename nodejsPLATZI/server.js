const express = require('express'); // IMPORTA MODULO EXPRESSS
const bodyParser = require('body-parser');
const router = require('./network/router');

const app = express();
app.use(bodyParser.json());
//app.use(router);
router(app);

app.use('/app', express.static('public'));
app.listen(3000);
console.log("Escuchando...");