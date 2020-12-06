const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name: String,
    email: String,
}, { timestamps: true});

module.exports = PersonSchema;