document.addEventListener("DOMContentLoaded", () => {

    const contain = document.querySelector("#contenedor");
    const elemento = document.createElement("p");

    elemento.textContent = "Este párrafo ha sido creado con JavaScript";
    contain.appendChild(elemento);

});

