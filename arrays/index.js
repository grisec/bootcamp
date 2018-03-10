//Array vacio
var dias = [];

var marcaAutos = ["Kia", "Toyota", "Nissan"];

console.log(marcaAutos);
//Retorna la cantidad de elementos
console.log(marcaAutos.length)

console.log(marcaAutos[0]);
console.log(marcaAutos[1]);
console.log(marcaAutos[2]);
//Ordena ascendente
console.log(marcaAutos.sort());
console.log(marcaAutos.sort().reverse());

var numero = [1, 3, 8, 5, 9];
console.log(numero.sort());
console.log(numero.sort().reverse());

// Agregar un elemento al final
 marcaAutos.push("Mazda");
 console.log(marcaAutos);
 //Eliminar el ultimo elemento
 marcaAutos.pop("Mazda");
 console.log(marcaAutos);

 marcaAutos.shift();
 console.log(marcaAutos);
//Setear elemento conociendo el indice
 marcaAutos[0]= "xxx";
 console.log(marcaAutos);
//Borrar elemento conociendo el index
delete marcaAutos[0];
console.log(marcaAutos);
