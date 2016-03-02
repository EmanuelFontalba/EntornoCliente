(function(){
	var nombre, apellidos, mail, telf, numPer, fEntr, fSal, terms,
		errNom, errAp, errMail, errTelf, errNumPer, errFEntr, errFSal, errTerms,
		lNomb, lAp, lMail, lTelf, lNum, lFEntr, lFSal, lTerms,
		enviar;

	function init(){
		nombre = $("#nombre");
		apellidos = $("#apellidos");
		mail = $("#mail");
		telf = $("#telf");
		numPer = $("#numPer");
		fEntr = $("#fEntr");
		fSal = $("#fSal");
		terms = $("#terms");
		errNom = $("#errNom");
		errAp = $("#errAp");
		errMail = $("#errMail");
		errTelf = $("#errTelf");
		errNumPer =$("#errNumPer");
		errFEntr = $("#errFEntr");
		errFSal = $("#errFSal");
		errTerms = $("#errTerms");
		enviar = $("#btnEnv");
		lNomb = lAp = lMail = lTelf = lNum = lFEntr = lFSal = lTerms = false;
	}

	function isEmpty(string){
		if(string.trim()==""){
			return true;
		}return false;
	}

	function validate(element, errElement, regex, errRegex){
		var eString = element.val();
		eString = eString.trim();
		if(isEmpty(eString)){
			errElement.html("El campo está vacio.");
			return true;
		}
		if(!regex.test(eString)){
			errElement.html(errRegex);
			return true;
		}
		errElement.html("");
		return false;
	}

	function validateName(){ 
		var error = "Al menos 3 letras (solo se permiten letras).";
		var regex = /^([a-z]|[A-Z]){3}(|[a-z]|[A-Z])*$/;
		lNomb = validate(nombre, errNom, regex, error);
	}
	function validateLastName(){ 
		var error = "Al menos 3 letras (solo se permiten letras).";
		var regex = /^([a-z]|[A-Z]){3}(|[a-z]|[A-Z])*$/;
		lAp = validate(apellidos, errAp, regex, error);
	}

	function validateEmail(){
		var error = "Formato inválido";
		var regex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
		lMail = validate(mail, errMail, regex, error);
	}

	function validatePhone(){
		var error = "Solo 9 números";
		var regex = /^[0-9\-\+]{9,15}$/;
		lTelf = validate(telf, errTelf, regex, error);
	}

	function validatePersons(){
		var error = "Solo se admiten números";
		var regex = /^\d$/;
		lNum = validate(numPer, errNumPer, regex, error);
	}

	function validateTerms(){
		if(!terms.prop("checked")){
			errTerms.html("Campo obligatorio");
			lTerms = true;
		}else{
			errTerms.html("");
			lTerms = false;
		}
	}

	function validateAll(){
		validateName();
		validateLastName();
		validateEmail();
		validatePhone();
		validatePersons();
		validateTerms();
	}

	function noErrors(){
		if(lNomb || lAp || lMail || lTelf || lNum || lTerms){
			return false;
		}else{
			return true;
		}
	}

	function evnts(){
		nombre.blur(validateName);
		apellidos.blur(validateLastName);
		mail.blur(validateEmail);
		telf.blur(validatePhone);
		numPer.blur(validatePersons);
		terms.blur(validateTerms);
		enviar.click(function(){
			validateAll();
			if(noErrors()){
				console.log("No errors");
			}else{
				console.log("ERROR!");
			}
		});
	}

	function datepickers(){
		fEntr.datepicker();
		fSal.datepicker();
	}

	$(document).ready(function(){
		init();
		datepickers();
		evnts();
	});
})();


