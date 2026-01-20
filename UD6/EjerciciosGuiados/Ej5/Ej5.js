document.addEventListener("DOMContentLoaded", () => {

    const boton = document.querySelector("#btn");
    const ct = document.querySelector("#contenedor");

    boton.addEventListener("click",function(){
        const parr = document.createElement("p");
        parr.textContent = "Texto nuevo";
        ct.appendChild(parr);
    });

});