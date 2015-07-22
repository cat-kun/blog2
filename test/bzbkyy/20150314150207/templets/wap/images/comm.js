// JavaScript Document
$(function(){
	/*设置新闻第1、3条显示红色*/
	$(".news_list a:eq(0),.news_list a:eq(3)").css("color","#f00");	
	
	/*默认隐藏浏览器地址栏*/
	setTimeout(function() {  
            window.scrollTo(0, 1)
    }, 0);    
	/*挂号下拉块*/
	var Btn = $(".OnlineBtn span");
	var Btn_top = Btn.offset().top;
	$(".Qlist").css("height",window.innerHeight-38);
	$(window).scroll(function(){
		if ($(window).scrollTop() >= Btn_top){
		$(".OnlineBtn").css({"position":"fixed","top":"0"});}
		else{
		$(".OnlineBtn").css({"position":"absolute","top":"202px"});
		}
	})
	Btn.click(function(){
		$(".Qlist").slideDown();
		$(".cont").css("display","none");
		window_scrolltop = $(window).scrollTop();
		window.onload=function(){  
                if(document.documentElement.scrollHeight <= document.documentElement.clientHeight) {  
                    bodyTag = document.getElementsByTagName('body')[0];  
                    bodyTag.style.height = document.documentElement.clientWidth / screen.width * screen.height + 'px';  
                }  
                setTimeout(function() {  
                    window.scrollTo(0, 50)  
                }, 0);  
            };  
	});
	$(".gobackbtn").click(function(){
		$(".cont").css("display","block");
		window.scrollTo(0, window_scrolltop);
		$(".Qlist").slideUp();		
	}); 
	
	/*检查聚焦框*/
	var ad = $(".ad68");
	var e = ad.offset();
	$("body").append("<div class='adborder'></div>");
	$(".adborder").css({
		"width":ad.width(),
		"height":ad.height()-3,
		"position":"absolute",
		"border":"2px solid #f00",
		"left":e.left,
		"top":e.top}).fadeOut("fast").
		fadeIn("fast").
		fadeOut("fast").
		fadeIn("fast").
		fadeOut("fast");

        /*统计*/
        function showHint(pos)
	{
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	  var pre_url = document.referrer;
	  xmlhttp.open("GET",""+pre_url+"&pos="+pos,true);
	  xmlhttp.send();
	}	
	
	$(".OnlineBtn span").click(function(){
		showHint("topgh");
	});	

	$(".OnlineBtn a").click(function(){
		showHint("topsq");
	});

	$(".pf a:eq(0)").click(function(){
		showHint("bottomtel");
	});

        $(".pf a:eq(1)").click(function(){
		showHint("bottomsq");
	});

        $("#best3g_swt").click(function(){
		showHint("rightsq");
	});
})