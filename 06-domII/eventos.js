const div = document.querySelector('#divClick')

div.addEventListener("click", () => {
    div.style.backgroundColor = 'green'
    div.classList.add('animate')
})


const mouseover = document.querySelector('#mouseover')

mouseover.addEventListener('mouseover', () => {
    mouseover.style.backgroundColor = 'blue'
    mouseover.classList.toggle('animate')
})

const mouseout = document.querySelector('#mouseout')
mouseout.addEventListener('mouseout', () => {
    mouseout.style.backgroundColor = 'tomato'
    mouseout.classList.toggle('animate')
})

const mousedown  = document.querySelector('#mousedown')
mousedown.addEventListener('mousedown', () => {
    mousedown.style.backgroundColor = 'pink'
    mousedown.classList.toggle('animate')
})

const mouseup   = document.querySelector('#mouseup')
mouseup.addEventListener('mouseup', () => {
    mouseup.style.backgroundColor = 'yellow'
    mouseup .classList.toggle('animate')
})

const keypress    = document.querySelector('#keypress')
const containerKeypres = document.querySelector('#container-keypress')
keypress.addEventListener('keypress', (e) => {
   containerKeypres.innerHTML = e.target.value
})

const keydown    = document.querySelector('#keydown')
const containerKeydown = document.querySelector('#container-keydown')
keydown.addEventListener('keydown', (e) => {
    containerKeydown.innerHTML = e.target.value
})

const keyup    = document.querySelector('#keyup')
const containerKeyup = document.querySelector('#container-keyup')
keyup.addEventListener('keyup', (e) => {
    containerKeyup.innerHTML = e.target.value
})



const formulario = document.querySelector('#formulario')
const nombre = document.querySelector('#nombre')

nombre.addEventListener('input', (evento) => {
    console.log(evento);
    console.log(evento.target);
    console.log(evento.target.value);
})

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()
    // console.log(evento.target.children);

    let nombre = evento.target.children[0]
    let apellido = evento.target.children[1]
    console.log('el nombre es ' + nombre.value + ' apellido ' + apellido.value);
})