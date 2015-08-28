// JavaScript Document

	var videoList = [
		{
			'title': '第一讲：黄金的历史介绍',
			'videoUrl': '<embed src="http://player.youku.com/player.php/sid/XMTMxNzMwMDc2NA==/v.swf" allowFullScreen="true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>',
			'videoDesc': '这是介绍文字11111111111111111111111111111'
		},
		{
			'title': '第二讲：黄金的历史介绍',
			'videoUrl': '<embed src="http://player.youku.com/player.php/sid/XMTMxNzIwMDkyMA==/v.swf" allowFullScreen="true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>',
			'videoDesc': '这是介绍文字2222222222222222222222222222222222'
		},
		{
			'title': '第三讲：黄金的历史介绍',
			'videoUrl': '<embed src="http://player.youku.com/player.php/sid/XMTMxNzMwMDc2NA==/v.swf" allowFullScreen="true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>',
			'videoDesc': '这是介绍文字11111111111111111111111111111'
		},
		{
			'title': '第四讲：黄金的历史介绍',
			'videoUrl': '<embed src="http://player.youku.com/player.php/sid/XMTMxNzIwMDkyMA==/v.swf" allowFullScreen="true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>',
			'videoDesc': '这是介绍文字2222222222222222222222222222222222'
		},
		{
			'title': '第五讲：黄金的历史介绍',
			'videoUrl': '<embed src="http://player.youku.com/player.php/sid/XMTMxNzMwMDc2NA==/v.swf" allowFullScreen="true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>',
			'videoDesc': '这是介绍文字11111111111111111111111111111'
		},
		{
			'title': '第六讲：黄金的历史介绍',
			'videoUrl': '<embed src="http://player.youku.com/player.php/sid/XMTMxNzIwMDkyMA==/v.swf" allowFullScreen="true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>',
			'videoDesc': '这是介绍文字2222222222222222222222222222222222'
		},
		{
			'title': '第七讲：黄金的历史介绍',
			'videoUrl': '<embed src="http://player.youku.com/player.php/sid/XMTMxNzMwMDc2NA==/v.swf" allowFullScreen="true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>',
			'videoDesc': '这是介绍文字11111111111111111111111111111'
		}
	];
	var $oVideo = $('.video'),
		$oVideoList = $('.videoList'),
		$oVideoDesc = $('.videoDesc');

	var html = '',
		video = '',
		desc = '';

	for(var i=0;i<videoList.length;i++){
		var tempHtml = '<a href="#" data-index="'+i+'">'+ videoList[i].title +'</a>';
		html += tempHtml;
	}
	$oVideoList.append(html)
	$oVideoList.find('a').on('click',function (){
		var i = $(this).data('index');
		var video = videoList[i].videoUrl;
		$oVideo.html(video);

		var desc = videoList[i].videoDesc;
		$oVideoDesc.html(desc);
	});


