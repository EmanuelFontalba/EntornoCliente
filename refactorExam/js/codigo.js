//Emanuel Galván Fontalba
//Examen Febrero 2016

(function(){
	var eName, eLastName, eDNI, eTerms, lerror_name, lerror_lastName, lerror_dni, lerror_terms, name, lastName,
		dni, sex, terms, create, clear;

	function init(){
		eName =document.getElementById("errName");
		eLastName =document.getElementById("eLastName");
		eDNI=document.getElementById("eDNI");
		eTerms = document.getElementById("eTerms");
		lerror_name = true;
		lerror_lastName = true;
		lerror_dni = true;
		lerror_terms = true;
		name = document.getElementById("name");
		lastName = document.getElementById("lastName");
		dni = document.getElementById("dni");
		sex = document.getElementById("sex");
		terms = document.getElementById("terms");
		create = document.getElementById("create");
		clear = document.getElementById("clear");
		write();
	}

	function write(){
		name.value=getCookie("name");
		lastName.value=getCookie("lastName");
		dni.value=getCookie("dni");
		if(getCookie("sex")!=""){
			sex.value=getCookie("sex");
		}
	}

	function User(name, lastName, dni, sex){
		this.name=name;
		this.lastName=lastName;
		this.dni=dni;
		this.sex=sex;
	}

	User.prototype.show = function(){
		var div = document.getElementById("info");
		div.innerHTML = "name: "+this.name+"<br>lastName:"+this.lastName+"<br>sex:"+this.sex;
	}

	User.prototype.createListItenm = function(){
		var ul = document.createElement("ul");

		var li = document.createElement("li");
		var text = document.createTextNode(this.name);
		li.appendChild(text);
		ul.appendChild(li);

		li = document.createElement("li");
		text= document.createTextNode(this.lastName);
		li.appendChild(text);
		ul.appendChild(li);

		li = document.createElement("li");
		text= document.createTextNode(this.dni);
		li.appendChild(text);
		ul.appendChild(li);

		li = document.createElement("li");
		text= document.createTextNode(this.sex);
		li.appendChild(text);
		ul.appendChild(li);

		var body = document.getElementsByTagName("body")[0];
		body.appendChild(ul);
	}

	function setCookie(name_cookie, value_cookie, days) {
		var d = new Date();
		d.setTime(d.getTime() + (days*24*60*60*1000));
		var expires = "expires="+d.toUTCString();
		document.cookie = name_cookie + "=" + value_cookie + "; " + expires;
	}

	function getCookie(name_cookie) {
		var name = name_cookie + "=";
		var ca=document.cookie.split(';');
		for(var i=0; i<ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1);
			if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
		}
		return "";
	}

	function deleteCookie(name_cookie){
		setCookie(name_cookie, "", -10);
	}

	function isEmpty(string){
		if(string.trim()==""){
			return true;
		}return false;
	}

	function write_error(element, errorName){
		element.innerHTML = errorName;
	}

	function validate_name(){
		if(isEmpty(name.value)){
			write_error(eName, "* Campo requerido");
			lerror_name = true;
			return;
		}
		if(!/^(\d|[a-z]|[A-Z]|-|_){4}(\d|[a-z]|[A-Z]|-|_)*$/.test(name.value.trim())){
			write_error(eName, "* Nombre inválido. Debe contener almenos 4 carácteres(letras, numeros, -, _)");
			lerror_name = true;
			return;
		}
		write_error(eName, "");
		lerror_name = false;
	}
		
	function validate_dni(){
		if(isEmpty(dni.value)){
			write_error(eDNI, "* Campo requerido");
			lerror_dni = true;
			return;
		}
		if(!/^\d{8}([a-n,n-z]|[A-N,N-Z])$/.test(dni.value.trim())){
			write_error(eDNI, "* DNI invalido");
			lerror_dni = true;
			return;
		}
		write_error(eDNI, "");
		lerror_dni = false;
	}

	function validate_lastName(){
		if(isEmpty(lastName.value)){
			write_error(eLastName, "* Campo requerido");
			lerror_lastName = true;
			return;
		}
		write_error(eLastName, "");
		lerror_lastName = false;

	}

	function validate_terms(){
		if(terms.checked == false){
			write_error(eTerms, "* Debes aceptar los terms y condiciones");
			lerror_terms = true;
			return;
		}
		write_error(eTerms, "");
		lerror_terms = false;
	}

	function validateAll(){
		validate_name();
		validate_lastName();
		validate_dni();
		validate_terms();
	}

	function eventsListener(){
		name.addEventListener("blur", function(){
			validate_name();
		});

		lastName.addEventListener("blur", function(){
			validate_lastName();
		});

		dni.addEventListener("blur", function(){
			validate_dni();
		});

		terms.addEventListener("blur", function(){
			validate_terms();
		});

		create.addEventListener("click", function(){
			validateAll();
			if(!lerror_name && !lerror_lastName && !lerror_dni && !lerror_terms){
				var user = new User(name.value, lastName.value, dni.value, sex.value);
				user.show();
				user.createListItenm();
				setCookie("name", User.name);
				setCookie("lastName", User.lastName);
				setCookie("dni", User.dni);
				setCookie("sex", User.sex);
			}
		});

		clear.addEventListener("click", function(){
			deleteCookie("name");
			deleteCookie("lastName");
			deleteCookie("dni");
			deleteCookie("sex");
			name.value="";
			lastName.value="";
			dni.value="";
			sex.value="Hombre";
			terms.checked=false;
			document.getElementById("eName").innerHTML="";
			document.getElementById("eLastName").innerHTML="";
			document.getElementById("eDNI").innerHTML="";
			document.getElementById("eTerms").innerHTML="";
		});
	}

	window.addEventListener("load", function(){
		init();
		eventsListener();
	});
})();