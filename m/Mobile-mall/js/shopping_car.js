/**
 * 
 * @authors 银狐 (626269256@qq.com)
 * @date    2015-09-04 10:49:01
 * @version v1.0
 */
// 增加
$('.increase').on('click',function (){
	var $quantity = parseInt($(this).prev().val());
	$quantity++;
	$(this).prev().val($quantity);
});
// 减少
$('.decrease').on('click',function (){
	var $quantity = parseInt($(this).next().val());
	if($quantity == 1){
		$quantity = 1;
	}else{
		$quantity--;
		$(this).next().val($quantity);
	}
});

$('.del').on('click',function (){
	var checkbox = $('.checkbox').prop('checked');
	if(checkbox){
		checkbox.parents('.productBox');
	}else{
		alert('no')
	}
});

// 全选
$('#all').on('click',function (){
	if($(this).prop('checked')){
		$('.checkbox').prop('checked',true);
	}else{
		$('.checkbox').prop('checked',false);
	}
});

// 判断所有的宝贝是否被选中
var nowCheckLen = $('.pro-check:checked').length;

var onOff = true;
$('.shopping-menu').on('click',function (){
	if(onOff){
		$(this).find('.shopping-menuIcon').css({'background-position': '-107px -113px'});
		$(this).siblings('.menuList').show();
	}else{
		$(this).find('.shopping-menuIcon').css({'background-position': '-66px -112px'});
		$(this).siblings('.menuList').hide();
	}
	onOff = !onOff;
});