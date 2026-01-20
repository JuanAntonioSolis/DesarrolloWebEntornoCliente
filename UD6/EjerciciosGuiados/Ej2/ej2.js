

document.addEventListener("DOMContentLoaded", () => {

    const lista = document.querySelector("#lista");
    
    for(let i = 1; i <= 5; i++){
        const elem = document.createElement("li");
        elem.textContent = "Elemento" + i;
        lista.appendChild(elem);
    }

});