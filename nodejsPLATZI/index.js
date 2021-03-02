const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes');
const port = 3000

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//app.use(router);
app.use('/app', express.static('public'));

router(app);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})