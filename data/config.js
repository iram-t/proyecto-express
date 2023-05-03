//usar nom install mysql, se va a mandar a ubuntu
//En windows sql server 
const mysql = require('mysql');

//DB connection credentials
const config = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'api',
};

const pool = mysql.createPool(config);

module.exports = pool;