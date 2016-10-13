document.write("<script language='javascript' src='js/Config.js'></script>");

window.onload = function(){
document.getElementById("username").innerHTML=getCookie("username");
};
function logout()
	{
		var se=confirm("确认退出登录？");
		if(se==true)
		{
		   $.ajax({
  				url:serverPath + "/weChatService/LogionOutServlet",
				type:"post",
				dataType:"json",
 beforeSend:function(){//交互时状态
  
  },
				success:function(data){
				if(data.flag)
				{
			     	window.location.href="login.jsp";
				}
				else
				{
				window.alert(data.msg);
				}
				}
  			});
			  
		}
	}
	
var lists;
var current_page = 0;
var page_coun = 0;
var start_pages = 0;
var end_pages = 0;
var onePage_count = 10;
//更新index样式
function updateBgColor(index)
{
	
	for(var i = 0 ; i < document.getElementsByTagName('a') ; i ++)
	{
		var a = document.getElementById(i);
		a.style.backgroundColor = 'white'
	}
//	var a = document.getElementById(index);
//	a.style.backgroundColor = 'indianred'
	
}
//页面标签点击事件
function selectAction(index)
{
	window.updateBgColor(index);
	current_page = index;
	window.updataUI(lists);
	window.creatPages(lists);
}
//创建页面数
function creatPages(dataSource){
	
	page_coun = dataSource.length / 5;
	
	page_coun = Math.floor(page_coun);
	if(dataSource.length % 5 > 0)
	{
		page_coun += 1;
	}
	var temple_count = page_coun;
	
	var page_area = document.getElementById('page-count');
	
	page_area.innerHTML ='';
	
	var start_a = document.getElementsByClassName('start_a')[0];
	var end_a = document.getElementsByClassName('theend')[0];
	
	
	start_pages = current_page;
	
	
	if(page_coun - start_pages > onePage_count)
	{
		end_a.style.display = 'inline-block';
		var sub = page_coun - current_page > onePage_count?onePage_count:page_coun;
		end_pages = sub + current_page;
	}else
	{
		start_pages = (page_coun - onePage_count)<0?0:(page_coun - onePage_count);
		end_pages = page_coun;
		end_a.style.display = 'none';
	}
	
	if(page_coun > onePage_count && current_page != 0)
	{
		start_a.style.display = 'inline-block';
	}else
	{
		start_a.style.display = 'none';
	}

	for(var i = start_pages ; i < end_pages; i ++)
	{
		var a = document.createElement('a');
		a.className = 'pages';
		var parm = "javascript:selectAction("+i+");";
		a.setAttribute("href",parm);
		a.id = i;
		a.innerText = i + 1;
		page_area.appendChild(a);
		if(i == current_page)
		{
			a.style.backgroundColor = 'indianred'
			
		}
		
	}
}
//创新列表
function updataUI(arr_list){
			var left = document.getElementById('leftMenu');
			var count = current_page * 5;
			if(arr_list.length <= count + 5)	
			{
				current_count = arr_list.length;
			}else{
				current_count = count + 5;
			}
			left.innerHTML='';
					
					for(var i = count ; i < current_count; i ++)
					
					{
					  		//创建最外层的celldiv
					  	var cell_div =	document.createElement('div');
					  	cell_div.className = 'cell';
					  	
					  		//创建checkBOX
					  	var check_div =	document.createElement('div');
					  	check_div.className = 'check-box';	
					  		
					  		//创建单选框
					  	var input_box = document.createElement('input');
					  	input_box.type = "checkbox";
					  	input_box.onclick = "";
					  	
					  	//创建最外层的a点击链接
					  	var a = document.createElement('a');
					  	a.onclick = "";
					  	
					  	//创建内容div
					  	var content_div = document.createElement('div');
					  	content_div.style.display = 'inline-block';
					  	content_div.style.width = '90%';
					  	
					  	//创建头像div
					  	var head_div = document.createElement('div');
					  	head_div.className = 'head-image';
					  	
					  	//创建头像图片
					  	var head_image = document.createElement('img');
					  	head_image.src = arr_list[i].pictureLink;
	//				  	head_image.className = ''
						head_div.appendChild(head_image);//追加图片
						
						
					  	//创建名字和电话div
					  	var name_tel = document.createElement('div');
					  	name_tel.className = 'name-number';
					  	//创建名字p
					  	var name_p = document.createElement('p');
					  	name_p.innerText = arr_list[i].user_name;
					  	name_tel.appendChild(name_p);
					  	//创建电话p
					  	var tel_p = document.createElement('p');
					  	tel_p.innerText = arr_list[i].phone_no;
					  	name_tel.appendChild(tel_p);
					  	//创建状态div
					  	var statu_div = document.createElement('div');
					  	statu_div.className ='statu';
					  	//创建状态图片	
					  	var statu_image = document.createElement('img');
//					  	statu_image.src = 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1649645500,2088203990&fm=80';
					  	statu_div.appendChild(statu_image);
					  	//创建状态蚊子
					  	var statu_p = document.createElement('p');
					  	statu_p.style.marginTop = '5px';
					  	statu_p.style.fontSize = '15px';
					  	
					  	
					  	if(arr_list[i].status==1)
						{
							statu_p.style.color = 'green';
					  		statu_p.innerText = '已通过';
					  		statu_image.src = 'img/right.jpg';
						}else if(arr_list[i].status==0)
						{
							statu_p.style.color = 'darkorange';
					  		statu_p.innerText = '待审核';
					  		statu_image.src = 'img/error.jpg';
						}else if(arr_list[i].status==2)
						{
							statu_p.style.color = 'red';
					  		statu_p.innerText = '审核不通过';
					  		statu_image.src = 'img/error.jpg';
			
						}
					  	
//					  	if( arr_list[i].status==1)
//					  	{
//					  		statu_p.style.color = 'green';
//					  		statu_p.innerText = '已通过';
//					  		statu_image.src = 'img/right.jpg';
//					  	}else
//					  	{
//					  		statu_p.style.color = 'red';
//					  		statu_p.innerText = '待审核';
//					  		statu_image.src = 'img/error.jpg';
//					  	}
					  	statu_div.appendChild(statu_p);
					  	
					  	
					  	//创建地址和时间div
					  	var adress_div = document.createElement('div');
					  	adress_div.className ='adress-time';
					  	adress_div.style.marginBottom = '10px';
					  	//创建地址span
					  	var address_span = document.createElement('span');
					  	address_span.innerText = arr_list[i].provincial + arr_list[i].city;
					  	address_span.style.fontSize ='14px';
					  	adress_div.appendChild(address_span);
					  	//创建时间span
					  		
					  	var time_span = document.createElement('span');
					  	time_span.innerText = arr_list[i].creation_date;
					  	time_span.style.marginLeft = '10px';
					  	time_span.style.fontSize ='14px';
					  	adress_div.appendChild(time_span);
					  	
					  	//创建最后的分割线
					  	var line = document.createElement('div');
					  	line.className = 'line';				  	
					  	
					 	cell_div.appendChild(check_div);
					  	cell_div.appendChild(a);
					  	check_div.appendChild(input_box);
					  	a.appendChild(content_div);
					  	
					  	var parm = "javascript:cell_taped("+i+");";
					  	a.setAttribute("href",parm);
					  	
					  	content_div.appendChild(head_div);//头像
					  	content_div.appendChild(name_tel);//名字和电话
					  	content_div.appendChild(statu_div);//状态
					  	content_div.appendChild(adress_div);//地址和时间
					  	
					  	left.appendChild(cell_div);
					  	left.appendChild(line);
					}
					
				//默认调用第一个cell的点击事件
				if(arr_list.length > 0)
				{
					window.cell_taped(0);
				}

			var search_a = document.getElementsByClassName('search_a')[0];
			var output_a = document.getElementsByClassName('output_a')[0];	
			var method_search = "javascript:searchAction();";
			search_a.setAttribute('href',method_search);
			var method_output = "javascript:outputAction();";
			output_a.setAttribute('href',method_output);
			var searche_input = document.getElementsByClassName('search_input')[0];
			searche_input.style.height = '25px';
			searche_input.style.paddingLeft ='10px'
			searche_input.style.border = 'none';
			searche_input.style.borderRadius ='3px';
}

