/**
 * for mongodb connection
 */
const mongoose = require('mongoose');
require('dotenv').config();
const conString = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.l0xmy.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;
//const conString = 'mongodb://localhost:27017/customerDb';
//const conString = 'mongodb://mongo-db:27017/customerDb';
mongoose.connect(
  conString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log('Successfully connect to MondoDB...');
    else
      console.log(
        'Connection to MongoDb failed :' + JSON.stringify(err, undefined, 2)
      );
  }
);

module.exports = mongoose;