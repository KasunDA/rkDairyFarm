var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var Admin = new Schema({
	fullname:String,
    username: String,
    password: String,
    emailid:String,
    Phoneno:Number
});
Admin.plugin(passportLocalMongoose);
module.exports = mongoose.model('Admin', Admin);
