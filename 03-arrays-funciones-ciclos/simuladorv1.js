
let opcion = parseInt(prompt("Que queres hacer? \n 1-registro \n 2-login \n 3-depositar \n 4-extraer \n 5-salir"));
console.log(opcion);
while ( (opcion !== 5) && (opcion <= 5)  ) {
    
    if( opcion === 1){

        let nombreRegistro = prompt("Ingrese nombre de usuario");
        let mail = prompt("ingrese mail");
        let contra = prompt("seleccione su contraseña");
        if( (nombreRegistro != "") && (mail != "") && (contra != "")){
            alert("El usuario se registro correctamente")
            alert("Bienvenido" + " " + nombreRegistro)
        }else{
            alert("Ingresaste algun dato incorrecto")
        }
        
    }else if (opcion === 2){
        let nombreLogin = prompt("ingrese su nombre de usuario");
        let contraLogin = prompt("ingrese su contraseña");

        if ((nombreLogin == nombreRegistro) && (contraLogin == contra) ) {
                 alert("ingreso correcto")
            }else{
                alert("error en los datos de login")
            }
    }

    opcion = parseInt(prompt("Que queres hacer? \n 1-registro \n 2-login \n 3-depositar \n 4-extraer \n 5-salir"));
}



// while ( (opcion !== 5) && (opcion <= 5)  ) {
    
//    switch (opcion) {
//     case 1:
//             let nombreRegistro = prompt("Ingrese nombre de usuario");
//             let mail = prompt("ingrese mail");
//             let contra = prompt("seleccione su contraseña");
//             if( (nombreRegistro != "") && (mail != "") && (contra != "")){
//                 alert("El usuario se registro correctamente")
//                 alert("Bienvenido" + " " + nombreRegistro) 
//             }
//             else{
//                 alert("Ingresaste algun dato incorrecto")
//                 }
//    break
//     case 2:
//         let nombreLogin = prompt("ingrese su nombre de usuario");
//         let contraLogin = prompt("ingrese su contraseña");
        
//                if ((nombreLogin == nombreRegistro) && (contraLogin == contra) ) {
//                         alert("ingreso correcto")
//                 }else{
//                     alert("error en los datos de login")
//                 }
         
//     break
   
//     default:
//         break;
//    }



//     opcion = parseInt(prompt("Que queres hacer? \n 1-registro \n 2-login \n 3-depositar \n 4-extraer \n 5-salir"));
// }
