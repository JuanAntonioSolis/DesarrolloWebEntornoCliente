window.onload = init;

function init() {
    let primerDiv = document.querySelector("#cont1");
    let otroDiv = document.querySelector("#cont2");


    let boton = document.querySelector("#botonImg");
    boton.addEventListener("click", agregarImagen, false);

    const nuevoParrafo = document.createElement("p");

    nuevoParrafo.textContent = "Párrafo creado desde JavaScript";

    nuevoParrafo.style.color = "white";

    primerDiv.appendChild(nuevoParrafo);

    /////////////////////////////////////////

    const inputParrafo = document.createElement("p");

    inputParrafo.textContent = prompt("Escribe tu párrafo");

    inputParrafo.style.color = "blue";

    otroDiv.appendChild(inputParrafo);

    /////////////////////////////////////////

    const numParrafos = document.querySelectorAll("p");

    console.log(numParrafos.length);
}

function agregarImagen() {
    const div3 = document.querySelector("#cont3");
    let imagen = document.createElement("img");
    imagen.src = "captura.png";
    imagen.alt = "Imagen ISSA Cuidados";
    div3.appendChild(imagen);
}