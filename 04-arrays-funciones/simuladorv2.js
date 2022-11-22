// VARIABLES

let nombre,
    apellido,
    mail,
    contra,
    dinero,
    registroUsuario,
    adentro;

const usuario = [];

// FUNCIONES
// 1-registro

function registro(){
    nombre = prompt("ingrese nombre");
    apellido = prompt("apellido");
    mail = prompt("mail");
    contra = prompt("contraseña");
    let salir;
    while (( (nombre == "") || (apellido == "") || (mail == "") || (contra == "")) || salir == true) {
        alert("Alguno de los datos es incorrecto, volver a cargar");
        salir = confirm("terminar operacion?")
        if (salir == true) {
            break
        }
        nombre = prompt("ingrese nombre");
        apellido = prompt("apellido");
        mail = prompt("mail");
        contra = prompt("contraseña");
    }
    
    if ((nombre != "") && (apellido != "") && (mail != "") && (contra != "") ) {
        alert("registro correcto");
        usuario.push(nombre,apellido,mail,contra)
        return true
    }
}

//2- LOGIN

const login = () => {
    nombre = prompt("ingrese nombre");
    contra = prompt("contra");

    if ((nombre == usuario[0]) && (contra == usuario[3])) {
        alert("Ingresaste a la app");
        return true
    }
}


//3-DEPOSITAR
const depositar = function(){
    let ingresar = Number(prompt("cuanto queres depositar"))

    if (ingresar > 0) {
        alert("operacion correcta " + ingresar)
        usuario.push(ingresar)
    }
}

//4-EXTRAER

const extraer = () => {
    let ingresar = Number(prompt("cuanto dinero queres?"))

    if (ingresar <= usuario[4]) {
       let resultado = usuario[4] - ingresar;
        usuario[4] = resultado
        alert("operacion correcta, te queda saldo: " + usuario[4])
    }
}

// 

// PROGRAMA 
registroUsuario = confirm("estas registrado?")

if (!registroUsuario) {
   adentro = registro()
}else{
   adentro = login()
}


if (adentro == true) {
    let opcionMenu;
    opcionMenu = Number(prompt("1-depositar, 2-extraer"))
    
    while (opcionMenu != 3) {
        switch (opcionMenu) {
            case 1:
                depositar()
                break;
            case 2:
                extraer()
                break;
            default:
                alert("opcion incorrecta")
                break;
        }
        opcionMenu = Number(prompt("1-depositar, 2-extraer"))
    }
    
 

}