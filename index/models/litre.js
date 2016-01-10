var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var litre= new Schema({
    date: Date,
    cow1: Number,
    cow2: Number,
    cow3: Number,
    cow4: Number,
    cow5: Number,
    cow6: Number,
    cow7: Number,
    cow8: Number,
    cow9: Number,
    cow10: Number
});
module.exports = mongoose.model('litre', litre);

