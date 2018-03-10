var i = 0;
for(i; i<5; i++){
  console.log("Eje.. nro:", i);
}


/*Ejemplo1 JSON
var persona ={
  nombre:"Juan",
  apellido:"Perez",
  edad:23,
  nombreCompleto: function(){return this.nombre+" "+this.apellido};
}*/

//Ejemplo para recorrer el JSON
var txt = "";

// variable json
var person = {fname:"John", lname:"Doe", age:25}
var atributo;
// para obtene el atributo
for(atributo in person){
  //console.log(txt);
  //txt += person[atributo] + " ";
  console.log(person[atributo] + " ");
}
//Array de JSON, atributo:titulo ; valor:texto
var posts = [
  {
    titulo:"Programacion en javascript ",
    texto:"javascript es un lenguaje de programacion",
  },
  {
    titulo:"Intro a Linux ",
    texto:"libro de linux",
  },
  {
    titulo:"No usen Windows pirata ",
    texto:"software de pago ",
  }
]
//map recorre una JSON, trae los valores y tambien se puede recuperar el json completo
posts.map(
  function(post){
    // trae el json crudo con su formato
    console.log(post);
    var titulo = post.titulo;
    var texto = post.texto;
    console.log(titulo);
    console.log(texto);
})
