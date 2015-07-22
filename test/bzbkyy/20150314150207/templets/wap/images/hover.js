// JavaScript Document
<!--
function setTab(name,cursel,n){
for(i=0;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("con_"+name+"_"+i);
menu.className=i==cursel?"hover":"";
con.style.display=i==cursel?"block":"none";
}
}
//-->


// JavaScript Document
<!--
function setTab(name,cursel,n){
for(i=0;i<=n;i++){
var menub=document.getElementById(name+i);
var con=document.getElementById("con_"+name+"_"+i);
menub.className=i==cursel?"hover":"";
con.style.display=i==cursel?"block":"none";
}
}




<!--¼¼ÊõÄÚÈÝ-->
function qw_on(qwbt,qwpic,lengthNum,n)
{
			var firstObjArray = new Array;
			var secondObjArray = new Array;
			var t;
			for(var i = 0; i < lengthNum; i++){
				t = i + 1;
				firstObjArray[i] = qwbt + t;
				secondObjArray[i] = qwpic + t;
			}
			
			for(i = 0; i < lengthNum; i++)
			{
				document.getElementById(firstObjArray[i]).style.display="block";
				document.getElementById(secondObjArray[i]).style.display="none";
			}
			document.getElementById(firstObjArray[n-1]).style.display="none";
			document.getElementById(secondObjArray[n-1]).style.display="block";
}


