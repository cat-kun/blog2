/**
 * 
 * @date    2015-09-18 17:03:05
 */

$(function(){

    // 全部分类-iscroll
    var myScroll1,myScroll2;
    myScroll1 = new IScroll('#J_sortList .isScroll', {click: true });                   // 全部分类iscroll
    // myScroll2 = new IScroll('#J_wrapper', {click: true });
    


    var _width = document.documentElement.clientWidth; // 浏览器宽度


    // 头部导航-综合排序
    var $J_sort = $('#J_sort');
    $J_sort.find('.sub-sort').css('width',_width);      // 初始化头部导航-综合排序二级导航宽度

    // $J_sort.on('click',function(){
    //     var _this = $(this);
    //     if(_this.hasClass('show')){
    //         _this.find('.sub-sort').stop().animate({height:0},200).end()
    //             .removeClass('show');
    //     }else{
    //         _this.find('.sub-sort').stop().animate({height:92},200).end()
    //             .addClass('show')
    //     }
    // });
var a = function (e) { e.preventDefault(); }
    // 头部导航-所有列表
    var $J_all = $('#J_all'),
        $J_sortList = $('#J_sortList');     // 列表
    $J_sortList.css({'left':-_width,'opacity':1,'z-index':15});     // 初始化样式
    // 列表移出
    $J_all.on('click',function(){
        $J_sortList.animate({'left':0},300);
        document.addEventListener('touchmove',a,false);
        // document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    });
    // 列表移走
    $J_sortList.find('.cancel').on('click',function(){
        $J_sortList.animate({'left':-_width},300);
        document.removeEventListener('touchmove',a,true);
        // document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    });
    // 选择分类
    $('#J_sortList').on('click','.',function(){
        
    })

    // 导航-点击变成橙色
    $('.sort-list li').on('click',function(){
        var _this = $(this);
        // 如果是综合排序
        if(_this.hasClass('sort-synthesize')){
            if(_this.find('.sub-sort').height()==92){
                // 如果综合排序已被选择，隐藏sub-sort，样式不变
                _this.find('.sub-sort').stop().animate({height:0},200).end()
            }else{
                _this.find('.sub-sort').stop().animate({height:92},200).end()
                    .addClass('show')
                    .siblings('li').removeClass('show');
            }
        }else{
            _this.addClass('show')
                .siblings('li').removeClass('show');
            // 选择销量&评价时，综合排序的列表隐藏
            $J_sort.find('.sub-sort').stop().animate({height:0},200)
                    .find('a').css('color','#000');
            $J_sort.removeClass('show');

        }
    });

    // 综合排序sub-sort选中时
    $J_sort.find('.sub-sort a').on('click',function(){
        $(this).css('color','#fe4f01').
            siblings('a').css('color','#000');
        $(this).parents('.sub-sort').stop().animate({height:0},200).end();
    });




});