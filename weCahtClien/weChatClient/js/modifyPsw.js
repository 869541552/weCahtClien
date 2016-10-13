document.write("<script language='javascript' src='js/Config.js'></script>");

function modifyPassword()
	{
		var oldPassword = document.getElementById("oldPassword").value;
		var newPassword = document.getElementById("newPassword").value;
		var verPassword = document.getElementById("verPassword").value;
		var userName = getCookie("username");
		alert('用户名为：' + userName);
//		alert('原密码：'+oldPassword + ";" + '新密码：' + newPassword+ ";" + '校验密码：' + verPassword);
		if(newPassword != verPassword)
		{
		   alert("两个密码不一致");
			return false;
		}
		if(oldPassword && newPassword && verPassword && userName)
		{
		    modifyPwd(userName,newPassword,oldPassword);
			return true;
		}
		else
		{
			alert("密码不能为空！");
			return false;
		}
	}
	
function modifyPwd(username,password,oldPws){
			$.ajax({
  				url:serverPath + "/weChatService/LoginServlet",
				type:"post",
				data:{
				   code:"updatePass",
					username:username,
					password:password,
					oldPass:oldPws
				},
				dataType:"json",
 beforeSend:function(){//交互时状态
  
  },
				success:function(data){
				if(data.flag)
				{
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