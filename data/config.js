//En windows sql server 
const mysql = require('mysql');

//DB connection credentials
const config = {
    host: 'localhost',
    user: 'root', //cambiar usuario y la contraseña cuando lo tenga que subirlo a ubuntu
    password: 'password',
    database: 'api',
};

const pool = mysql.createPool(config);

module.exports = pool;