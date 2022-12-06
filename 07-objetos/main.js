const main = document.querySelector('#comidas')

const menu = [
    {
        id: 1,
        comida:'pizza',
        precio: 1500,
        img: './multimedia/pizza.jpeg'
    },
    {   id:2,
        comida:'empanadas',
        precio: 2000,
        img: './multimedia/empanadas.png'
    },
    {   id:3,
        comida:'tarta',
        precio: 1300,
        img: './multimedia/tarta.jpg'
    },
    {   id:4,
        comida:'hambur',
        precio: 2000,
        img: './multimedia/hambur.jpg'
    }
]

const pedidos = JSON.parse( localStorage.getItem('pedidoUsuario') ) || []

const html = (arr) => {
    arr.forEach(element => {
        let {comida, precio, id, img} = element
        main.innerHTML += `
                        <div class="cardProduct">
                            <p>${comida}</p>
                            <img src=${img} />
                            <p>$${precio}</p>
                            <button class='btn' id=${id}>Solicitar menu</button>
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

