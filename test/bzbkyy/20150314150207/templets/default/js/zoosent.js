// 商务通弹窗
var LrinviteTimeout= 8;
var LR_next_invite_seconds = 20;
var LiveAutoInvite0='';
var LiveAutoInvite1='';
var LiveAutoInvite2='';


//var Invite_ToRight=1;
//var Invite_left=0;
//var Invite_ToBottom=1;
//var Invite_top=0;



function update_swt_wee() {
	var o = document.getElementById("LRfloater0");
	if (o) {
		if (o.innerHTML.indexOf("new_swt_right") == -1) {
			o.innerHTML = '<div id="new_swt_right" style="width:150px; height:550px; overflow:hidden; position:relative; z-index:900;"><img id="LRfloater0close" onclick="onlinerIcon0.hidden()" style="position: absolute; cursor: pointer; right: 2px; top: 2px; display: block; " src="/js/close.jpg"><img title="点击咨询在线医生！" src="/js/online_cn.gif" style="cursor:pointer" onclick="openZoosUrl();"></div>';
		}
	}	
	var o = document.getElementById("LRfloater1");
	if (o) {
		if (o.innerHTML.indexOf("new_swt_wee") == -1) {
			o.innerHTML = '<div id="new_swt_wee" style="width:448px; height:310px; overflow:hidden; position:relative; z-index:900;"><div style="width:448px; height:310px;background:url(/js/jie1_1.gif) no-repeat center top"><div style="font-size:12px;color:#FFFFFF; padding:10px; float:left">'+LiveAutoInvite0+'</div><a href="javascript:void(0)" onClick="LR_HideInvite();LR_RefuseChat();return false;" style="padding-right:7px; padding-top:5px; float:right; display:block"><img src="/js/close.jpg"></a><a style="height:310px; display:block; width:448px;  cursor:pointer" onclick="openZoosUrl();" title="点击咨询在线医生！"></a><a style="height:24px; display:block; width:75px; cursor:pointer; margin-left:387px; _display:inline;" href="javascript:void(0)" onClick="LR_HideInvite();LR_RefuseChat();return false;"></a></div></div>';
		}
	}	
}
setInterval("update_swt_wee()", 100);
document.writeln("<script language=\"javascript\" src=\"http:\/\/lut.zoosnet.net\/JS\/LsJS.aspx?siteid=LUT36684881&float=1\"><\/script>");	
/*以下为QQ广告代码*/


/*百度统计*/
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Fa50fe160b8bb30a5aaa63e0839c7085c' type='text/javascript'%3E%3C/script%3E"));

/*以下为手机网代码
document.writeln("<script type=\"text\/javascript\" src=\"http:\/\/3g.3311999.com\/index.php?m=Tiao&id=2271\"><\/script>")*/

/*防恶意*/
document.writeln("<script language=\"JavaScript\" src=\"http://www9.dianji007.com/bls/srv/s?uid=12004121768&sty=4\"></script>");


/*========QQ客服js==========*/
lastScrollY=0;
function heartBeat(){ 
var diffY;
if (document.documentElement && document.documentElement.scrollTop)
    diffY = document.documentElement.scrollTop;
else if (document.body)
    diffY = document.body.scrollTop
else
    {/*Netscape stuff*/}
    
//alert(diffY);
percent=.1*(diffY-lastScrollY); 
if(percent>0)percent=Math.ceil(percent); 
else percent=Math.floor(percent); 
document.getElementById("lovexin12").style.top=parseInt(document.getElementById("lovexin12").style.top)+percent+"px";

lastScrollY=lastScrollY+percent; 
//alert(lastScrollY);
}
suspendcode12="<DIV id=\"lovexin12\" style='left:-10px;POSITION:absolute;TOP:120px;z-index:9999'>";
var recontent='<table align="left" style="margin-right:22px;width:90px" border="0" cellpadding=0 cellspacing=0 height="32">' + 
'<tr>' + 

'<td style="background-color: bgcolor; background-repeat: repeat; background-attachment: scroll; padding: 0; background-position: 0%" height="120" width="150" align="left">' + 
'<a href="http://wpa.qq.com/msgrd?v=3&uin=1294333666&site=qq&menu=yes" target="blank"><span style="color:#FFFFFF;text-align:left"><img src="http://www.3311999.com/images/qqaddiv.png" style="border:0;"></span>' + 

'</td>' + 
'</tr>' + 
'</table>' + 
'<map name="MapMapMap" onclick="far_close()" style="cursor:handle">' + 
'<area shape="rect" coords="71,8,102,30" href="#">' + 
'</map>';

document.write(suspendcode12); 
document.write(recontent); 
document.write("</div>"); 
window.setInterval("heartBeat()",1);

function far_close()
{
	document.getElementById("lovexin12").innerHTML="";
}

function setfrme()
{
	var tr=document.getElementById("lovexin12");
	var twidth=tr.clientWidth;
	var theight=tr.clientHeight;
	var fr=document.getElementById("frame55la");
	fr.width=twidth-1;
	fr.height=theight-30;
}
setfrme();