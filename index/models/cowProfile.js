var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var cowProfile= new Schema({
    name: String,
    age: Number,
    inj: Date,
    expected: Date,
    calves: Number
});
module.exports = mongoose.model('cowProfile', cowProfile);

