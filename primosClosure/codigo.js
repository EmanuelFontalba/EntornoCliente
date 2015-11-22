function init(){
	var array = [];
	var suma = 0;

	function esPrimo(primo, anterior){
		if (anterior === 1){
			return true;
		}
		if(primo%anterior === 0){
			return false;
		}
		return esPrimo(primo, anterior-1);
	}

	for(var i=0; i<100; i++){
		array.push(i);
	}

	for(var z=array.length-1; z>0; z--){
		if(esPrimo(array[z], array[z-1])){
			suma+=array[z];
		}
	}

	console.log(suma);
	
}

window.addEventListener("load", init);