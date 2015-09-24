/**
 * 搜索列表
 * @date    2015-09-17 22:15:43
 */

$(function(){

	// 全部分类-iscroll
	var myScroll1,myScroll2;
	myScroll1 = new IScroll('#J_nav', {click: true,bounce:false});
	myScroll2 = new IScroll('#J_sort', {click: true,bounce:false});
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

    // 拉升方形
    var _imgWidth = $('.sort-img').width();
    $('.sort-img img').css({'height':_imgWidth});

    $('#J_nav').find('li').on('click',function(){
        var _this = $(this);
        _this.addClass('current')
            .siblings('li').removeClass('current');

        // 测试数据
        var data = [{'url':'images/radio-checked.png','nname':'111'},{'url':'images/radio-checked.png','nname':'111'},{'url':'images/radio-checked.png','nname':'111'},{'url':'images/radio-checked.png','nname':'111'},{'url':'images/radio-checked.png','nname':'111'},{'url':'images/radio-checked.png','nname':'111'},{'url':'images/radio-checked.png','nname':'111'},{'url':'images/radio-checked.png','nname':'111'},{'url':'images/radio-checked.png','nname':'111'},{'url':'images/radio-checked.png','nname':'111'}];
        var _listHtml = '';
        for(var i=0;i<data.length;i++){
            console.log(data[i])
            _listHtml += '<li class="sort-item">'
                         +   '<a href="xiangqing.html">'
                         +   '<span class="sort-img"><img src="'+data[i].url+'" /></span>'
                         +   '<span class="sort-name">'+data[i].nname+'</span>'
                         +   '</a>'
                         +   '</li>';
        }
        $('#J_sort .sort-list').html(_listHtml);

        $('.sort-img img').css({'height':_imgWidth});
        myScroll2.refresh();

    })

});