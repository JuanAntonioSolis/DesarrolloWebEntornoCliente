

document.addEventListener("DOMContentLoaded", () => {

    const head = document.querySelector("#titulo");
    head.textContent = "Titulo modificado desde JavaScript";
    head.classList.add("destacado");

});