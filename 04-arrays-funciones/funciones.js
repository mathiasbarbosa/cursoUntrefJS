


// declarar la funcion 

// function saludar(parametro = "Nombre por defecto"){
//     // dar instrucciones
//     alert("Hola, como andas? " + parametro)
// }

// llamar a la funcion
// saludar("Juan")
// saludar("Pablo")
// saludar("Carlos")
// saludar()
// for (let i = 0; i < 5 ; i++) {
//     saludar()
// }


function suma (numero1, numero2){
    let resultado = numero1 + numero2
    console.log("el resultado es: " + resultado);
    return resultado 
}

function resta (numero1, numero2) {
    let resultado = numero1 - numero2 
    return resultado  
}

function mul(numero1, numero2) {
    let resultado = numero1 * numero2;
    return resultado
}

function div(numero1, numero2) {
    let resultado = numero1 / numero2;
    return resultado
}

function calculadora (numero1,numero2,op){

    switch (op) {
        case "+":
               return suma(numero1,numero2)
            break;
        case "-":
           return resta(numero1, numero2)
        break;
        case "*":
            return mul(numero1, numero2)
        break;    
        case "/":
            return div(numero1, numero2)
        break;
        default:
            break;
    }

}



// let operacion,
//     num1,
//     num2,
//     resultado

// operacion = prompt("Que queres calcular + - * /");
// num1 = Number(prompt("ingresar num"));
// num2 = Number(prompt("ingresar segundo num"));


// resultado = calculadora(num1, num2, operacion);

// alert("el resultado es " + resultado)



/*Crea una función que reciba 2 parámetros, precio e iva, y devuelva el precio con iva incluido. Si no recibe el iva, aplicará el 21 por ciento por defecto. */

function calcularIva(precio, iva = 1.21){
    
    let resultado = precio * iva;
    return resultado
}

// let precio = parseFloat(prompt("precio del producto"));
// let iva = parseFloat(prompt("ingrese iva"));


// let productoIva = calcularIva(precio, iva)

// alert(productoIva)


/// Funcion tradicional
// function suma() {
//     // instrucciones
// }

// funcion flecha
const sumaFlecha = (num1, num2) => {
    let resultado = num1 + num2 
    console.log("el resultado es "  + resultado);
    return resultado
}

const sumReturn = (num1, num2) => num1 + num2

// let resultado = sumReturn(5,3)

// console.log(resultado);

sumaFlecha(5,4)

const funcFlecha = nombre => alert("hola " + nombre) 

funcFlecha("Lo que sea")