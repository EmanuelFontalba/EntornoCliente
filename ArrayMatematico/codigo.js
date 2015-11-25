function init(){
    var filas1, columnas1, filas2, columnas2, array1, array2, operacion;

    //Inicio del objeto array matematico
    function ArraysMatematicos(f, c){
        this.f = f;
        this.c = c;
        this.array = new Array(f);
        for (var i = 0; i < f; i++) {
            this.array[i] = new Array(c);
            for (var j = 0; j < c; j++) {
                this.array[i][j] = 0;
            }
        }
    }
    ArraysMatematicos.prototype.dimensiones = function(matriz){
        if(this.f === matriz.f && this.c === matriz.c){ return true;}
        else { return false;}
    }
    ArraysMatematicos.prototype.sumar = function(matriz) {
        var arraySuma;
        if(this.dimensiones(matriz)){
            arraySuma = new ArraysMatematicos(this.f, this.c);
            for (var i = 0; i < arraySuma.f; i++) {
                for (var j = 0; j < arraySuma.c; j++) {
                    arraySuma.array[i][j] = this.array[i][j] + matriz.array[i][j];
                }
            }
            return arraySuma;
        }else {
            console.error("Error en las matrices introducidas. Han de ser de la misma dimensión");
        }
    }
    ArraysMatematicos.prototype.restar = function(matriz) {
        var arrayResta;
        if(this.comprobarDimensiones(matriz)){
            arrayResta = new ArraysMatematicos(this.f, this.c);
            for (var i = 0; i < arrayResta.f; i++) {
                for (var j = 0; j < arrayResta.c; j++) {
                    arrayResta.array[i][j] = this.array[i][j] - matriz.array[i][j];
                }
            }
            return arrayResta;
        }else {
            console.error("Error en las matrices introducidas. Han de ser de la misma dimensión");
        }
    }
    ArraysMatematicos.prototype.multiplicar = function(matriz) {
        var arrayProducto;
        if(this.f != matriz.c || this.c != matriz.f){
            console.error("Error en las dimensiones de las matrices introducidas.");
        }else{
            arrayProducto = new ArraysMatematicos(this.f, matriz.c);
            for (var i = 0; i < this.f; i++){
                for (var j = 0; j < matriz.c; j++){
                    for (var k = 0; k < this.c; k++) {
                        arrayProducto.array[i][j] += this.array[i][k] * matriz.array[k][j];
                    }
                }
            }
            return arrayProducto;
        }
    }
    ArraysMatematicos.prototype.trasponer = function() {
        var arrayTraspuesta = new ArraysMatematicos(this.c, this.f);
        for(var i = 0; i < arrayTraspuesta.f; i++){
            for(var j = 0;j < arrayTraspuesta.c; j++){
                arrayTraspuesta.array[i][j] = this.array[j][i];
            }
        }
        this.array = arrayTraspuesta.array;
        this.f = arrayTraspuesta.f;
        this.c = arrayTraspuesta.c;
    }
    //Fin del objeto Array Matematico
    //Definición de funciones
    function formularioTam(){
        operacion = document.getElementById("operacion").value;
        var tamano = document.getElementById("tam");
        if(operacion != "trasp"){
            tamano.innerHTML = "Filas matriz 1: <input type='text' id='filas1'/><br/></br>"+
                    "Columnas matriz 1: <input type='text' id='columnas1'/><br/></br>"+
                    "Filas matriz 2: <input type='text' id='filas2'/><br/></br>"+
                    "Columnas matriz 2: <input type='text' id='columnas2'/><br/></br>"+
                    "<input type='button' id='generar' value='Siguiente'></br>";
        }else {
            tamano.innerHTML = "Filas matriz: <input type='text' id='filas1'/><br/></br>"+
                    "Columnas matriz: <input type='text' id='columnas1'/><br/></br>"+
                    "<input type='button' id='generar' value='Siguiente'></br>";
        }
        document.getElementById("generar").addEventListener("click", generarInputs);
    }

    function generarInputs(){
        filas1 = document.getElementById("filas1").value;
        columnas1 = document.getElementById("columnas1").value;
        var valores1Elem = document.getElementById("matriz1");
        var enviar = document.getElementById("valores");
        if(operacion != "trasp"){
            filas2 = document.getElementById("filas2").value;
            columnas2 = document.getElementById("columnas2").value;
            var valores2Elem = document.getElementById("matriz2");
            valores1Elem.innerHTML += "Matriz 1:</br>";
            for (var i = 0; i < filas1; i++) {
                for (var j = 0; j < columnas1; j++) {
                    console.log("eoo");
                    valores1Elem.innerHTML += "<input type='text' id='matriz1f" + i + "c" + j + "'/>";
                }
                valores1Elem.innerHTML += "</br>";
            }
            valores2Elem.innerHTML += "Matriz 2:</br>";
            for (var i = 0; i < filas2; i++) {
                for (var j = 0; j < columnas2; j++) {
                    valores2Elem.innerHTML += "<input type='text' id='matriz2f" + i + "c" + j + "'/>";
                }
                valores2Elem.innerHTML += "</br>";
            }   
        }else {
            valores1Elem.innerHTML += "Matriz 1:</br>";
            for (var i = 0; i < filas1; i++) {
                for (var j = 0; j < columnas1; j++) {
                    valores1Elem.innerHTML += "<input type='text' id='matriz1f" + i + "c" + j + "'/>";
                }
                valores1Elem.innerHTML += "</br>";
            }
        }
        enviar.innerHTML += "<input type='button' class='submit' id='calcular' value='Enviar'>";
        document.getElementById("calcular").addEventListener("click", crearArrays);
    }  

    function crearArrays(){
        if(operacion != "trasp"){
            if(filas1 > 0 && columnas1 > 0 && filas2 > 0 && columnas2 > 0) {
                array1 = new ArraysMatematicos(filas1, columnas1);
                array2 = new ArraysMatematicos(filas2, columnas2);
                for (var i = 0; i < filas1; i++) {  
                    for (var j = 0; j < columnas1; j++) {
                        array1.array[i][j] = parseInt(document.getElementById("matriz1f" + i + "c" + j + "").value);
                    }
                }
                for (var i = 0; i < filas2; i++) {
                    for (var j = 0; j < columnas2; j++) {
                        array2.array[i][j] = parseInt(document.getElementById("matriz2f" + i + "c" + j + "").value);
                    }
                }
            }else {
                console.error("Dimensiones en cero.");
            }
        }else {
            array1 = new ArraysMatematicos(filas1, columnas1);
            for (var i = 0; i < filas1; i++) {
                for (var j = 0; j < columnas1; j++) {
                    array1.array[i][j] = parseInt(document.getElementById("matriz1f" + i + "c" + j + "").value);
                }
            }
        }
        switch(operacion){
            case "sumar":
                mostrarResultado(array1.sumar(array2));break;
            case "restar":
                mostrarResultado(array1.restar(array2));break;
            case "multi":
                mostrarResultado(array1.multiplicar(array2));break;
            case "trasp":
                array1.trasponer();
                mostrarResultado(array1);break;
            default:break;
        }
    }
      
    function mostrarResultado(array){
        var resultado = document.getElementById("resultado");
        for(var i = 0; i < array.f; i++){
            for(var j = 0; j <array.c; j++){
                resultado.innerHTML += "" + array.array[i][j] + "  ||  ";
            }
            resultado.innerHTML += "</br>";
        }
    } 

    document.getElementById("continuarOp").addEventListener("click", formularioTam);
}

window.addEventListener("load", init);