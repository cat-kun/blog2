$(function (){

	// ͷ������
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

	// ��ά��
	$('.close_qr').click(function(){
		$('.qr_codeBox').hide();
	});

	// ����ͼ
	slideImage(slide1,3000);
	slideImage(slide2,5000);

	// ����ͼ�Ҳ�ѡ�
	slideTab();

	goTop();

	console.log('%c���Ǻ���~��Լ��\n����΢����http://weibo.com/206139456/\n΢�źţ�dxiaozhen_','color: #FF6600;font-size:12px;');
	console.log('%c','line-height: 80px;padding: 34px 40px;background: url(http://a4.qpic.cn/psb?/4b6f520d-5f86-467d-8494-81b0cbee501b/iAOSyT*.qdLmnqPOIw9j6D181PmQ3grkNCIWPtfH7dA!/b/dPchHemVCAAA&bo=UABQAAAAAAACACQ!&rf=viewer_4) no-repeat;');
});


function slideImage(id,time){
	var $oSlide = $(id), // ��ȡ��Ӧ����ͼ��id
		$aA = $oSlide.find('ol a'), // ͼƬ��Ӧ��ť
		$slideBtn = $oSlide.find('.slide_btn'), // ��ȡ���Ҽ�ͷ��ť
		iWidth = $oSlide.find('ul li').width(), // ����li���
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

	// ���ͷ
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

	// �Ҽ�ͷ
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

	// �Զ��ֲ�
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

// ����ͼ�Ҳ�ѡ�
function slideTab(){
	$('.slideTab_title').find('li').hover(
		function (){
			$('.slideTab_title').find('li').removeClass('current');
			$(this).addClass('current');

			$('.slideTab_content').hide();
			$('.slideTab').find('.slideTab_content').eq( $(this).index() ).show();
	});
}

// �ص�����
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

