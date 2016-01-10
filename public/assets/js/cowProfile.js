var app=angular.module("myApp",[]);
app.controller("listCtrl",function($scope,$http,$rootScope)
{
	function refresh()
	{
		$http.get("/getProfile").success(function(response)
		{
			$scope.list = response;
			$scope.contact="";
		});
    }
    refresh();
	$scope.save=function()
	{
		var name = document.getElementById("name").value;
		if(name=="")
			{
				document.getElementById("err").innerHTML = "please fill the all input box";
				return;
			}
			else
			{
				document.getElementById("err").innerHTML = "";
				$http.post("/saveProfile",$scope.contact).success(function(response)
				{
				refresh();
				});
			}
	}
	$scope.delete=function(id)
	{
		$http.get("/deleteProfile/"+id).success(function(response)
		{
		refresh();
		});

	}
});
