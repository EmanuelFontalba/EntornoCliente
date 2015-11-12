/*
Emanuel Galván Fontalba
6. Implementa OrdenaTres que pida tres números y los muestre ordenados de menor a
mayor.
*/

function ordena(){
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	var num3 = document.getElementById("num3").value;
	var elemento = document.getElementById("resultado");

	if(num1<=num2){

		if(num2<=num3){
			//1 2 3
			elemento.innerHTML = "<p>"+num1+" < "+num2+" < "+num3+"</p>";
		}else{
			if(num1<=num3){
				// 1 3 2
				elemento.innerHTML = "<p>"+num1+" < "+num3+" < "+num2+"</p>";
			}else{
				// 3 1 2
				elemento.innerHTML = "<p>"+num3+" < "+num1+" < "+num2+"</p>";
			}
		}

	}else{
		if(num2 <= num3){
			if( num1<= num3){
				// 2 1 3
				elemento.innerHTML = "<p>"+num2+" < "+num1+" < "+num3+"</p>";
			}else{
				// 2 3 1
				elemento.innerHTML = "<p>"+num2+" < "+num3+" < "+num1+"</p>";
			}
		}else{
			//3 2 1
			elemento.innerHTML = "<p>"+num3+" < "+num2+" < "+num1+"</p>";
		}
	}

}

window.onload=function(){
	document.getElementById("ordenar").addEventListener("click", ordena);
}