class Pedido{
    constructor(items){
        this.items = items
    }

    htmlCode(){
        this.items.map( elemento => {
            document.querySelector('#orden').innerHTML += `
                        <div>
                            <p>${elemento.comida}</p>
                            <p>${elemento.precio}</p>
                            <button class="btn-eliminar" data-id=${elemento.id}>elimar</button>
                            <button>+</button>
                            <button>-</button>       
                        </div>
            `
        })
    }

    eliminarItem(){
       let btns =  document.querySelectorAll('.btn-eliminar')
       for (const btn of btns) {
            btn.addEventListener("click", (evento) => {
                console.dir( evento.target);
                console.dir( evento.target.attributes);
                console.dir( evento.target.attributes[1]);
                console.dir( evento.target.attributes[1].textContent);
                let dataId = evento.target.attributes[1].textContent
                let busqueda = this.items.findIndex( el => el.id == dataId )
                this.items.splice(busqueda,1)
                console.log(this.items);
                console.log(evento.target.parentElement)
                let nodoEliminar = evento.target.parentNode
                nodoEliminar.remove()

            })
       }
    }
}

const arrayPedido = JSON.parse( localStorage.getItem('pedidoUsuario') )

const orden = new Pedido(arrayPedido)
console.log(orden);

orden.htmlCode()
orden.eliminarItem()