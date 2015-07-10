// 公用JS
window.onload = window.onresize = function(){
	var _html = document.getElementsByTagName('html')[0];
	var view_width = _html.getBoundingClientRect().width;
	view_width>640?_html.style.fontSize = 640 / 16 + 'px':_html.style.fontSize = view_width / 16 + 'px';

	// 后退
	$('header .back-go').on('click',function (){
		history.back();
	});
}