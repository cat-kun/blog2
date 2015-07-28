(function (){
	// iscroll
	/*var myScroll;
	function loaded () {
		myScroll = new IScroll('#wrapper', { mouseWheel: true });
	}
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	loaded();
	myScroll.refresh();*/
	
	// 编辑
	var $item_checkbox = $('.item-checkBox'),	// 获取店铺的复选按钮
		$footer = $('.footer'),
		onOff = true;							// 开关
	$('.edit-txt').on('touchend',function (){
		$('.main li').css('transform','translateX(0)');		//让所有的li回到初始位置
		if(onOff){
			$item_checkbox.show();
			setTimeout(function (){
				$item_checkbox.css('transform','translateX(0)');
//				$footer.css('transform', 'translateY(0)');
			},30);
			$('.main').css('margin-bottom','60px');
			$('#wrapper').css('bottom','60px');
			$footer.css('transform','translateY(0)');
			$(this).text('完成');
			onOff = false;
		}else{
			$item_checkbox.css('transform','translateX(-30px)');
//			$footer.css('transform','translateY(60px)');
			setTimeout(function (){
				$item_checkbox.hide();
			},30);
			$('.main').css('margin-bottom',0);
			$('#wrapper').css('bottom',0);
			$footer.css('transform','translateY(60px)');
			$(this).text('编辑');
			onOff = true;
			$('.checkbox').prop('checked',false);
		}
	});

	// 全选
	var $selAll = $('#checkAll');
	$selAll.on('change',function (){
		$('.item').prop('checked', this.checked);
	});

	// 判断所有店铺是否全部选中
	$('.item').on('change',function (){
		var $check_len = $('.item').length,
		$checked_len = $('.item:checked').length;

		if($check_len==$checked_len){
			$selAll.prop('checked', true);
		}else{
			$selAll.prop('checked', false);
		}
	});



	// 取消按钮
	$('.cancelBtn').on('touchend',function (){
		$('.edit-txt').text('编辑');
		setTimeout(function (){
			$item_checkbox.hide();
		},60);
		$item_checkbox.css('transform','translateX(-30px)');
		$footer.css('transform','translateY(60px)');
			$('.main').css('margin-bottom',0);
		$('.checkbox').prop('checked',false);
		onOff = true;
	});

	// 删除按钮
	$('.delBtn').on('click',function (){
		//$('.item:checked').parents('li').fadeOut(200,function(){$(this).remove();});
		$('.item:checked').parents('li').remove();
		//console.log($('.main li').length);
		if( $('.main li').length == 0 ){
			$('.main p').show();
			$('.edit-txt').text('编辑').css('disabled',true);
			$footer.css('transform','translateY(60px)');
		}
	});

	// 取消收藏
	/*$('.cancel').on('touchstart',function (){
		$(this).parents('li').remove();
	});*/

	// li 左滑右滑
	/*var $aLi = $('.main li');

	$aLi.on("touchstart", function(e) {
		
		startX = e.originalEvent.changedTouches[0].pageX;
    	startY = e.originalEvent.changedTouches[0].pageY;
	});

	$aLi.on("touchmove", function(e) {
		
		moveEndX = e.originalEvent.changedTouches[0].pageX;
		moveEndY = e.originalEvent.changedTouches[0].pageY;
		X = moveEndX - startX;
		Y = moveEndY - startY;
		
		$item_checkbox.css('transform','translateX(-1.525rem)');
		$footer.css('transform','translateY(60px)');
			$('.main').css('margin-bottom',0);
		setTimeout(function (){
			$item_checkbox.hide();
		},310);
		
		if(Math.abs(X) > Math.abs(Y) && X > 0) {
			//console.log('右滑');
			$(this).css('transform','translateX(0)');
		}else if(Math.abs(X) > Math.abs(Y) && X < 0) {
			console.log('左滑');
			// $(this).siblings('li').find('.cancel').hide();
			$aLi.css('transform','translateX(0)');
			$(this).css('transform','translateX(-4rem)');
			// $(this).find('.cancel').css('opactiy',0);
		}
	});*/

})();