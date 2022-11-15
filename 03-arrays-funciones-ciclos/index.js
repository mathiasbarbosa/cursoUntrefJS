/* 
EJERCICIO Simulador banco
1-REGISTRAR USUARIO
MONTO DE DINERO
2- INICIAR SESION 
3- DEPOSITAR
4 -EXTRAER
5- CONSULTAR MONEDAS
6- CONVERTIR DIVISAS
*/

// Algoritmo:  n algoritmo ​ es un conjunto de instrucciones o reglas definidas y no-ambiguas, ordenadas y finitas que permite, típicamente, solucionar un problema, realizar un cómputo, procesar datos y llevar a cabo otras tareas o actividades

// 1-REGISTRAR USUARIO

let nombreRegistro = prompt("Ingrese nombre de usuario");
let mail = prompt("ingrese mail");
let contra = prompt("seleccione su contraseña");

if( (nombreRegistro != "") && (mail != "") && (contra != "")){
    alert("El usuario se registro correctamente")
    alert("Bienvenido" + " " + nombreRegistro)
}else{
    alert("Ingresaste algun dato incorrecto")
}


// 2- INICIAR SESION
let nombreLogin = prompt("ingrese su nombre de usuario");
let contraLogin = prompt("ingrese su contraseña");

if ((nombreLogin == nombreRegistro) && (contraLogin == contra) ) {
    alert("ingreso correcto")
    let depositar = confirm("¿desea realizar un deposito?");
    console.log(depositar) ; // true - false
    if (depositar == true) {
        let dinero = prompt("Ingrese la cantidad de dinero");
        console.log(dinero);
        if ( dinero != NaN && dinero > 0) {
            alert("deposito realizado")
        }else{
            alert("tenemos un error")
        }
    }

}else{
    alert("error en los datos de login")
}
