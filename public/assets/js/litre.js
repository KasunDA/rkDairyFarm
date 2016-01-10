var app=angular.module("myApp",[]);
app.controller("listCtrl",function($scope,$http,$rootScope)
{
	function refresh()
	{
		$http.get("/litre").success(function(litres)
		{
			$scope.litre = litres;
			$scope.contact="";
		});
    }
    refresh();
    $scope.save=function()
	{
		var date = document.getElementById("date").value;
		if(date=="")
			{
				document.getElementById("err").innerHTML = "please fill the all input box";
				return;
			}
			else
			{
				document.getElementById("err").innerHTML = "";
			    $http.post("/saveLitre",$scope.contact).success(function(response)
			    {
				refresh();
				});
		    }
	}
	$scope.delete=function(id)
	{
		$http.get("/deleteLitre/"+id).success(function(response)
		{
		refresh();
		});

	}
	
});
	
	