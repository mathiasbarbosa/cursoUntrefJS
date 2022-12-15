
// secuencial
// console.log('hola');
// console.log('como estas?');
// console.log('nos vemos');


// console.log('hola');
// setTimeout(() => {
//     console.log('como estas?');
// }, 0);

// console.log('nos vemos');


  console.log(  fetch('https://rickandmortyapi.com/api/character') );

async function get(){
    try {
        let response = await fetch('https://rickandmortyapi.com/api/character')
        if (response.ok) {
            let data = await response.json()
            console.log(response);
            console.log(data.results);
            htmlCode(data.results)
        }
        else{
            new Error('Error en la solicitud ' + response.statusText)
            //throw Error("Error al realizar la solicitud")
        }
    } catch (error) {
        alert(error.message)
    }
  }

  const htmlCode = (array) => {
    array.map( el => {
        console.log(el.name);
    })
  }

  // get()


  const datos = [
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

function getDatos(){
    return datos
}

// console.log(    getDatos()  );

// PROMESAS https://es.javascript.info/promise-basics

const getDatosPromise = () => {
   if (datos.length === 0) {
     return Promise.reject(new Error('error reject')) 
   }else{
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
        resolve(datos) 
        }, 1500);
    } )
   }
}

// console.log( getDatosPromise());

// getDatosPromise()
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });


// //  Async https://es.javascript.info/async-await
async function datosAsyncAwait() {
    try {
        const data = await getDatosPromise()
        console.log(data);     
    } catch (error) {
        console.log(error.message);
    }
   
}

datosAsyncAwait()

setInterval(() => {
    console.log('que tal');
    
}, 500);