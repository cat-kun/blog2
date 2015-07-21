function link_to(url){
	var loading=document.getElementById('web_loading');
	loading.style.display='block';
	setTimeout(function(){window.location.href=url;},500);
}

window.onload=function(){
	var loading=document.getElementById('web_loading');
	loading.style.display='none';
}