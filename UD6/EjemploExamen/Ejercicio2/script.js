document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#add").addEventListener("click", agregarElemento, false);
    document.querySelector("#del").addEventListener("click", eliminarElemento, false);
    document.querySelector('#delEsp').addEventListener("click", eliminarElementoEspecifico, false);
});

function agregarElemento() {
    const lista = document.querySelector("#lista");
    const text = document.querySelector("#elemento");

    const elemLista = document.createElement("li");

    elemLista.textContent = text.value;

    lista.appendChild(elemLista);

    text.value = "";

}

function eliminarElemento() {
    const lista = document.querySelector("#lista");
    lista.removeChild(lista.lastChild);
}

function eliminarElementoEspecifico() {
    const lista = document.querySelector("#lista");
    const elementos = document.querySelectorAll("li");
    const pos = document.querySelector("#idEsp");

    const posicion = parseInt(pos.value);


    lista.removeChild(elementos[posicion - 1]);


    pos.value = "";


}