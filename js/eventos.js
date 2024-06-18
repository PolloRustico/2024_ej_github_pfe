function eventoPorAtributo(){
    alert('Evento por atributo');
}

eventoPorElemento.onclick = function(){
    alert('Evento por elemento');
}

tituloPorElemento.onmouseover = function() {
    let titulo = document.getElementById('tituloPorElemento')
    console.log(titulo)
    titulo.classList.remove("texto-negro")
    titulo.classList.add("texto-rojo")
}

tituloPorElemento.onmouseout = function() {
    let titulo = document.getElementById('tituloPorElemento')
    console.log(titulo)
    titulo.classList.remove("texto-rojo")
    titulo.classList.add("texto-negro")
}

let btnEventoPorlListener =document.getElementById("eventoPorListener")
btnEventoPorlListener.addEventListener("click", function (){
    alert("Alerta de evento por listener (oyente)")
})