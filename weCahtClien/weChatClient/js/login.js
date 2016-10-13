
document.write("<script language='javascript' src='js/Config.js'></script>");

function userLogin(username,password){
			$.ajax({
  				url:serverPath + "/weChatService/LoginServlet",
				type:"post",
//				data:"username="+username+"password="+password,
				data:{
					username:username,
					password:password
				},
				dataType:"json",
 beforeSend:function(){//交互时状态
  
  },
				success:function(data){
				if(data.flag)
				{
				    setCookie("username",username);
				    setCookie("password",password);
			     	window.location="usrMain.html";
				}
				else
				{
				window.alert(data.msg);
				}
				}
  			});
		}

	function loginClick()
	{
//		alert("用户名或密码不能为空！");
		//用户名
		var username = document.getElementById("username").value;
	   //密码
		var password = document.getElementById("password").value;
//		alert('用户名：'+username + ";" + '密码：' + password);
		if(username && password)
		{
//			alert('用户名：'+username + ";" + '密码：' + password);
			userLogin(username,password);
//           window.location.href="usrMain.jsp";
			return true;
		}
		else
		{
			alert("用户名或密码不能为空！");
			return false;
		}
	}