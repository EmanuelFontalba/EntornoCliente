var objeto = { 
	className: 'open menu' 
}

function removeClass(element, string) {
	var c = element.className.split(' ');
  	for(var i=0; i<c.length; i++) {
    	if (c[i] == string){
    		c.splice(i,1);
    	} 
  	}
  	element.className = c.join(" ");
}

window.addEventListener("load", function(){
	console.log("Objeto original: "+objeto.className);
	removeClass(objeto, 'new');
	removeClass(objeto, 'open');
	console.log("Objeto modificado: "+objeto.className);
});