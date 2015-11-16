function camelize(str){
	var arr = str.split("-");
	var cadena = "";
	for (var i =0; i<arr.length ; i++) {
		if(i!=0){
			var palabra=arr[i].split("");
			var aConcatenar="";
			for(var z= 0; z<palabra.length;z++){
				if(z==0){
					aConcatenar+=palabra[z].toUpperCase();
				}else{
					aConcatenar+=palabra[z];
				}
			}
			cadena+=aConcatenar;
		}else{
			cadena+=arr[i];
		}
	}
	return cadena;
}

window.addEventListener("load", function(){
	console.log("hola-que-tal = "+camelize("hola-que-tal"));
});