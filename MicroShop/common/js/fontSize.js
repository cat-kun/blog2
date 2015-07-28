// 设置html页面根节点字体大小
var _html,view_width;
fontSize();
window.onresize = fontSize;
function fontSize(){
	_html = document.getElementsByTagName('html')[0];
	view_width = _html.getBoundingClientRect().width;
	view_width>640?_html.style.fontSize = 640 / 16 + 'px':_html.style.fontSize = view_width / 16 + 'px';
}