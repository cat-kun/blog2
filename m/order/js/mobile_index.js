function plusReadyFun(){
	var nw = plus.ui.getSelfWindow();
	nw.addEventListener('back', function(e){
		nw.close();
	});
}

function submit_(){
	var	name = document.getElementById('name').value,
		company = document.getElementById('company').value,
		website = document.getElementById('website').value,
		post = document.getElementById('post').value,
		email = document.getElementById('email').value,
		telephone = document.getElementById('telephone').value,
		area_code = document.getElementById('area_code').value,
		phone_number = document.getElementById('phone_number').value,
		ext = document.getElementById('ext').value,
		city = document.getElementById('city').value,
		area = document.getElementById('area').value,
		address = document.getElementById('address').value,
		bz = document.getElementById('bz').value;
	localStorage.setItem('name',name);
	localStorage.setItem('company',company);
	localStorage.setItem('website',website);
	localStorage.setItem('post',post);
	localStorage.setItem('email',email);
	localStorage.setItem('telephone',telephone);
	localStorage.setItem('area_code',area_code);
	localStorage.setItem('phone_number',phone_number);
	localStorage.setItem('ext',ext);
	localStorage.setItem('city',city);
	localStorage.setItem('area',area);
	localStorage.setItem('address',address);
	localStorage.setItem('bz',bz);
	if ( navigator.userAgent.indexOf("Html5Plus") >= 0 ) {
		open_();
	} else {
		//window.open('result.html');
		location.href = "result.html";
	};
}

function startRecognize () {
	var options = {};
	options.engine = 'iFly';
//	document.getElementById('bz').value = "";
    plus.speech.startRecognize(options, function(string){
      for(var i = 0; i < string.length; i++) {
      	document.getElementById('bz').value += string[i];
      }
    },error);
}

function open_(){
	create_window('result.html');
}

function add_phone(){
	plus.ui.confirm( "", function(i){
        if(i == 0){
        	//相册选取
			plus.gallery.pick(function(path){
	            if (document.getElementById('mobile_photo_img')) {
					$('#mobile_photo_img').attr('src','file:///'+ path);
        		}else{
        			$('.mobile_photo_img').html('<img id = "mobile_photo_img" src = "file:///'+ path +'"/>');
        		}
        		localStorage.setItem('file','file:///'+ path);
	        },error);        	
        }else if(i == 1){
        	//相机拍照
        	var cmr = plus.camera.getCamera();
	        var res = cmr.supportedImageResolutions[0];
	        var fmt = cmr.supportedImageFormats[0];
        	cmr.captureImage(function(path){
        		if (document.getElementById('mobile_photo_img')) {
					$('#mobile_photo_img').attr('src','file://'+ path);
        		}else{
        			$('.mobile_photo_img').html('<img id = "mobile_photo_img" src = "file:///'+ path +'"/>');
        		}
        		localStorage.setItem('file','file:///'+ path);
        	},error,{filename:"_doc/test_gallery/",index:'1'});
        }
    }, "选择照片", ["相册","摄像头","取消"] );
}

function error(e){
	plus.console.log(e.message);
}

function goto(type,result,file){
  	if (result.substr(0,11) === "BEGIN:VCARD"){
  		strs = result.split("\n");
  		for (i=0;i<strs.length ;i++ )    
  	    {
  	        var p = strs[i].indexOf(":");
  	        var pre = strs[i].substr(0,p);
  	        var value = strs[i].substr(p+1);
  	        switch( pre ){
  	        	case "N":
  	        		document.getElementById('name').value = value;
  	        	break;
  	        	case "EMAIL":
  	        		document.getElementById('email').value = value;
  	        	break;
  	        	case "TEL":
  	        		document.getElementById('phone_number').value = value;
  	        	break;
  	        	case "URL":
  	        		document.getElementById('website').value = value;
  	        	break;
  	        	case "ORG":
  	        		document.getElementById('company').value = value;
        		break;
  	        	case "TITLE":
  	        		document.getElementById('post').value = value;
        		break;
  	        	case "ADR":
  	        		document.getElementById('address').value = value;
        		break;
  	        }
  	    } 
  	} else if (result.substr(0,5) === "http:") {
  		document.getElementById('website').value = result;
  	}
}

function create_window(url) {
	var nw = plus.ui.createWindow(url);
	nw.show('slide-in-right', 300);
}
function open_barcode(){
	if(osname() == 'Android'){
		create_window('plus/barcode_android.html');
	}else if(osname() == 'iOS'){
		create_window('plus/barcode_iOS.html');
	}
}

function osname() {
	return plus.os.name;
}