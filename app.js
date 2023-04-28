const express = require('express');
const port = 3002;
//permite el manejo de POST y POST
const bodyParser = require('body-parser');
const routes = requiere('./routes/routes');
const app = express();

//Usar Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app);

//iniciar servidor
const server = app.listen(port, (error) => {
    if(error) return console.log(`Error: ${error}`);
    console.log(`El servidor escucha en el puerto ${server.address().port}`);
});