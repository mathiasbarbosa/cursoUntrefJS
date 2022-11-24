const btn = document.getElementById('btn')

// btn.onclick = function() {
//     alert("ahora si! evento desde js")
// }

// btn.onclick = function() {
//     alert(" este es el ultimo evento click")
// }

// btn.onmouseout = () => {
//     alert(" de otro evento")
// }

function eventoClick() {
    alert("alert 3 con add ...")
}


btn.addEventListener("click", () => {
    alert("alert 1 con add event listener")
})

btn.addEventListener("click", function() {
    alert("alert 2 con add event...")
})

btn.addEventListener("click", eventoClick)

