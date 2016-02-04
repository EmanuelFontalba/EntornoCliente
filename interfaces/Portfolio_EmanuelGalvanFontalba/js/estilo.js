navigator.sayswho= (function(){
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\bOPR\/(\d+)/)
        if(tem!= null) return 'Opera '+tem[1];
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();


var regex = /^Firefox/i;
if(regex.test(navigator.sayswho)){
	var body = document.getElementsByTagName("body");
	body[0].style.height ="100%";
}

$(document).ready(function(){
    setTimeout(function(){
        $("#carga").hide(1500);
    },5000);
    

	$('a.desplazamiento').click(function(e){
		e.preventDefault();
		volver  = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(volver).offset().top
		}, 2000);
	});

});

