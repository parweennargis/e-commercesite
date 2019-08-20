const host = 'localhost';
const port = 8889;
const user = 'root';
const password = 'root';
const database = 'shb';
const db = {};

// class KnexConf {



const options = {
    client: 'mysql',
    connection: {
      host : host,
      port: port,
      user : user,
      password : password,
      database : database
    }
  };
const knex = require('knex')(options);

  module.exports = knex;





//   get stage() {
//     // get stage
//     const STAGE = process.env.STAGE || 'dev';
//
//     if (STAGE == 'prod') {
//       return process.env.PGDB_URI_PROD;
//     } else if (STAGE == 'staging') {
//       return process.env.PGDB_URI_STAGING;
//     } else {
//       return process.env.PGDB_URI_DEV;
//     }
//   }
//
//   get client() {
//     return 'postgresql';
//   }
//
//   get connection() {
//     return this.stage;
//   }
//
//   get pool() {
//     return { min: 0, max: 1 };
//   }
//
//   get migrations() {
//     return { tableName: 'knex_migrations' };
//   }
//
//   get schemas() {
//     return 'public';
//   }
//
//   get seed() {
//     return { directory: './seeds' }
//   }
//
//   get multipleStatements() {
//     return true;
//   }
// }
//
// /**
//  * Knex configurations
//  */
// module.exports = new KnexConf();