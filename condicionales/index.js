var x = 3;
var y = 6;
if(x > y){
  console.log("X es mayor que Y");
}else{
  console.log("Y es mayor que Y ");
}else if(x == y){
  console.log("X es igual a Y");
}

var dia = new Date().getDay();
console.log(dia);

switch (dia) {
  case 1:
    console.log("Hoy es lunes");
  case 2:
    console.log("Hoy es martes");
  case 3:
    console.log("Hoy es miercoles");
  case 4:
    console.log("Hoy es jueves");
  case 5:
    console.log("Hoy es viernes");
  case 6:
    console.log("Hoy es sabado");
  case 7:
    console.log("Hoy es domingo");
  break;
  default:
    console.log("Nro del dia de la semana: ", new Date().getDay());

}
