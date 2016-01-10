 var async = require('async');
var litre = require('../models/litre');
function homeController(){}

homeController.prototype.home = function(req, res){
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.render('home');
};
homeController.prototype.milk = function(req, res){
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.render('milk', {user: req.user});
};
homeController.prototype.litre = function(req, res){
	litre.find(function(err,litres)
        {
            res.json(litres); 

        });
};
homeController.prototype.saveLitre = function(req, res){
litre.findOne({date: req.body.cow1},function(err,data)
    { 

        if (data) 
        {
        res.json(null);
        return;
        }
        else
        {
            var newDate= new litre(req.body);
            newDate.save(function(err,data)
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

        }
    });
};
homeController.prototype.deletelitre = function(req, res){
 var id=req.params.id;
    litre.remove({_id:req.params.id},function(err){
    if(err)
        {
            return res.json({data:null, message:err});
        }
        else
        {
        return res.json({data:"removed", message:null});
        }
});
};
module.exports = function () {
return new homeController();
}();
