// JavaScript Document


(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 10 * (clientWidth / 320) + 'px';
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    recalc();
})(document, window);




//footer
$(function(){
    $('footer ul li').click(function(){
        var index = $(this).index()+1;
        $('footer ul li').each(function(){
            var i = $(this).index()+1;
            $(this).find('.ico').attr('src','images/footer_icon'+i+'.png');
        })
        $(this).addClass('footer_cur').siblings('li').removeClass('footer_cur');
        $(this).find('.ico').attr('src','images/footer_icon'+index+'_cur.png');
    })
})

