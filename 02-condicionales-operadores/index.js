let a = "3";
let b = "5";

let resultado = a + b;


// console.log(resultado);

// console.log(5*2);

//Operadores de comparacion

//  console.log( 5 == 5);
//  console.log( 5!= 5);
//  console.log( 5 === "5");
//  console.log( 5 === 5);
//  console.log( 6 !== "6");
//  console.log(5 == "5");

// let edad = 18;
// let mayorDeEdad = 18;

// console.log(edad > mayorDeEdad);
// console.log(edad >= mayorDeEdad);

// console.log(5 < 6);
// console.log( 5 <= 6);
//             t   v       v
// console.log( 5 > 3 && 10 > 4);
// //                f     v
// console.log(false || "dog");
// console.log("cat" || false);


// Estructuras de constrol

// if ( condicion ) {
//     // las instrucciones que tengamos aca
// }

// let edad = 18

// if (edad == 18) {
//     alert("sos menor de edad")
// }

let hora = 21;

// if (hora > 8 ) {
//     alert("buen dia")
// }else{
//   alert("es muy temprano")  
// }

// if (hora > 8 && hora < 12) {
//     alert("buen dia");
// }else if( hora > 12 && hora < 20){
//     alert("buenas tardes");
// }else if ( hora >= 20 && hora < 24) {
//     alert("buenas noches")
// }else{
//     alert(" no molestes es muy temprano")
// }

// if (hora >= 8 && hora <=11) {
//     alert("buen dia");
// }else if (hora >= 12 && hora <=20){
//     alert("buenas tardes")
// }else if (hora >= 21 && hora <= 23){
//     alert("buenas noches")
// }

// let nombre = prompt("ingrese su nombre");
// console.log(nombre);

// if (nombre == ""){
//     alert("no ingresaste un nombre valido")
// }else{
//     alert("Bienvenido " + nombre)
// }

// Solicitar al usuario un (1) número.
// Si el valor está entre dos números, efectuar una de las siguientes salidas, según corresponda:
// “Presupuesto bajo” si está entre 0 y 1000.
// “Presupuesto medio” si está entre 1001 y 3000.
// “Presupuesto alto” si es  mayor que 3000.

// let numero = prompt("Ingrese un numero");

// if(numero >= 0 && numero <= 1000){
//     alert("presupuesto bajo")
// }else if (numero > 1000 && numero <= 3000){
//     alert("presupuesto medio")
// }else if ( numero > 3000) {
//     alert("presupuesto alto")
// }else{
//     alert("no es valido el valor que ingresaste")
// }

// console.log("continua nuestro programa")

// Solicitar al usuario cuatro (4) productos de almacén. Si todos los elementos fueron cargados, realizar una única salida compuesta por el listado de productos. Caso contrario, la salida será “Error: Es necesario cargar todos los productos”.

// let producto1 = prompt("ingrese un producto");
// let producto2 = prompt("ingrese un producto");
// let producto3 = prompt("ingrese un producto");
// let producto4 = prompt("ingrese un producto");

// if ( producto1 != "" && producto2 != "" && producto3 != "" && producto4 != "") {
//     alert("La lista de productos es: " +  producto1 + "  " + producto2 + "  " + producto3 + "  " + producto4)
// }else{
//     alert("Error: Es necesario cargar todos los productos")
// }

let nombre = prompt("ingrese su nombre");
console.log(nombre.toLowerCase());

if ( nombre.toLowerCase() == "juan" ) {
    alert("Tu nombre es juan")
}else{
    alert("Tu nombre no es juan")
}