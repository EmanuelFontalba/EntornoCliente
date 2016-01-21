window.addEventListener("load", function(){
	var elementValor = document.getElementById("valor");
	var elementInfo = document.getElementById("info");

	function setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+d.toUTCString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	}

	function getCookie(cname) {
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0; i<ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1);
	        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	    }
	    return "";
	}

	function deleteCookie(cname){
		setCookie(cname, "", -10);
	}

	document.getElementById("crear").addEventListener("click", function(){
		setCookie("Nombre", elementValor.value, 365);
	});

	document.getElementById("borrar").addEventListener("click", function(){
		deleteCookie("Nombre");
	});

	document.getElementById("mostrar").addEventListener("click", function(){
		elementInfo.innerHTML=getCookie("Nombre");
	});

	document.getElementById("crearLocal").addEventListener("click", function(){
		localStorage.setItem("Nombre", elementValor.value);
	});

	document.getElementById("borrarLocal").addEventListener("click", function(){
		localStorage.removeItem("Nombre");
	});

	document.getElementById("mostrarLocal").addEventListener("click", function(){
		elementInfo.innerHTML=localStorage.getItem("Nombre");
	});

});