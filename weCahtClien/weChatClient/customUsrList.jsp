<!--<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>-->
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="css/style.css" rel="stylesheet" type="text/css" />
        <link href="css/mainBackgroud.css" rel="stylesheet">
        <title>用户列表</title>
    </head>
    <body style="background-color:#1c77ac; background-image:url(img/light.png); background-repeat:no-repeat; background-position:center top; overflow:hidden;">
   <!--背景DIV-->
   <div id="mainBody">
      <div id="cloud1" class="cloud"></div>
      <div id="cloud2" class="cloud"></div>
    </div>
    <!--topBar DIV-->
    <div style="background:url(img/topbg.gif) repeat-x;background-position:center top; overflow:hidden;">
    <div>
    <a href="usrMain.jsp" target="_parent"><img src="img/logo.png" title="系统首页" /></a>
    </div>
	</div>
    	<table class="tablelist">
    	<thead>
    	<tr>
        <th>用户编号</th>
        <th>用户名</th>
        <th>微信名称</th>
        <th>微信号</th>
        <th>手机号码</th>
        <th>地区</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>20130908</td>
        <td>郭燕平</td>
        <td>admin</td>
        <td>6767666666</td>
        <td>18787878787</td>
        <td>广东深圳福田</td>
        </tr> 
        <tr>
        <td>20130908</td>
        <td>郭燕平</td>
        <td>admin</td>
        <td>6767666666</td>
        <td>18787878787</td>
        <td>广东深圳福田</td>
        </tr>    
        <tr>
        <td>20130908</td>
        <td>郭燕平</td>
        <td>admin</td>
        <td>6767666666</td>
        <td>18787878787</td>
        <td>广东深圳福田</td>
        </tr>    
        </tbody>
    </table>
    
   
    <div class="pagin">
    	<!--<div class="message">共<i class="blue">1256</i>条记录，当前显示第&nbsp;
    		<i class="blue">2&nbsp;</i>页</div>-->
        <ul class="paginList">
        <li class="paginItem"><a href="javascript:;"><span class="pagepre"></span></a></li>
        <li class="paginItem"><a href="javascript:;">1</a></li>
        <li class="paginItem current"><a href="javascript:;">2</a></li>
        <li class="paginItem"><a href="javascript:;">3</a></li>
        <li class="paginItem"><a href="javascript:;">4</a></li>
        <li class="paginItem"><a href="javascript:;">5</a></li>
        <li class="paginItem more"><a href="javascript:;">...</a></li>
        <li class="paginItem"><a href="javascript:;">10</a></li>
        <li class="paginItem"><a href="javascript:;">
        	<span class="pagenxt"></span></a></li>
        </ul>
    </div>
 	</body>
</html>