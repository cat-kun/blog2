(function (){
	// 内容页
	/*$('.panic-buying')[0].addEventListener('touchend',buyingShow,false);
	$('#buyingShow a')[0].addEventListener('touchend',buyingHide,false);*/

	function buyingShow(){
		$('#mask,#buyingShow').show();
	}
	function buyingHide(){
		$('#mask,#buyingShow').hide();
	}
	// 卡包切换
	var oDiv = document.getElementById('listMenu');
	var aA = oDiv.getElementsByTagName('a');

	for(var i=0;i<aA.length;i++){
		aA[i].addEventListener('touchend',function (){
			console.log(1);
			$('.kabao-listCont').hide().eq($(this).index()).show();
		},false);
	}
	
})();