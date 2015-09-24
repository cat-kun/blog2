/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-09-20 18:37:00
 */


$(function(){

    // 全部分类-iscroll
    var myScroll1;
    myScroll1 = new IScroll('.dialogue', {click: true });                   // 全部分类iscroll
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

    var _width = document.documentElement.clientWidth,		// 浏览器宽度
    	$d = $('#price_distribution'); 	// $运费

    // 初始化移动层
    $('.dialogue').css({'right':-_width,'width':_width});

    // 选择物流方式
    var $d_mod = $('#J_distribution'),					// 选择物流
    	$d_dialogue = $('#dialogue_distribution'); 		// 物流弹出层
    $d_mod.on('click',function(){
    	$d_dialogue.animate({right: 0},300);
    });
    $d_dialogue.on('click','.distribution-item',function(e){
    	e.stopPropagation();
    	var d_item = $(this),
    		d_radio = d_item.find('input');
		if(!d_radio.prop('checked')){
    		d_radio.prop('checked',true);
    		d_item.siblings('.distribution-item').find('input').prop('checked',false);
    		$d_mod.find('span.fr').text(d_item.text().trim()); 	// 填充物流方式
    		$d.html(d_radio.val()); 										// 填充运费
    		getTotal(1);
    	}
    	$d_dialogue.animate({right: -_width});
    });

    // 选择收件人
    var $r_mod = $('#J_recipients'),                    // 选择收件人
        $r_dialogue = $('#dialogue_recipients');        // 收件人弹框
    $r_mod.on('click',function(){
        $r_dialogue.animate({right: 0},300);
    });
    $r_dialogue.on('click','.recipients-item',function(){
        var r_item = $(this),
            r_radio = r_item.find('input');
        if(!r_radio.prop('checked')){
            r_radio.prop('checked',true);
            r_item.siblings('.recipients-item').find('input').prop('checked',false);
            // 填充收件人
            $r_mod.find('.recipients-name').html(r_item.find('.recipients-name').text());
            $r_mod.find('.recipients-addr').html(r_item.find('.recipients-addr').text());
        }
        $r_dialogue.animate({right: -_width});
    });

    // 新增收货地址
    var $r_add = $('.add-recipients'),              // 新增联系人
        $r_addDialogue = $('#dialogue_addRecipients');        // 收件人弹框
    $r_add.on('click',function(){
        $r_addDialogue.animate({right: 0},300);
    });
    


});

/*计算支付总额*/
function getTotal(type,p,c){
	var d = $('#price_distribution').text(), 			// 运费
		p = $('#price_product').text(),					// 商品总价
		c = $('#price_discount').text(); 	// 会员折扣



}