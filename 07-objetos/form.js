const form = document.querySelector('#form')

form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    console.dir(evento.target);
    const formData = new FormData(form)

    console.log(formData.get('nombre'));

    let nombre = formData.get('nombre').trim()
    let direccion = formData.get('direccion').trim()
    
    console.log(nombre);  
    if (nombre == '') {
        errorInput(evento.target.children[0], 'error al completar el input')
    }else{
        okInput(evento.target.children[0], 'datos correctos')
    }

    if (direccion == '') {
        errorInput(evento.target.children[1], 'error al completar el input')
    }else{
        okInput(evento.target.children[1], 'datos correctos')
    
    }

    if ((nombre != '') && (direccion != '')) {
        alert('datos enviados correctamente')
        form.reset()
    }
})

function errorInput(input, msj){
    input.style.border = '2px solid red'
    input.placeholder = msj
}

function okInput(input, msj) {
    input.style.border = '2px solid green'
    input.placeholder = msj
}