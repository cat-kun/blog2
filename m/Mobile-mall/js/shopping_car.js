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