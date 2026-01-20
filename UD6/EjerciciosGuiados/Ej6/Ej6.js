document.addEventListener("DOMContentLoaded", () => {

    let contador = 1;
    const boton = document.querySelector("#btn");
    const lista = document.querySelector("#lista");
    

    boton.addEventListener("click",function(){
        const texto = document.createElement("li");
        contador++;
        texto.textContent = "Elemento " + contador;
        lista.appendChild(texto);
    })

});