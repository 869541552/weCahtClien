
/**
* 自定义alert
* author: http://blog.csdn.net/sunxing007
**/
 
//因为alert有阻塞效果，当一个alert显示的时候，其他的alert都要等待
//所以在window里面放置一个消息队列。
window.msgQueue = [];
//alert开关，表示当前是否有alert显示。
window.alert_on = false;
 
//重写alert函数
window.alert = function(){
    //如果alert('_no_message_')被本函数内部使用
    //所以忽略alert('_no_message_')
    if(arguments[0]!='_no_message_'){
            window.msgQueue[window.msgQueue.length] = arguments[0];
    }
    //如果当前alert正在被调用，则返回
    if(window.alert_on==true){
            return;
    }
    else{
        //如果得不到alert_div,则说明弹出层和遮盖层还没有构建，则构建他们
        if(!document.getElementById('alert_div')){
                var div = document.createElement('div');
                div.id = 'alert_div';
                with(div.style){
                        height = '50px';
                        width = '200px';
                        position = 'absolute';
                        left = '300px';
                        top = '300px';
                        backgroundColor = 'lightyellow';
                        border = 'solid #ccc 1px';
                        zIndex = '1000';
                        display = 'none';
                        margin = '0px';
                        padding = '0px';
                }
                //关闭弹出层函数
                window.closeAlert = function(){
                        document.getElementById('alert_div').style.display = 'none';
                        document.getElementById('alert_mask').style.display = 'none';
                        window.alert_on = false;
                        status = 'queue length: ' + window.msgQueue.length;
                        if(window.msgQueue.length>0){
                            window.alert('_no_message_');
                        }
                }
                div.innerHTML = "<div style='font-size: 9pt;height: 25px; padding: 5px; background-color: dodgerblue; color: #fff;' align='right'><a style='color: #fff;text-decoration: none;' alt='Close' href='#' onclick = 'closeAlert();'>X</a></div><div style='padding: 5px;' id='alert_text_div'></div>"
                var mask = document.createElement('div');
                mask.id='alert_mask';
                with(mask.style){
                        height = document.body.clientHeight;
                        width = document.body.clientWidth;
                        position = 'absolute';
                        left = '0';
                        top = '0';
                        backgroundColor = '#ccc';
                        zIndex = 999;
                        display = 'none';
                        filter = 'alpha(opacity=50)';
                }
                document.body.appendChild(div);
                document.body.appendChild(mask);
        }
        if(window.msgQueue.length>0){
                var div = document.getElementById('alert_div');
                var mask = document.getElementById('alert_mask');
                var txtDiv = document.getElementById('alert_text_div');
                div.style.display = '';
                mask.style.display = '';
                window.alert_on = true;
                //取消息队列第一条显示出来。
                txtDiv.innerText = window.msgQueue.shift();
        }
         
    }
 
}
 