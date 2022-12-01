/* ONJETOS */
const div = document.querySelector('#contenedor')


const animal = {
   // propiedades
    nombre: 'More',
    raza: 'pichicho',
    // duenio: ['dueño 1', 'dueño 2'],

    // metodos
    // saludar: function(){
    //     console.log('hola soy more ' );
    // }
    saludar(){
        console.log('hola soy more');
    }
}

console.log(animal);
console.log(animal.nombre);
// animal.saludar()
// console.log(animal.duenio);
// console.log(animal.duenio[1]);

// funcion constructora 

function Animal(nombre, raza){
    
    // propiedades
    this.nombre = nombre,
    this.raza = raza

    // metodos
    // this.corriendo = function(){
    //     alert('toy corriendo')
    // }

    // this.saludar = function(){
    //     alert(`hola soy ${this.nombre}`)
    // }
}

Animal.prototype.saludar = function(){
    alert(`hola soy ${this.nombre}`)
 }

Animal.prototype.corriendo = function(){
        alert('toy corriendo')
 }

const animal1 = new Animal('more', 'pichicho');
console.log(animal1);
// animal1.corriendo()
// animal1.saludar()

const animal2 = new Animal('carlos', 'caniche toy')
console.log(animal2);
// console.log(animal2.nombre);
// animal2.saludar()

// herencia 
function Perro(nombre,raza,tamanio, color){
    this.super = Animal,
    this.super(nombre),
    this.raza = raza,
    this.tamanio = tamanio,
    this.color = color
}

Perro.prototype = new Animal()
Perro.prototype.constructor = Perro

const more = new Perro('more', 'nada', 'grande', 'negro')
console.log(more);

/* objeto class*/
class Usuario {
    constructor(nombre, apellido, cel ,mail){
        this.nombre = nombre,
        this.apellido = apellido,
        this.cel = cel,
        this.mail = mail
    }

    // metodos}
    registro(){
        if ( (this.nombre != '') && (this.apellido != '') ) {
            div.innerHTML = `<h1>Usuario:${this.nombre}, registro correcto</h1>`
        }else{
            div.innerHTML = `<h1 class="error">tenes algun dato mal, intentalo nuevamente</h1>`
        }
    }
}

// let nombre = prompt('nombre')
// let apellido = prompt('apellido')
// let mail = prompt('mail')
// let cel = prompt('cel')


// const usuario = new Usuario(nombre, apellido, cel, mail)
// console.log(usuario);
// usuario.registro()

// funciones de orden superior

function mayorQue(numero){
    return (numero2) => numero < numero2
}

let mayorQue10 = mayorQue(10)
console.log(mayorQue10);

console.log(mayorQue10(5))
console.log(mayorQue10(10));
console.log(mayorQue10(11));

// funcion como argumento

const numeros = [1, 2, 3, 4, 5]

function porCadaUno(arr, fn){
    for (const elemento of arr) {
        fn(elemento)
    }
}

porCadaUno(numeros, console.log)
porCadaUno(numeros, (numero) => {
    console.log(numero * 10);
})

const frutas = ['🍎','🍏','🍇','🍈','🍉','🍊','🍌','🍍','🍑']

let resultado = frutas.find( elemento =>  elemento == '🍍' )
console.log(resultado);

const palabras = ['diplomatura', 'front', 'end', 'UNTREF']
let resultadoFilter = palabras.filter( elemento => elemento.length >= 5 )
console.log(resultadoFilter);

let resultadoFindIndex = frutas.findIndex( el => el == '🍋' )
console.log(resultadoFindIndex);