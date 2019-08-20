'user strict';

// const Sequelize = require('sequelize');
// const fs = require('fs');
// const path = require('path');
// var basename  = path.basename(__filename);



const _ = require('lodash');
const knex = require('knex');
const knexFile = require('./knexFile');

// database instance holder
let dbInstance = null;

/**
 * Get current database instance.
 * @returns {knex} db instance.
 */
function pgdb() {
  // return db
  console.log(dbInstance);
  return dbInstance;
}

/**
 * Middleware to init the db instance
 * @param {LambdaRequest} req request
 * @param {LambdaResponse} res response
 */
pgdb.init = async function (req, res) {
  // init instance
  dbInstance = knex(knexFile);
  console.log(dbInstance);
};

/**
 * Middleware to destroy the db instance
 * @param {LambdaRequest} req request
 * @param {LambdaResponse} res response
 */
pgdb.destroy = async function (req, res) {
  if (dbInstance) {
    await dbInstance.destroy();
  }
};

/**
 * Database instance accessor.
 * @type {db}
 */
module.exports = pgdb;
















// const sequelize = new Sequelize(database, user, password, {
//   host: host,
//   port: port,
//   dialect: 'mysql'
// });
//
// sequelize
//     .authenticate()
//     .then(() => {
//       console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//       console.error('Unable to connect to the database:', err);
//     });
//
//     fs
//     .readdirSync(__dirname)
//     .filter(file => {
//       return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//     })
//     .forEach(file => {
//       var model = sequelize['import'](path.join(__dirname, file));
//       db[model.name] = model;
//     });
// console.log(db, " == ");
// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });
//
//  sequelize
//     .sync()
//      .then(() => {
//        console.log('model has been established successfully.');
//      })
//      .catch(err => {
//        console.error('model to connect to the database:', err);
//      });
//
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
//
// module.exports = db;







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