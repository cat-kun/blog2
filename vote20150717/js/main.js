/**
 * 投票页面,排行榜所需的js
 * @authors 626269256@qq.com
 * @date    2015-07-18 13:28:11
 * @version 1.0
 */

(function (){

	// 返回
	$('#header .back').on('click',function (){
		history.back();
	});

	// 投票列表交互
	$('.nav a').on('click',function (){
		var $ul = $(this).parent().siblings('.mainCont').find('ul');
		$(this).addClass('current').siblings().removeClass('current');

		$ul.hide();
		$ul.eq( $(this).index() ).show();
	});
})();