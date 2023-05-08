//Cargue la conexion del grupo MySQL
const { request } = require('express');
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
    app.get('/users/:id', (request, response) => {
        const id = request.params.id;
    
        pool.query('SELECT * FROM users Where id = ?', id, (err, res) => {
            response.send(res);
        })
    });

    app.post('/users', (request, response) =>{ //Instalar postman
        pool.query('INSERT INTO users SET ?', request.body, (error, result) =>{
            if (error) throw error;
            response.status(201).send(`User added wid ID: ${result.insertID}`);
        });
    });
    app.put ('/user/id', (request, response) =>{
        const id = request.params.id;
        pool.query('UPDATE users SET ? WHERE id = ?' [request.body, id], (error, result) => {
            if (error) throw error;
            response.send('User update successfully');
        });
    });

    app.delete('/users/:id', (request,response) =>{
        const id = request.params.id;
        pool.query('DELETE FROM users WHERE id = ?', id, (error, result) => {
            if (error) throw error;
            response.send('User Deleted.')
        });
    });
}
module.exports = routes;


//crear la base de datos api y poner el nombre de la tabla users en MySQL
