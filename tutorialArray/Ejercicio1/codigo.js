window.addEventListener("load", function(){
	var styles = ["Jazz", "Blues"];
	console.log("Array inicial: "+styles);
	styles.push("Rock'n'roll");
	console.log("Array con push: "+styles);
	styles[1]="Classic";
	console.log("Array completo: "+styles);
	console.log("Ultimo valor: "+styles[styles.length-1]);
});
