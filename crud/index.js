
// CRUD
const $form = document.querySelector('form')
const $div = document.querySelector('#container-cards')
const comida = document.querySelector('#comida')
const precio = document.querySelector('#precio')
const imagen = document.querySelector('#imagen')
let bandera = false;
const btnCargarActualizar = document.querySelector('#btnCargarActualizar')


const create = async (data) => {
   try {
    let response = await fetch('https://6334c66fea0de5318a08cd43.mockapi.io/menu',{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })

    if (response.status === 201) {
        alert("recurso creado correctamente")
    }else{
        new Error('Error en la solicitud')
    }
   } catch (error) {
    alert(error)
   }
}



const read = async () => {
    try {
        let response = await fetch('https://6334c66fea0de5318a08cd43.mockapi.io/menu')
        console.log(response);
    if (response.status === 200) {
        let data = await response.json()
        htmlCode(data)

    }else{
        new Error('Error en la solicitud')
    }
    } catch (error) {
        
    }

}

const update = async (id, data) => {
    let response = await fetch(`https://6334c66fea0de5318a08cd43.mockapi.io/menu/${id}`,{
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })

    if (response.ok) {
        let data = response.json()
        console.log(data);
        // htmlCode(data)
    }

}

const requestDelete = () => {

}


const htmlCode = (array) => {
    $div.innerHTML = ''
    array.forEach(element => {
        let {comida, precio, img, id} = element
        let card = document.createElement('div')
        card.classList.add('card')
        card.style.width = '18rem'
        card.innerHTML = `
                        <img src=${img} class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${comida}</h5>
                        <p class="card-text">${precio}.</p>
                        <button id=${id} data-precio=${precio} data-comida=${comida} data-imagen=${img} class="btn btn-primary btn-actualizar">Actualizar</button>
                        <button class="btn btn-primary">Eliminar</button>
                        </div>
        
        `    
        $div.append(card)
        btnActualizar()
    });
}


const btnActualizar = () => {
    let btns = document.querySelectorAll('.btn-actualizar')
    for (const btn of btns) {
        btn.addEventListener("click", (evento) => {
            bandera = true
            console.dir( evento.target.dataset.comida);
            comida.value = evento.target.dataset.comida
            precio.value = evento.target.dataset.precio
            imagen.value = evento.target.dataset.imagen
            btnCargarActualizar.setAttribute('data-id',evento.target.id )
        })
    }
}

$form.addEventListener('submit', async (evento) => {
    evento.preventDefault()

    let dataForm = new FormData($form)
    let nuevaComida = {
        comida: dataForm.get('inputComida'),
        precio: dataForm.get('inputPrecio'),
        img: dataForm.get('inputImagen')
    }
    if (bandera == false) {
        await create(nuevaComida)
       
        
    }else{
        console.dir(btnCargarActualizar.dataset.id);
        let id = btnCargarActualizar.dataset.id
        await update(id, nuevaComida)
        bandera = false
    }

    await read()
    $form.reset()
})

document.addEventListener('DOMContentLoaded',read)