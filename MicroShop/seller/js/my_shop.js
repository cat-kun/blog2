// 我的店铺页面
(function (){
	// 分享店铺
	$('.share').on('click',function (){
		$('.shareBox').parent().addClass('pageShow');
		$('body').css('overflow','hidden');
	});
	// 弹出层后禁止页面滑动
	$('.share,.mask').on('touchmove',function (e){
		e.preventDefault();
	});
	$('.shareBox .cancel-btn').on('click',function (){
		$(this).parents('.page').removeClass('pageShow');
		$('body').css('overflow','');
	});
	
	// 简介
	$('#info').on('click',function (){
		$('#main').removeClass('pageShow');
		$('.shopBox').addClass('pageShow');
	});
	// 简介确认
	$('.shopBox .confirm').on('click',function (){
		// $('.shopBox').removeClass('pageShow');
		var oTxt = $(this).siblings('.textBox').find('textarea').val();			// 获取输入框文本
		if(oTxt==''){
			$(this).attr('disabled','disabled');
			// alert('不能为空');
		}else{
			$('#info span').text(oTxt);	
			$('#main').addClass('pageShow');
			$(this).parents('.page').removeClass('pageShow');
			$(this).attr('disabled',false);
		}
		
	});
	
	// 个人信息
	
	// 手机号
	$('#contact').on('click',function (){
		$('#main').removeClass('pageShow');
		$('.contactBox').addClass('pageShow');
		
	});
	
	// 判断手机号是否合法
	$('.contactBox .telInp').on('blur',function (){
		var re = /0?(13|14|15|18)[0-9]{9}/;
		if( !re.test($(this).val()) ){
			$(this).parent().siblings('.tip-tel').show();
			$(this).focus();
		}else{
			$(this).parent().siblings('.tip-tel').hide();
		}
	});
	
	// 手机号确认
	$('.contactBox .confirm').on('click',function (){
		var re = /0?(13|14|15|18)[0-9]{9}/;
		var oTxt = $('.contactBox input').val();			// 获取手机号
		if(oTxt=='' || !re.test(oTxt)){
			
			alert('手机号不匹配');
		}else{
			$('#contact span').text(oTxt);
			$('.main').parent().addClass('pageShow');
			$('.contactBox').removeClass('pageShow');			
		}
	});
	
	// 微信账号
	$('#weChat').on('click',function (){
		$('.main').parent().removeClass('pageShow');
		$('.wechatBox').addClass('pageShow');
	});
	
	// 微信确认
	$('.wechatBox .confirm').on('click',function (){
		var oTxt = $('.wechatBox input').val();				// 获取微信号
		if(oTxt==''){
			alert('不能为空');
		}else{
			$('#weChat span').text(oTxt);
			$('.main').parent().addClass('pageShow');
			$('.wechatBox').removeClass('pageShow');
		}
	});
	
	// 财付通
	$('.tengpay').on('click',function (){
		$('.main').parent().removeClass('pageShow');
		$('.tengpayBox').addClass('pageShow');
	});
	
	// 确认
	
	// 判断财付通账号
	var tengPay = $('.tengpayBox .s-inp').eq(0);
	tengPay.on('blur',function (){
		var re = /^[1-9]*[1-9][0-9]*$/;
		if(re.test($(this).val())){
			$(this).parent().siblings('.tip-text').hide();
			$('.tengpayBox .confirm').attr('disabled',false);
		}else{
			$(this).parent().siblings('.tip-text').show();
			$(this).focus();
			$('.tengpayBox .confirm').attr('disabled','disabled');
		}
	});
	// 判断身份证号
	var ID_number = $('.tengpayBox .s-inp').eq(1);
	ID_number.on('blur',function (){
		var re = /\d{17}[\d|x]|\d{15}/;
		if(re.test($(this).val())){
			$(this).parent().siblings('.tip-text').hide();
			$('.tengpayBox .confirm').attr('disabled',false);
		}else{
			$(this).parent().siblings('.tip-text').show();
			$(this).focus();
			$('.tengpayBox .confirm').attr('disabled','disabled');
		}
	});
	
	// 财付通确认
	$('.tengpayBox .confirm').on('click',function (){
		if(tengPay.val()=='' || ID_number.val()==''){
			alert('两项为必填项');
		}else{
			$('.main').parent().addClass('pageShow');
			$('.tengpayBox').removeClass('pageShow');
			
			$('.tengpay .tag strong').text('已开通');			// 把未开通改为已开通
			$('.real-name .tag strong').text('已认证');		// 把未认证改为已认证
		}
	});
	
	// 实名认证
	$('.real-name').on('click',function (){
		// 判断是否认证，如果认证点击无效，否则弹出提示框
		if($(this).find('.tag strong').text()=='未认证'){
			$('.certi-layer').parent().addClass('pageShow');
		}
	});
	// 实名认证的取消
	$('.certi-layer a').eq(0).on('click',function (){
		$('.certi-layer').parent().removeClass('pageShow');
	});
	// 实名认证的去开通
	$('.certi-layer a').eq(1).on('click',function (){
		$('.certi-layer').parent().removeClass('pageShow');
		$('.main').parent().removeClass('pageShow');
		$('.tengpayBox').addClass('pageShow');
	});
	
	// integrityBox
	$('.integrityCont').on('click',function (){
		$('#main').removeClass('pageShow');
		$('.integrityBox').addClass('pageShow');
	});
	
	// 子页面返回按钮
	var $back = $('.shopBox,.contactBox,.wechatBox,.tengpayBox,.integrityBox').find('.back');
	
	$back.on('click',function (){
		$('#main').addClass('pageShow').siblings('.page').removeClass('pageShow');
	});

	// 分享按钮
	// var p = {
	// 	url: location.href,
	// 	showcount: '1',
	// 	/*是否显示分享总数,显示：'1'，不显示：'0' */
	// 	desc: '',
	// 	/*默认分享理由(可选)*/
	// 	summary: '',
	// 	/*分享摘要(可选)*/
	// 	title: '',
	// 	/*分享标题(可选)*/
	// 	site: '',
	// 	/*分享来源 如：腾讯网(可选)*/
	// 	pics: '',
	// 	/*分享图片的路径(可选)*/
	// 	style: '203',
	// 	width: 98,
	// 	height: 22
	// };
	// var s = [];
	// for (var i in p) {
	// 	s.push(i + '=' + encodeURIComponent(p[i] || ''));
	// }
	// document.write(['<a version="1.0" class="qzOpenerDiv" href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?', s.join('&'), '" target="_blank">分享</a>'].join(''));

})();