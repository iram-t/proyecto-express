//Cargue la conexion del grupo MySQL
const pool = require('../data/config');

//Ruta de la app
const routes = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Bienvenido a Node.js Express REST API!'
        });
    });
    //Mostrar todos los usuarios
    app.get('/users', (request, response) => {
        pool.query('SELECT * FROM users', (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });
}
module.exports = routes;

//crear la base de datos api y poner el nombre de la tabla users en MySQL
