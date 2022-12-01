const main = document.querySelector('#comidas')

const menu = [
    {
    id: 1,
    comida:'pizza',
    precio: 1500
    },
    {   id:2,
        comida:'empanadas',
        precio: 2000
    },
    {   id:3,
        comida:'tarta',
        precio: 1300
    },
    {   id:4,
        comida:'hambur',
        precio: 2000
    }
]

const pedidos = [];

const html = (arr) => {
    arr.forEach(element => {
        main.innerHTML += `
                        <div>
                            <p>${element.comida}</p>
                            <p>$${element.precio}</p>
                            <button class='btn' id=${element.id}>Solicitar menu</button>
                        </div>
        
        `
    });
}

const solicitarPedido = () => {
    let botones = document.querySelectorAll('.btn')
    console.log(botones);
    for (const btn of botones) {
        btn.addEventListener('click', (evento) => {
            console.log(evento.target.id);
            let resultado = menu.find( el => el.id == evento.target.id)
            console.log(resultado);
            if (resultado == undefined) {
                alert('ocurrio un error')
            }else{
                pedidos.push(resultado)
                localStorage.setItem('pedidoUsuario',JSON.stringify(pedidos))
                console.log(pedidos);
            }

        })
    }
}

html(menu)
solicitarPedido()