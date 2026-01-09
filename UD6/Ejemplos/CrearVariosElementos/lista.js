document.addEventListener("DOMContentLoaded", () => {
    for (let i = 1; i <= 5; i++) {
        const elementoLi = document.createElement("li");
        elementoLi.textContent = "Elemento de la lista " + i;
        document.querySelector("#lista").appendChild(elementoLi);
    }

    document.querySelector("#boton").addEventListener("click", addElemento, false);
    document.querySelector("#boton1").addEventListener("click", deleteLista, false);
    document.querySelector("#boton2").addEventListener("click", deleteElementoLista, false);
    
    
});

function addElemento() {
    let numLista = document.querySelectorAll("li").length;

    let elemento = document.createElement("li");
    elemento.textContent = "Elemento de la lista " + (numLista+1);
    document.querySelector("#lista").appendChild(elemento);
}

function deleteLista(){
    let lista = document.querySelector("#lista");

    lista.remove();
}

function deleteElementoLista(){
    const elemento = document.querySelector("#lista li").length;

    document.querySelector("#lista").removeChild(document.querySelector("#lista").lastChild);
}

