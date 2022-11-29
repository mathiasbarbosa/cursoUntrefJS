/* selectores */

// let container = document.querySelector('.container')
                // document.querySelector('#id')
                // document.querySelector('h1')
// console.log(container);

let containers = document.querySelectorAll('.container')
// let galeria = document.querySelectorAll('#galeria')
console.log(containers);
//console.log(galeria);

/* Recorrer el dom */ 
const $container = document.querySelector('.container')
// console.log($container);
// console.log($container.children);
// console.log($container.children[1]);
// console.log($container.parentElement);
// console.log($container.firstElementChild);
// console.log($container.lastElementChild);
// console.log($container.previousElementSibling);
// console.log($container.nextElementSibling);

/* crear elementos HTML*/

const figure = document.createElement('figure'),
        img = document.createElement('img'),
        figcaption = document.createElement('figcaption'),
        text = document.createTextNode('animals')

        console.log(figure);

        img.setAttribute('src', 'https://placeimg.com/200/200/animals');
        img.setAttribute('alt', 'animals')

        figcaption.appendChild(text);
        figure.appendChild(img);
        figure.appendChild(figcaption);
        
        console.log(figure);

        $container.appendChild(figure)

const figure2 = document.createElement('figure')
figure2.classList.add("estilosIMG")
figure2.innerHTML = '<img src="https://placeimg.com/200/200/tech" alt=""><figcaption> Tech<figcaption>'

$container.appendChild(figure2)

const estaciones = ['otoño', 'invierno', 'primavera', 'verano']
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio']
//  const ul = document.createElement('ul')

// document.body.appendChild(ul);



// estaciones.forEach( elemento => {
//     let li = document.createElement('li')
//     li.textContent = elemento
//     ul.appendChild(li)
// })

function generarListas(array) {
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    array.forEach( elemento => {
        let li = document.createElement('li')
        li.textContent = elemento
        ul.appendChild(li)
    })

}

generarListas(estaciones)
generarListas(meses)

const ul3 = document.createElement('ul'),
    fragment = document.createDocumentFragment();

    document.body.appendChild(ul3)

    meses.forEach( el => {
        let li = document.createElement('li')
        li.textContent = el
        fragment.appendChild(li)
    })

    ul3.appendChild(fragment)

const template = document.querySelector('#template-img').content,
        fragment2 = document.createDocumentFragment(),
        cardContent = [
            {
                img:"https://placeimg.com/200/200/nature",
                title: "nature"
            },
            {
                img:"https://placeimg.com/200/200/people",
                title: "people"
            }
        ]
     
cardContent.forEach( elemento => {
        template.querySelector('img').setAttribute('src', elemento.img );
        template.querySelector('img').setAttribute('alt', elemento.title );
        template.querySelector('figcaption').textContent = elemento.title;

        let copia = document.importNode(template, true);

        fragment2.appendChild(copia)
})

$container.appendChild(fragment2)

/*
insertAdjacent
    insertAdjacentElement(position,el)
    insertAdjacentHTML(position,html)
    insertAdjacentText(position,text)

Posiciones:
    beforebegin(hermano anterior)
    afterbegin(primer hijo)
    beforebegin(ultimo hijo)
    afterend(hermano siguiente
*/

/* otros metodos
        prepend(elemento) agrega como primer elemento hijo
        before() como hermano anterior 
        append() como ultimo hijo
        after() como hermano posterior
*/ 

