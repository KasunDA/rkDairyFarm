var express = require('express');
var router = express.Router();
var homeController = require("../controllers/homeController.js");
var adminController = require("../controllers/adminController.js");
var profileController = require("../controllers/profileController.js");
var passport = require('passport');
 var isAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()){
        return next();
    }
        res.redirect('/');
    };
router.get('/', function (req, res) {
     homeController.home(req, res);
});
router.get('/register', function(req, res) {
    res.render('register', { });
    });
router.get('/milk', isAuthenticated, function (req, res) {
    homeController.milk(req, res);
});
router.get('/cowProfile',isAuthenticated, function (req, res) {
    profileController.cowProfile(req, res);
});
router.get('/getProfile',isAuthenticated, function (req, res) {
    profileController.getProfile(req, res);
});
router.get('/litre', isAuthenticated, function (req, res) {
    homeController.litre(req, res);
});

router.get('/login', function (req, res) {
   res.render('login', { });
});
router.get('/logout', isAuthenticated, function(req, res) {
    req.logout();
    res.redirect('/');
});
router.post('/saveLitre', isAuthenticated, function (req, res) {
    homeController.saveLitre(req, res);
});
router.post('/saveProfile', isAuthenticated, function (req, res) {
    profileController.saveProfile(req, res);
});
router.get("/deleteProfile/:id",function(req,res){
     profileController.deleteProfile(req, res);
});
router.get("/deleteLitre/:id",function(req,res){
      homeController.deletelitre(req, res);
});
   
router.post('/register', function(req, res) {
 	adminController.register(req, res);
});
router.post('/login', 
	passport.authenticate('local', 
	{
		successRedirect: '/milk',
	    failureRedirect: '/',
		failureFlash: true 
	 })
   );
module.exports = router;