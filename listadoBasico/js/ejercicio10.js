/*
Emanuel Galván Fontalba
Implementa DeNumericoATexto que solicite un número del 0 al 99 y lo muestre
escrito. Por ejemplo, para 12 mostrar: doce, para 44 mostrar: cuarenta y cuatro. Que
sea lo más eficiente posibleImplementa MultiplicaImpares que multiplique los 20
primeros números impares y muestre el resultado en pantalla.
*/
var primero;
var segundo;
var cadena = "";

function deNumaCadena(){
	switch(primero){
		case 0:
			cadena="";
			if(segundo==0){
				cadena="cero";
			}else{
				segundoNumero();
			}
			break;
		case 1:
			cadena="diez once doce trece catorce quince";
			if(segundo>5){
				cadena="dieci";
				segundoNumero();
			}else{
				switch(segundo){
					case 0: cadena = "diez"; break;
					case 1: cadena = "once"; break;
					case 2: cadena = "doce"; break;
					case 3: cadena = "trece"; break;
					case 4: cadena = "catorce"; break;
					case 5: cadena = "quince"; break;
	 			}
			}
			break;
		case 2:
			cadena="veinte ";
			annadirSegundoNumero();
			break;
		case 3:
			cadena="treinta ";
			annadirSegundoNumero();		
			break;
		case 4:
			cadena="cuarenta ";
			annadirSegundoNumero();
			break;
		case 5:
			cadena="cincuenta ";
			annadirSegundoNumero();
			break;
		case 6:
			cadena="sesenta ";
			annadirSegundoNumero();
			break;
		case 7:
			cadena="setenta ";
			annadirSegundoNumero();
			break;
		case 8:
			cadena="ochenta ";
			annadirSegundoNumero();
			break;
		case 9:
			cadena="noventa ";
			annadirSegundoNumero();
			break;
	}
}

function annadirSegundoNumero(){
	if(segundo!=0){
		cadena+=" y ";
		segundoNumero();
	}
}

function segundoNumero(){
	switch(segundo){
		case 1:
			cadena+="uno";
			break;
		case 2:
			cadena+="dos";
			break;
		case 3:
			cadena+="tres";
			break;
		case 4:
			cadena+="cuatro";
			break;
		case 5:
			cadena+="cinco";
			break;
		case 6:
			cadena+="seis";
			break;
		case 7:
			cadena+="siete";
			break;
		case 8:
			cadena+="ocho";
			break; 
		case 9:
			cadena+="nueve";
			break;
		default:
			break;
	}
}

function proceso(){
	var numero = document.getElementById("num").value;
	var numeros = numero.split("");
	var lerror=false;
	var elemento = document.getElementById("resultado");
	if(numeros.length>2 || numeros.length==0){
		lerror=true;
	}else{
		if(numeros.length==1){
			primero=0;
			segundo=parseInt(numeros[0]);
		}else{
			primero=parseInt(numeros[0]);
			segundo=parseInt(numeros[1]);
		}
		deNumaCadena();
	}

	if(lerror){
		elemento.innerHTML="<p>Error, máximo 99 y mínimo 0</p>";
	}else{
		elemento.innerHTML="<p>"+cadena+"</p>";
	}
}


window.onload=function(){
	document.getElementById("pasar").addEventListener("click", proceso);
}