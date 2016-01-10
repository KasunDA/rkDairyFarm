var async = require('async');
var cowProfile = require('../models/cowProfile');
 function profileController(){}
profileController.prototype.cowProfile = function(req, res){
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.render('cowProfile');
};
profileController.prototype.getProfile = function(req, res){
	cowProfile.find(function(err,response)
        {
            res.json(response); 

        }); 
};
profileController.prototype.saveProfile = function(req, res){
cowProfile.findOne({},function(err,data)
    { 
	    	var newName= new cowProfile(req.body);
	        newName.save(function(err,data)
            {
                if (err) 
                {
	            res.status(400);
	            return res.json({data : null, message : err});
	            } 
                else 
                {
	            res.status(200);
	            return res.json({data : data, message : null});
	            }
            });
    });
};
profileController.prototype.deleteProfile = function(req, res){
 var id=req.params.id;
    cowProfile.remove({_id:req.params.id},function(err){
    if(err)
    	{
 			return res.json({data:null, message:err});
		}
		else
		{
		return res.json({data:"removed", message:null});
		}
    console.log("request from remove");
});
};
module.exports = function () {
	return new profileController();
}();
 