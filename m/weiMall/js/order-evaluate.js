/**
 * 评价订单
 * @date    2015-09-13 17:53:27
 */

$(function(){

	// 点击“评价”
	$('.evaluate-btn').on('click',function(){
		var _this = $(this),
			_thisMod = _this.parents('.order-item');
		if(_thisMod.find('.pro-evaluate').height()==0){
			_thisMod.find('.pro-evaluate').animate({'height':188},300).end()
					_thisMod.siblings('.order-item').find('.pro-evaluate').animate({'height':0},300);
		}else{
			_thisMod.find('.pro-evaluate').animate({'height':0},300);
		}

	});

	// 选择评价星级
	var $J_star = $('.evaluate-mod');

	$J_star.find('span.star').on('click',function(){
		var _this = $(this),
			_thisIndex = _this.index()+1,
			_thisMod = _this.parents('.evaluate-mod');

		_thisMod.find('span.star').removeClass('red-star')
								.slice(0,_thisIndex).addClass('red-star');
		switch(_thisIndex){
			case 1:
				_thisMod.find('.text').text('非常差').css({'background':'#666'});
				break;
			case 2:
				_thisMod.find('.text').text('不太好').css({'background':'#f0ad4e'});
				break;
			case 3:
				_thisMod.find('.text').text('感觉还凑合').css({'background':'#5bc0de'});
				break;
			case 4:
				_thisMod.find('.text').text('我挺满意的').css({'background':'#428bca'});
				break;
			case 5:
				_thisMod.find('.text').text('超级棒棒棒').css({'background':'#d9534f'});
				break;
		}
	});


	// textarea-placeholder
	var $J_text = $J_star.find('textarea');
	$J_text.focus(function(){
		var _this = $(this);
		if(_this.text()=='说点什么吧~~'){
			_this.text('');
		}
	}).blur(function(){
		var _this = $(this);
		if(_this.text()==''){
			_this.text('说点什么吧~~');
		}
	})

	// 上传图片
	var $evaluateImg = $J_star.find('.evaluate-img');
		$evaluateImg_add = $evaluateImg.find('.add-btn');

	$evaluateImg_add.change(function(){
		var _thisBtn = $(this),
			_thisImgUl = _thisBtn.parents('.evaluate-img');

		// $.ajax(function(){
		// 	url:'',
		// 	type: 'POST',
		// 	dataType:'',
		// 	data: {
		// 		url: $evaluateImg_add.val('')
		// 	},
		// 	success:function(){
// 测试
var data = 'images/newProduct_pic1.jpg'
				var _html = '<li class="img"><img src="'+data+'" /><span class="delete-img"></span></li>';
				_thisImgUl.prepend(_html);
				_thisBtn.val('');
				if(_thisImgUl.find('li').length==6){
					_thisImgUl.find('li.add').hide();
				}


				//	删除图片
				_thisImgUl.find('.delete-img').on('click',function(){
					var _this = $(this);
					_this.parents('li.img').remove();
					if(_thisImgUl.find('li').length<6){
						_thisImgUl.find('li.add').show();
					}


				});


		// 	}
		// })


	});



})