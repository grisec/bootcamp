console.log("funciooo");

function suma(){
  var x = 4;
  var y = 3;
  console.log(x + y);
}

suma();

function restar(x , y){
  var resutlado = x - y;
  console.log(resutlado);
}

restar(9, 5);

function funcion(nombre, apellido){
  var nombreCompleto = nombre +" "+apellido;
  return nombreCompleto;
}

var nombreCompleto = funcion("Juan", "Perez");
console.log(nombreCompleto);
console.log(typeof(nombreCompleto));

//Funciones Anonimas
var anonima = function(){
  return 3 + 5;
}
console.log(anonima());

console.log(function(a, b){return a - b}(5, 1));
//Funcion anonima es6 =>(funcion)
//(a, b) => {return "Arrow Funcion"}
