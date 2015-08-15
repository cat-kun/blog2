/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-08-15 09:43:30
 * @version $Id$
 */
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
	},



})