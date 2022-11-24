/*console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.images);
console.log(document.styleSheets);
console.log(document.forms);
console.log(document.scripts);

console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('nav'));
// let navItems = document.getElementsByClassName('nav')
// for (let i = 0; i < navItems.length; i++) {
    
//     console.log(navItems[i]);
// }
console.log(document.getElementById('titulo'));
console.log(document.getElementsByName('nombre'));


let items = document.getElementsByClassName('navItem')
console.log(items[1]);
for (let i = 0; i < items.length; i++) {
    
    console.log(items[i]);
}*/


/*
const $ = document;


const $h1 = $.getElementById('titulo');

console.log($h1.innerHTML);
console.log($h1.innerText);

$h1.innerHTML = '<p>Modificando el dom con js </p>'
$h1.innerText = '<p> Otra cosa </p>'
$h1.innerHTML = 'Quiero poner solo texto'

*/
/*
const $ = document;


const $h1 = $.getElementById('titulo');
const $ul = $.getElementsByClassName("nav")
console.log($h1.id);
console.log($h1.getAttribute('class'));

$h1.id = 'cosa'
$h1.setAttribute('href', 'link')

console.log($h1.hasAttribute('src'))
console.log($h1.hasAttribute('id'));

$h1.removeAttribute('class')

*/

const $ = document;


const $h1 = $.getElementById('titulo');

 console.log( $h1.style);

//  $h1.style.background = 'red'
 $h1.style.fontSize = '5rem'
 





 let items = $.getElementsByClassName('navItem')
 console.log(items[1]);
 for (let i = 0; i < items.length; i++) {
     console.log(items[i]);

     items[i].style.setProperty("color", 'red')
 }
 
console.log($h1.className);
$h1.classList.add('colorFuente')
// $h1.classList.remove('colorFuente')
$h1.classList.toggle('colorFuente')
$h1.classList.replace('tituloPrincipal', 'otroColor')
console.log($h1.classList);
 
