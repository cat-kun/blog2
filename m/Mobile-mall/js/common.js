/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-09-13 15:05:56
 * @version $Id$
 */

// 公用JS

// 悬浮按钮

var onOff = true;
$('.shopping-menu').on('touchstart',function (){
	if(onOff){
		$(this).find('.shopping-menuIcon').css({'background-position': '-107px -113px'});
		$(this).siblings('.menuList').show();
	}else{
		$(this).find('.shopping-menuIcon').css({'background-position': '-66px -112px'});
		$(this).siblings('.menuList').hide();
	}
	onOff = !onOff;
});

// 综合排序下拉菜单
$('.active').on('click',function (){
	console.log($(this).parent().next());
	$(this).parent().next().show();
});

// 分类弹出列表
var onOff = true;
$('.menu').on('click',function (){
	if(onOff){
		$('.allBox').css('transform', 'translateX(0)');
	}else{
		$('.allBox').css('transform', 'translateX(-7.8rem)');
	}
	onOff = !onOff;
});