/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-09-14 22:47:30
 * @version $Id$
 */


$(function(){

	// 全部分类-iscroll
	var myScroll1,myScroll2;
	myScroll1 = new IScroll('#J_sortList .isScroll', {click: true });
	// myScroll2 = new IScroll('.product-wrapper', {click: true });
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);



	var _width = document.documentElement.clientWidth; // 浏览器宽度


	// 头部导航-综合排序
	var $J_sort = $('#J_sort');
	$J_sort.find('.sub-sort').css('width',_width); 		// 初始化头部导航-综合排序二级导航宽度

	$J_sort.on('click',function(){
		var _this = $(this);
		if(_this.hasClass('show')){
			_this.find('.sub-sort').stop().animate({height:0},200).end()
				.removeClass('show');
		}else{
			_this.find('.sub-sort').stop().animate({height:92},200).end()
				.addClass('show')
		}
	});

	// 头部导航-所有列表
	var $J_all = $('#J_all'),
		$J_sortList = $('#J_sortList'); 	// 列表
	$J_sortList.css({'left':-_width,'opacity':1});
	// 列表移出
	$J_all.on('click',function(){
		$J_sortList.animate({'left':0},300);
	});
	// 列表移走
	$J_sortList.find('.cancel').on('click',function(){
		$J_sortList.animate({'left':-_width},300);
	});

});