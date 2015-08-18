/**
 * 
 * @authors 银狐 (626269256@qq.com)
 * @date    2015-08-15 09:43:30
 * @version v1.0
 */
// 预加载
(function(a) {
	a.Preload = {
		loadImg: function(array_img, callback) {
			function c() {
				d++;
				d >= e && setTimeout(function() {
					callback(f);
				}, 100)
			}
			var d = 0,
				e = 0,
				f = array_img instanceof Array ? [] : {};
			for (var g in array_img)
				e++,
				f[g] = new Image,
				f[g].onload = c,
				f[g].onerror = c,
				f[g].onabort = c,
				f[g].src = array_img[g];
		}
	}
}(window));
var imgs = [
	'../images/avatar.png',
	'../images/body_bg.jpg',
	'../images/land.png',
	'../images/mm01.jpg',
	'../images/mm02.jpg',
	'../images/mm03.jpg',
	'../images/page-icons-4.png',
	'../images/top.png',
	'../images/women.png',
	'../images/wzkuang1.png',
	'../images/xin.png',
	'../images/yoyo.png'
];
/*$.get('后台接口',function (data){
	Preload.loadImg(data,function (){
		console.log('图片加载完成');
		$('.swiper-slide0').hide();
	});
});*/
Preload.loadImg(imgs,function (){
	console.log('图片加载完成');
	$('.swiper-slide0').hide();

// setTimeout(function (){$('.swiper-slide0').hide();},20000);
	var mySwiper = new Swiper('.swiper-container', {
		direction: 'vertical',
		//pagination: '.swiper-pagination',
		//virtualTranslate : true,
		onInit: function(swiper) {
			swiperAnimateCache(swiper);
			swiperAnimate(swiper);
		},
		onSlideChangeEnd: function(swiper) {
			swiperAnimate(swiper);
		},
		onTransitionEnd: function(swiper) {
			swiperAnimate(swiper);
			var mmH = $('.imgBox>img').height();
			$('.imgBox').css('height',mmH);
			
		},

		onSlideChangeEnd: function(swiper){
			var slide = $('.swiper-slide');
			if(mySwiper.isEnd){
				$('#array').hide();
			}else{
				$('#array').show();
			}
		},

		watchSlidesProgress: true,

		onProgress: function(swiper) {
			for (var i = 0; i < swiper.slides.length; i++) {
				var slide = swiper.slides[i];
				var progress = slide.progress;
				var translate = progress * swiper.height / 4;
				scale = 1 - Math.min(Math.abs(progress * 0.5), 1);
				var opacity = 1 - Math.min(Math.abs(progress / 2), 0.5);
				slide.style.opacity = opacity;
				es = slide.style;
				es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(0,' + translate + 'px,-' + translate + 'px) scaleY(' + scale + ')';

			}
		},

		onSetTransition: function(swiper, speed) {
			for (var i = 0; i < swiper.slides.length; i++) {
				es = swiper.slides[i].style;
				es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';

			}
		}
	});
});