var async = require('async');
var passport = require('passport');
var Admin = require('../models/admin');
function AdminController(){};
var isValid = function(req, cb){
	if(req.body){
		var username = req.body.username;
		var password = req.body.password;
		if(!username){
			return cb("Username is required", null);
		}
		if(!password){
			return cb("Password is required", null);
		}
		return cb(null, req);
	}
	return cb("Username and password is required", null);
};

var register = function(req, cb){
	Admin.register(new Admin({ username : req.body.username }), req.body.password, function(err, admin) {
        if (err) {
          return cb(err.message, null);
        }else{
        	return cb(null, "Account created");
        }
	});
};
AdminController.prototype.register = function(req, res){
	async.waterfall([
        isValid.bind(this, req),
        register,
    ], function (err, data) {
        if (err) {
            res.status(400);
            return res.json({data : null, message : err});
        } else {
            passport.authenticate('local')(req, res, function () {
	            res.redirect('/milk');
	        });
        }
    });
};
module.exports = function () {
	return new AdminController();
}();
