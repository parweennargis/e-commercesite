const mongoose = require('mongoose');

// local connection string to connect DB
const url = 'mongodb://localhost:27017/shb';

// module.exports.init = async function (req, res) {
//
//   // ensure db connection is ready
//   const STAGE = process.env.STAGE || 'dev';
//   await mongoose.connect(url, {useNewUrlParser: true});
// };
//
// module.exports.destroy = async function (req, res) {
//   await mongoose.connection.close();
// }


// // Connecting to the database
mongoose.connect(url, {
  useNewUrlParser: true
})
    .then(() => {
      console.log("Successfully connected to the Mongo database");
    })
    .catch(err => {
      console.log('Could not connect to the database. Exiting now...', err);
      process.exit();
    });
