// JavaScript Document
function createMobileChatButton(){
  var css = {};
  var classes = [];
  var strcss = ''
    css = {
      position: 'fixed',
      width: '100%',
      bottom: '0px',
      height: '38px'
    }
var startimea=23;  //ҹ������ͨ�Ŀ�ʼʱ��
var stoptimea=6; //ҹ������ͨ�Ľ���ʱ��
dateobjecta=new Date();
nowdatea=dateobjecta.getHours();
var timeclassa=0;
if(stoptimea>startimea)
{
	if(nowdatea>=startimea && nowdatea<stoptimea)
	{
		timeclassa=1;
	}
	else
	{
		timeclassa=2;
	}
}
else
{	
	if(nowdatea>=startimea || nowdatea<stoptimea)
	{
		timeclassa=1;
	}
	else
	{
		timeclassa=2;
	}
}


if(timeclassa==2)
{	
var startimeb=6;  //�峿����ͨ�Ŀ�ʼʱ��
var stoptimeb=7; //�峿����ͨ�Ľ���ʱ��
dateobjecta=new Date();
nowdatea=dateobjecta.getHours();
var timeclassb=0;
if(stoptimeb>startimeb)
{
	if(nowdatea>=startimeb && nowdatea<stoptimeb)
	{
		timeclassb=1;
	}
	else
	{
		timeclassb=2;
	}
}
else
{	
	if(nowdatea>=startimeb || nowdatea<stoptimeb)
	{
		timeclassb=1;
	}
	else
	{
		timeclassb=2;
	}
}
if(timeclassb==1)
{
	var $btn = $('<div style="width:100%; height:38px;opacity:0.9;-moz-opacity:0.9;filter:alpha(opacity=90); background:url(/templets/temp/images/qcgh_bg.jpg) repeat-x;text-align:center;line-height:38px;font-size:16px;color:#fff;">���ݺ췿�Ӹ���ҽԺ<a href="http://wap.zjfubao.com/guahao/"><img src="/templets/temp/images/qcswr.jpg" style="vertical-align:middle;margin-left:10px;"></a></div>').css(css);
}else
{
	    var $btn = $('<div class="pf"><a href="tel:051389069999" class="tel"><img src="/templets/wap/images/tel.png" /></a><a href="tel:051389069999" class="tel"><img src="/templets/wap/images/tel.png" /></a></div>').css(css);
}


}else
{



var $btn = $('<div style="width:100%; height:38px;opacity:0.9;-moz-opacity:0.9;filter:alpha(opacity=90); background:url(/templets/wap/images/yjgh_bg.jpg) repeat-x;text-align:center;line-height:38px;font-size:16px;color:#fff;">���ݺ췿�Ӹ���ҽԺ<a href="http://wap.zjfubao.com/guahao/"><img src="/templets/temp/images/yjgh_btn.jpg" style="vertical-align:middle;margin-left:10px;"></a></div>').css(css);

}


    return $btn;
}

$(function(){
  createMobileChatButton().appendTo('body')
});