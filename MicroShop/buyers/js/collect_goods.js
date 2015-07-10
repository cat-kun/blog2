(function (){
	/*var myScroll;
	function loaded () {
		myScroll = new IScroll('#wrapper', { mouseWheel: true });
	}
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	loaded();
	myScroll.refresh();*/

	// 收藏商品，我的足迹

	// 头部编辑
	var $oCheck = $('.goods .checkbox'),		// 获取宝贝列表的复选框
		onOff = true;
	$('.edit-txt').on('click',function (){
		if( $(this).text() == '编辑' ){
			$(this).text('完成');
			setFn();
			$('.xz-wrap .goods li:last-of-type').css('margin-bottom', '70px');
		}else{
			$(this).text('编辑');
			resetFn();
			$('.xz-wrap .goods li:last-of-type').css('margin-bottom', 0);
			$('input:checked').prop('checked', false);
		}
		
	});

	$('.del-icon').on('click',function (){
		if(onOff){
			setFn();
			onOff = false;
		}else{
			resetFn();
			$('input:checked').prop('checked', false);
			onOff = true;
		}
	});

	var nowCheckLen = $('.goods .checkbox:checked').length,				// 获取所有宝贝选中的复选框个数
		goodsLen	= $('.goods li').length;
	// 判断是否全选
	function allFn(){
		nowCheckLen == goodsLen ? $('#checkAll').prop('checked',true) : $('#checkAll').prop('checked',false);
	}

	$oCheck.on('click',function (){
		console.log(nowCheckLen);
		allFn();
	});
	$('.goods .checkbox').on('click',function (){
		console.log(nowCheckLen);
		allFn();
	});
	// 底部全选
	$('#checkAll').on('click',function (){
		$oCheck.prop('checked',this.checked);
		
	});

	// 底部取消按钮
	$('.cancelBtn').on('click',function (){
		$('.edit-txt').text('编辑');
		$('.xz-wrap .goods li:last-of-type').css('margin-bottom', 0);
		resetFn();
		$('input:checked').prop('checked', false);
	});
	
	// 底部删除
	$('.delBtn').on('click',function (){
		$('.goods .checkbox:checked').parent().remove();
		$('.edit-txt').text('编辑');
		resetFn();
		$('.xz-wrap .goods li:last-of-type').css('margin-bottom', 0);
		if($('.goods li').length == 0){
			$('.edit-txt').text('编辑');
			$oCheck.show();
			$('.footer').css('transform', 'translateY(60px)');
		}
	});
	function resetFn(){
		$oCheck.hide();
		$('.footer').css('transform', 'translateY(60px)');
		
	}
	function setFn(){
		$oCheck.show();
		$('.footer').css('transform', 'translateY(0)');
	}
})();