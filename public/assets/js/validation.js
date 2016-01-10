$(document).ready(function()
{
	$("[class^=incorrect]").css("color","red");
	$("#fullname").keyup(function()
	{
		var fullname=$('#fullname').val().toUpperCase();
		$("#fullname").val(fullname);
	});
	$("#fullname").blur(function()
	{
		var fullname=$('#fullname').val();
		if(fullname=="")
		{
			$(".incorrectfullname").text('Please enter full name');
		}
		else
		{
			$(".incorrectfullname").text('');
		}
		
	});
	$("#username").blur(function()
	{
		var username=$('#username').val();
		if(username=="")
		{
			$(".incorrectusername").text('Please enter user name');
		}
		else
		{
			$(".incorrectusername").text('');
		}
		
	});
	$("#password").blur(function()
	{
		var password=$('#password').val();
		if(password=="")
		{
			$(".incorrectpassword").text('Please enter password');
		}
		else
		{
			$(".incorrectpassword").text('');

		}
	});
	$("#repeatpassword").blur(function()
			{
				var repeatpassword=$('#repeatpassword').val();
				var password=$('#password').val();
				if(repeatpassword=="")
				{
					$(".incorrectrepeatpassword").text("Please enter password");

				}
				else if(password==repeatpassword)
				{
					$(".incorrectrepeatpassword").text("");
				}
				else
				{
					$(".incorrectrepeatpassword").text("Password and confirm password are not same");
				}
			});	
	$("#emailid").blur(function()
	{

		var email=$('#emailid').val();
		if(!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/).test(email))
		{
        $(".incorrectemailid").text('please enter valid Email ID');
		}
		else
		{
			$(".incorrectemailid").text('');
		}
	});
	$("#phoneno").blur(function()
	{
		var phoneno=$("#phoneno").val();
		//var checkno=phoneno.match(/\d+/g);
		var checkno=Number(phoneno);
		var string=String(checkno);
		//alert(checkno.length);
		if((checkno=="")||(isNaN(checkno))||(string.length!=10))
		{
			//if(checkno[0].length)
			$(".incorrectphoneno").text('please enter valid phone number');
		}
		else 
		{
			$(".incorrectphoneno").text('');
		}
		
	});
});
var app=angular.module("myApp",[]);
app.controller("personCtrl",function($scope)
{
	var admin = {username:'mathan',password:'password'}
    $scope.admin = admin;
      
});