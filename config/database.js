const mongoose = require('mongoose');

// local connection string to connect DB
const url = 'mongodb://localhost:27017/shb';

// Connecting to the database
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
