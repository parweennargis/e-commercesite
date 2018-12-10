'user strict';

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'shb'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("database connected");
    }
});

module.exports = connection;