//编辑提交
function updateMessage(phone_imei_p,series_no_p,status_p,user_name_p,weChat_p,phone_no_p,pin_no_p,remark_p)
{
	
	//网络事件
			$.ajax({
  				url:serverPath + "/weChatService/PolicyServlet",
				type:"post",
				data:{
					
					flag:'updatePolicy',
					//电话号码
					phone_no:phone_no_p,
					//用户姓名
					user_name :user_name_p,
					//身份证
					pin_no  :pin_no_p,
					//imei号
					phone_imei :phone_imei_p,
					//序列号［不能修改］
					series_no :series_no_p,
					//微信号
					weChat :weChat_p,
					//状态
					status :status_p,
					//备注
					remark:remark_p
				},
				dataType:"json",
 beforeSend:function(){//交互时状态
  
  },
				success:function(data){
				if(data.flag)
				{
					console.log(data);
					alert('信息更新上传成功');
//					lists = data.result;
//					window.updataUI(lists);
//				  	window.creatPages(lists);
				  
				}
				else
				{
				alert(data.msg);
				}
			
				}
  			});
	
}


//进入程序后发起网络加载
window.onload = function(){

	//网络事件
			$.ajax({
  				url:serverPath + "/weChatService/PolicyServlet",
				type:"post",
				data:{
					flag:'getPolicyList'
				},
				dataType:"json",
 beforeSend:function(){//交互时状态
  
  },
				success:function(data){
				if(data.flag)
				{
					lists = data.result;
					console.log(lists);
					window.updataUI(lists);
				  	window.creatPages(lists);
				  
				}
				else
				{
				alert(data.msg);
				}
			
				}
  			});
  			
  			
			//	初始化编辑按钮事件
	var editor_button = document.getElementById('editor');
	var editorAction = "javascript:editorAction();";
	editor_button.setAttribute('href',editorAction);

		
}
//编辑按钮方法
function editorAction()
{
	var remark_div = document.getElementById('remark-div');//备注文本区域
	var input_imei = document.getElementById('imei_no');//imei号
	var input_order_no = document.getElementById('order_no');//保单号
	var input_select_order = document.getElementById('select_order');//选择状态
	var input_input_name = document.getElementById('input_name');//真实姓名
	var input_input_wx = document.getElementById('input_wx');//微信号
	var input_input_pin_id = document.getElementById('input_pin_id');//身份证号
	var input_input_phone = document.getElementById('input_phone');//电话号码
	
	
	var imeiNumber = document.getElementsByClassName('IMEI')[0];//IMEI显示
	var order_no = document.getElementsByClassName('number')[0];
	var status_name = document.getElementsByClassName('status-name')[0];//IMEI显示
	var true_name = document.getElementsByClassName('true-name')[0];//IMEI显示
	var wx_name = document.getElementsByClassName('wx-name')[0];//IMEI显示
	var ID_number = document.getElementsByClassName('ID-number')[0];//IMEI显示
	var tel_number = document.getElementsByClassName('tel-number')[0];//IMEI显示
	
	
	
	
	
	
	var tip = document.getElementById('editor');
	
	
	if(remark_div.style.display == 'none')
	{
	
		remark_div.style.display = 'block';
		tip.innerText = '完  成  并  提  交';
		input_imei.style.display = 'inline-block';
		input_order_no.style.display = 'none';
		input_select_order.style.display = 'inline-block';
		input_input_name.style.display = 'inline-block';
		input_input_wx.style.display = 'inline-block';
		input_input_pin_id.style.display = 'inline-block';
		input_input_phone.style.display = 'inline-block';
		
		imeiNumber.style.display ='none';
		order_no.style.display = 'inline-block';
		status_name.style.display ='none';
		true_name.style.display ='none';
		wx_name.style.display ='none';
		ID_number.style.display ='none';
		tel_number.style.display ='none';
		
		 input_imei.value = imeiNumber.innerText;
//		order_no.innerText = input_order_no.value;
		var staut_no = 0;
		if(status_name.innerText == '待审核')
		{
			staut_no = 0;
		}else if(status_name.innerText == '已审核'){
			staut_no = 1;
		}else
		{
			staut_no = 2;
		}
		input_select_order.value = staut_no;
		input_input_name.value = true_name.innerText;
		input_input_wx.value = wx_name.innerText ;
		input_input_pin_id.value = ID_number.innerText;
		input_input_phone.value = tel_number.innerText;
		
		
		
		
	}else
	{
		remark_div.style.display = 'none';
		input_imei.style.display = 'none';
		input_order_no.style.display = 'none';
		input_select_order.style.display = 'none';
		input_input_name.style.display = 'none';
		input_input_wx.style.display = 'none';
		input_input_pin_id.style.display = 'none';
		input_input_phone.style.display = 'none';
		
		imeiNumber.style.display ='inline-block';
		order_no.style.display = 'inline-block';
		status_name.style.display ='inline-block';
		true_name.style.display ='inline-block';
		wx_name.style.display ='inline-block';
		ID_number.style.display ='inline-block';
		tel_number.style.display ='inline-block';
		
		imeiNumber.innerText = input_imei.value;
//		order_no.innerText = input_order_no.value;
		status_name.innerText = input_select_order.value;
		true_name.innerText = input_input_name.value;
		wx_name.innerText = input_input_wx.value;
		ID_number.innerText = input_input_pin_id.value;
		tel_number.innerText = input_input_phone.value;
		var staut_no = 0;
		if(input_select_order.value == '待审核')
		{
			staut_no = 0;
		}else if(input_select_order.value == '已审核'){
			staut_no = 1;
		}else
		{
			staut_no = 2;
		}
		var text = document.getElementById('remark-message');
		window.updateMessage(input_imei.value,order_no.innerText,staut_no,input_input_name.value,input_input_wx.value,input_input_phone.value,input_input_pin_id.value,text.value);
		tip.innerText = '开  始  编  辑';
	}
	
	
	
}
//单个cell数据点击事件
function cell_taped(index){
	var model = lists[index];
	//获取详情的所有标签
	
	var IMEI = document.getElementsByClassName('IMEI')[0];//IMEI号
	
	var number = document.getElementsByClassName('number')[0];//保修序列号
	
	var status_name = document.getElementsByClassName('status-name')[0];//保单状态
	
	var true_name = document.getElementsByClassName('true-name')[0];//姓名
	
	var wx_name = document.getElementsByClassName('wx-name')[0];//微信
	
	var ID_number = document.getElementsByClassName('ID-number')[0];//身份证
	
	var tel_number = document.getElementsByClassName('tel-number')[0];//电话号码
	
	var phone_image = document.getElementsByClassName('phone-image')[0];//保单图片
	
	IMEI.innerText = model.phone_imei;
	number.innerText = model.series_no;
	if(model.status==1)
		{
			status_name.style.color = 'green';
			status_name.innerText = '已审核';
		}else if(model.status==0)
		{
			status_name.style.color = 'darkorange';
			status_name.innerText = '待审核';
		}else if(model.status==2)
		{
			status_name.style.color = 'red';
			status_name.innerText = '审核不通过';
		}
	true_name.innerText = model.user_name;
	wx_name.innerText = model.weChat;
	ID_number.innerText =model.pin_no;
	tel_number.innerText = model.phone_no;
	phone_image.src = model.pictureLink;
	
	
	var remark_div = document.getElementById('remark-div');//备注文本区域
	var input_imei = document.getElementById('imei_no');//imei号
	var input_order_no = document.getElementById('order_no');//保单号
	var input_select_order = document.getElementById('select_order');//选择状态
	var input_input_name = document.getElementById('input_name');//真实姓名
	var input_input_wx = document.getElementById('input_wx');//微信号
	var input_input_pin_id = document.getElementById('input_pin_id');//身份证号
	var input_input_phone = document.getElementById('input_phone');//电话号码
	
	remark_div.style.display = 'none';
	input_imei.style.display = 'none';
	input_order_no.style.display = 'none';
	input_select_order.style.display = 'none';
	input_input_name.style.display = 'none';
	input_input_wx.style.display = 'none';
	input_input_pin_id.style.display = 'none';
	input_input_phone.style.display = 'none';
	
	var imeiNumber = document.getElementsByClassName('IMEI')[0];//IMEI显示
	var order_no = document.getElementsByClassName('number')[0];
	var status_name = document.getElementsByClassName('status-name')[0];//IMEI显示
	var true_name = document.getElementsByClassName('true-name')[0];//IMEI显示
	var wx_name = document.getElementsByClassName('wx-name')[0];//IMEI显示
	var ID_number = document.getElementsByClassName('ID-number')[0];//IMEI显示
	var tel_number = document.getElementsByClassName('tel-number')[0];//IMEI显示
	imeiNumber.style.display = 'inline-block';
	order_no.style.display = 'inline-block';
	status_name.style.display = 'inline-block';
	true_name.style.display = 'inline-block';
	wx_name.style.display = 'inline-block';
	ID_number.style.display = 'inline-block';
	tel_number.style.display = 'inline-block';
	
	var tip = document.getElementById('editor');
//	alert(tip);
	tip.innerText = '开  始  编  辑';
}

