window.onload=function(){

	function score(id){
		var oPf=document.getElementById(id);
		var aLi=oPf.getElementsByTagName('li');
		var oText=oPf.getElementsByTagName('span')[0];
		var description = ['失望','不满','一般','满意','惊喜',]
		var i=0;
		
		for(i=0;i<aLi.length;i++){
			aLi[i].index=i;
			aLi[i].onmouseover=function(){
				for(i=0;i<aLi.length;i++){
					if(i<=this.index)
					{	
						// console.log(i,this.index);
						aLi[i].style.backgroundPosition="0 -29px";
						oText.innerText=(this.index+1)+'分 '+description[i];
					}
					else
					{
						aLi[i].style.backgroundPosition="0 0";
					}
					// if()
				}
			};
			
			aLi[i].onmouseout=function (){
				oText.innerText='';
			};
			aLi[i].onmousedown=function ()
			{
				// alert('提交成功:'+(this.index+1)+'分');
				oText.innerText=(this.index+1)+'分 '+description[this.index];
				aLi[i].onmouseout=null;
			};
		}
	}

	score('pingfen');
	score('pingfen2');
	score('pingfen3');
};