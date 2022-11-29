const div = document.querySelector('#divClick')

div.addEventListener("click", () => {
    div.style.backgroundColor = 'green'
    div.classList.add('animate')
})

// const dbclick = document.querySelector('#dbClick')

// dbclick.ondbclick = () => {
//     console.log("No es asi");
// }

// dbclick.addEventListener('dbclick', () => {
//     console.log("tampoco es asi");
// })

const mouseover = document.querySelector('#mouseover')

mouseover.addEventListener('mouseover', () => {
    console.log("esta pasando algo");
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