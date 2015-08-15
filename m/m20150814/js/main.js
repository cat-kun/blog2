/**
 * 
 * @authors 银狐 (626269256@qq.com)
 * @date    2015-08-14 21:30:58
 * @version v1.0
 */
/*var mySwiper = new Swiper('.swiper-container', {
	direction: 'vertical',
	loop: true,

});*/
// 判断竖屏横屏
/*window.addEventListener('orientationchange', function(event) {
	if (window.orientation == 180 || window.orientation == 0) {
		alert("竖屏");
	}
	if (window.orientation == 90 || window.orientation == -90) {
		alert("横屏");
	}
});*/
// function orient() {
    
//     if (window.orientation == 0 || window.orientation == 180) {
//         $("body").attr("class", "portrait");
//         orientation = 'portrait';
//         return false;
//     }
//     else if (window.orientation == 90 || window.orientation == -90) {
//         $("body").attr("class", "landscape");
//         orientation = 'landscape';
//         alert('横屏');
//         return false;
//     }
// }

// /* 在页面加载的时候调用 */
// $(function(){
//     orient();
// });

// /* 在用户变化屏幕显示方向的时候调用*/
// $(window).bind( 'orientationchange', function(e){
//     orient();
// });
function fixPagesHeight() {
	$('.swiper-slide,.swiper-container').css({
		height: $(window).height(),
	})
}
$(window).on('resize', function() {
	fixPagesHeight();
})
fixPagesHeight();


var mySwiper = new Swiper('.swiper-container', {

	direction: 'vertical',
	lazyLoading: true,
	mousewheelControl: true,
	watchSlidesProgress: true,
	onInit: function(swiper) {
		swiper.myactive = 0;

	},
	onProgress: function(swiper) {
		for (var i = 0; i < swiper.slides.length; i++) {
			var slide = swiper.slides[i];
			var progress = slide.progress;
			var translate, boxShadow;

			translate = progress * swiper.height * 0.8;
			scale = 1 - Math.min(Math.abs(progress * 0.2), 1);
			boxShadowOpacity = 0;

			slide.style.boxShadow = '0px 0px 10px rgba(0,0,0,' + boxShadowOpacity + ')';

			if (i == swiper.myactive) {
				es = slide.style;
				es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(0,' + (translate) + 'px,0) scale(' + scale + ')';
				es.zIndex = 0;


			} else {
				es = slide.style;
				es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = '';
				es.zIndex = 1;

			}

		}

	},


	onTransitionEnd: function(swiper, speed) {
		for (var i = 0; i < swiper.slides.length; i++) {
			//	es = swiper.slides[i].style;
			//	es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = '';

			//	swiper.slides[i].style.zIndex = Math.abs(swiper.slides[i].progress);


		}

		swiper.myactive = swiper.activeIndex;

	},
	onSetTransition: function(swiper, speed) {

		for (var i = 0; i < swiper.slides.length; i++) {
			//if (i == swiper.myactive) {

			es = swiper.slides[i].style;
			es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';
			//}
		}

	},
	onInit: function(swiper) {
		swiperAnimateCache(swiper);
		swiperAnimate(swiper);
	},
	onSlideChangeEnd: function(swiper) {
		swiperAnimate(swiper);
	},
	onTransitionEnd: function(swiper) {
		swiperAnimate(swiper);
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
});