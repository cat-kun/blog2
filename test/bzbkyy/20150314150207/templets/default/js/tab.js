// JavaScript Document
//
function set(name,cursel,n){
	  for(i=1;i<=n;i++){
	  var menu=document.getElementById(name+i);
	  var con=document.getElementById(name+"_"+i);
	  menu.className=i==cursel?"hover":"";
	  con.style.display=i==cursel?"block":"none";
	} 
  }
  //显示与隐藏列表 显示更多
function showList(id,num){
	if(num == 1){
		document.getElementById(id).style.display = "block";
	}
	else{
		document.getElementById(id).style.display = "none";
	}
}

function set_item_class(id){
	for(i=1;i<=6;i++){
		if(id==i){
			document.getElementById("pro_"+i+"_2").style.display="";
			document.getElementById("pro_"+i+"_2").style.background="";
			document.getElementById("pro_"+i+"_1").style.display="none";
		}else{
			document.getElementById("pro_"+i+"_2").style.display="none";
			document.getElementById("pro_"+i+"_1").style.display="";
			document.getElementById("pro_"+i+"_1").style.background="";
		}
	}
}
function set_item_classd(id){
	for(i=1;i<=8;i++){
		if(id==i){
			document.getElementById("pro_"+i+"_2").style.display="";
			document.getElementById("pro_"+i+"_2").style.background="";
			document.getElementById("pro_"+i+"_1").style.display="none";
		}else{
			document.getElementById("pro_"+i+"_2").style.display="none";
			document.getElementById("pro_"+i+"_1").style.display="";
			document.getElementById("pro_"+i+"_1").style.background="";
		}
	}
}