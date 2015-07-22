$(function (){

	// 头部下拉
	var $topLink = $('.topLink li');
	$topLink.hover(
		function (){
			var _this = $(this);
			if( _this.find( $('div') ).index()==1  ){
				$(this).addClass('menuShow');
				$(this).find('.menuList').show();
			}
		},
		function (){
			$(this).removeClass('menuShow');
			$(this).find('.menuList').hide();
		}
	);

	// 二维码
	$('.close_qr').click(function(){
		$('.qr_codeBox').hide();
	});

	// 焦点图
	slideImage(slide1,3000);
	slideImage(slide2,5000);

	// 焦点图右侧选项卡
	slideTab();

	goTop();

	console.log('%c我是狐狐~求约炮\n新浪微博：http://weibo.com/206139456/\n微信号：dxiaozhen_','color: #FF6600;font-size:12px;');
	console.log('%c','line-height: 80px;padding: 34px 40px;background: url(http://a4.qpic.cn/psb?/4b6f520d-5f86-467d-8494-81b0cbee501b/iAOSyT*.qdLmnqPOIw9j6D181PmQ3grkNCIWPtfH7dA!/b/dPchHemVCAAA&bo=UABQAAAAAAACACQ!&rf=viewer_4) no-repeat;');
});


function slideImage(id,time){
	var $oSlide = $(id), // 获取对应焦点图的id
		$aA = $oSlide.find('ol a'), // 图片对应按钮
		$slideBtn = $oSlide.find('.slide_btn'), // 获取左右箭头按钮
		iWidth = $oSlide.find('ul li').width(), // 单个li宽度
		iNow = 0,
		timer = null,
		iBlur = 0;
		// onOff = true;

	$aA.click(function (){

		$aA.removeClass('current');
		$(this).addClass('current');

		iNow = $(this).parent().index();
		console.log( iNow );
		
		$oSlide.find('ul').stop(true,true).animate( {left: -iNow * iWidth} );
	});

	// 左箭头
	$slideBtn.find('.slide_prev').click(function (){

		/*if( !onOff ){return;}
		onOff = false;*/

		if(iBlur <= 0){
			iBlur = $aA.length-1;
		}else{
			iBlur=--iBlur;
		}
		
		$aA.eq(iBlur).click();
	});

	// 右箭头
	$slideBtn.find('.slide_next').click(function (){

		/*if( !onOff ){return;}
		onOff = false;*/
		
		if(iBlur >= $aA.length-1){
			iBlur = 0;
		}else{
			iBlur = ++iBlur;
		}

		$aA.eq(iBlur).click();
		onOff = false;
	});

	// 自动轮播
	timer = setInterval(toRun,time);
	function toRun(){

		if( iNow==$aA.length-1 ){
			iNow=0;
		}else{
			iNow++;
		}

		$aA.removeClass('current');
		$aA.eq(iNow).addClass('current');

		$oSlide.find('ul').stop(true,true).animate( {left: -iNow * iWidth} );
	}

	$oSlide.hover(
		function (){
			clearInterval(timer);
			$slideBtn.show();
		},
		function (){
			timer = setInterval(toRun,3000);
			$slideBtn.hide();
		}
	);
}

// 焦点图右侧选项卡
function slideTab(){
	$('.slideTab_title').find('li').hover(
		function (){
			$('.slideTab_title').find('li').removeClass('current');
			$(this).addClass('current');

			$('.slideTab_content').hide();
			$('.slideTab').find('.slideTab_content').eq( $(this).index() ).show();
	});
}

// 回到顶部
function goTop(){
	var $goTop = $('#feedback'),
		$goTopBtn = $('.go_top');

	$goTop.hide();
	$(window).on('scroll',function (){
		if( $(window).scrollTop()>200 ){
			$goTop.fadeIn();
		}else{
			$goTop.fadeOut();
		}
	});

	$goTopBtn.on('click',function (){
		$('body,html').animate({scrollTop: 0},500);
	});
}

