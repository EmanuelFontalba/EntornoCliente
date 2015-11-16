var objeto = { 
	className: 'open menu' 
}

function addClass(element, string) {
	var c = element.className.split(' ');
  	for(var i=0; i<c.length; i++) {
    	if (c[i] == string){
    		return;
    	} 
  	}
  	element.className += ' '+string;
}

window.addEventListener("load", function(){
	console.log("Objeto original: "+objeto.className);
	addClass(objeto, 'new');
	addClass(objeto, 'open');
	console.log("Objeto modificado: "+objeto.className);
});