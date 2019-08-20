'user strict';

const Sequelize = require('sequelize');

const host = 'localhost';
const port = 8889;
const user = 'root';
const password = 'root';
const database = 'shb1';
const db = {};

const sequelize = new Sequelize(database, user, password, {
  host: host,
  port: port,
  dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

// const mysql = require('mysql');
//
// const connection = mysql.createConnection({
//   host: 'localhost',
//   port: 8889,
//   user: 'root',
//   password: 'root',
//   database: 'shb'
// });
//
// connection.connect((err) => {
//   if (err) {
//     console.log(err, " == Database connection Error == ");
//   } else {
//     console.log("database connected");
//   }
// });
//
// module.exports = connection;