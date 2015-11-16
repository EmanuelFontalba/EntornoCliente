window.addEventListener("load", function(){
	var arr = ["Plum", "Orange", "Donkey", "Carrot", "JavaScript"];
	var min = 0;
	var max = arr.length-1;
	var rand = min+Math.floor(Math.random()*(max+1-min));
	console.log("Array completo: "+arr);
	console.log("Numero aleatorio: "+rand);
	console.log("Valor aleatorio: "+arr[rand]);
	
});