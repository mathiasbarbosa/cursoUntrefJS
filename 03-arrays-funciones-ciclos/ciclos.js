console.log("Hola fuera de ciclo");
console.log("Hola fuera de ciclo");
console.log("Hola fuera de ciclo");
console.log("Hola fuera de ciclo");
console.log("Hola fuera de ciclo");

// while
// Contador
// let indice = 1;

//         // condicion
// while(indice <= 5){
//    console.log("Hola con ciclo while");

//    // actualizacion de la variable
//    console.log(indice);
//    indice++

// }

// let numero;

// do{
//         numero = Number(prompt("ingrese un numero"))
//         alert("me ejecuto una vez")
// }while(numero < 10)


// contador , condicion , atualizacion de la variable - contador
//break
//continue

for(let index = 0; index <= 10; index++){
        let alumno = prompt("ingrese nombre")
        
        if (index == 3 ) {
                
                continue
                alert("Alumno: " + alumno.toUpperCase() + " numero " + index )
        }else{
                alert("Alumno: " + alumno.toUpperCase() + " numero " + index )
        }
       
}