const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone_number: String
}, { timestamps: true});

const Person = mongoose.model('Person', PersonSchema);
module.exports = Person;