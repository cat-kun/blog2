var file = localStorage.getItem('file'),
	name = localStorage.getItem('name'),
	company = localStorage.getItem('company'),
	website = localStorage.getItem('website'),
	post = localStorage.getItem('post'),
	email = localStorage.getItem('email'),
	telephone = localStorage.getItem('telephone'),
	area_code = localStorage.getItem('area_code'),
	phone_number = localStorage.getItem('phone_number'),
	ext = localStorage.getItem('ext'),
	city = localStorage.getItem('city'),
	area = localStorage.getItem('area'),
	address = localStorage.getItem('address'),
	bz = localStorage.getItem('bz');
	$(document).ready(function(){
	  	$('#out').html("<img src=''/><br/>" + "姓名：" + name + "<br/>"
		 + "公司：" + company + "<br/>"
		 + "网址：" + website + "<br/>"
		 + "职位：" + post + "<br/>"
		 + "电子邮箱：" + email + "<br/>"
		 + "移动电话：" + telephone + "<br/>"
		 + "区号：" + area_code + "<br/>"
		 + "电话号码：" +"<a href='javascript:void(0)' onclick='on_call(" +phone_number+")'>"+phone_number + "</a><br/>"
		 + "分机号：" + ext + "<br/>"
		 + "所在城市：" + city + "<br/>"
		 + "所在地区：" + area + "<br/>"
		 + "详细地址：" + address + "<br/>"
		 + "备注：" + bz
		);
		$('img').attr("src",file).css("width","30%");
	});

function get_phonenumstr()
{
	if ( navigator.userAgent.indexOf("Html5Plus") >= 0 ) {
		return "电话号码：" +"<a href='javascript:void(0)' onclick='on_call(" +phone_number+")'>"+phone_number + "</a><br/>";
	}
	else
	{
		return "电话号码：" +"<a href='tel://" +phone_number+"'>"+phone_number + "</a><br/>"
	}
}


function on_call(number)
{
	plus.device.dial(number,true);
}

function goback(){
	if ( navigator.userAgent.indexOf("Html5Plus") > 0 ) {
		plus.ui.findWindowByName("contact").close();
    	plus.ui.getSelfWindow().close();
    } else {
    	history.back();
    }

}