//上一页
function preAction()
{
	if (current_page==0){
		return;
	}else
	{
		current_page --;
		window.selectAction(current_page);
		
	}
	
	window.creatPages(lists);
}
//下一页
function nextAction()
{
	if(current_page < page_coun - 1)
	{
		current_page ++;
		window.selectAction(current_page);
	}else
	{
		return;
	}
	window.creatPages(lists);
	
}
//清空
function clearAction()
{
	window.searchAction();
	
}
//搜索
function searchAction(){
	
	var searche_input = document.getElementsByClassName('search_input')[0];//当前的搜索拦
	var condition = searche_input.value;
	searche_input.clear = clearAction;
	if(condition == '')
	{
		condition = 'null';
	}
	//发起网络搜索
	
	$.ajax({
  				url:serverPath + "/weChatService/PolicyServlet",
				type:"post",
				data:{
					flag:'getPolicyList',
					param:condition
				},
				dataType:"json",
 beforeSend:function(){//交互时状态
  
  },
				success:function(data){
				if(data.flag)
				{
					lists = data.result;
					console.log(lists);
					window.updataUI(lists);
				  	window.creatPages(lists);
				  
				}
				else
				{
				alert(data.msg);
				}
			
				}
  			});
	
	
	
}
//导出关键内容
function outputAction(){
   var searche_input = document.getElementsByClassName('search_input')[0];//当前的搜索拦
	var condition = searche_input.value;
	searche_input.clear = clearAction;
	if(condition == '')
	{
		condition = 'null';
	}
	location.href = serverPath + "/weChatService/ExportPolicyServlet?param=" + condition;
	
}
