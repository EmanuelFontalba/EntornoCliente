$(document).ready(function(){
	if(!navigator.cookieEnabled){
		$("#contain").hide();
		$("#noCookies").show();
	}else{
		$("#noCookies").hide();
		$("#contain").show();
	}
	$("#wind").animate({opacity: "0.1"},{duration: 3000});


});