document.addEventListener("DOMContentLoaded", () => {


    document.querySelector("#addButton").addEventListener("click", addText, false);
    document.querySelector("#deleteFirst").addEventListener("click",deleteF,false);
    document.querySelector("#deleteLast").addEventListener("click",deleteL,false);
    document.querySelector("li").addEventListener("click",function(){
        document.querySelector("li").remove();
    });
});

function addText() {
    const elemento = document.createElement("li");
    elemento.textContent = prompt("Escribe tu párrafo");
    document.querySelector("#lista").appendChild(elemento);
    elemento.addEventListener("click",function(){elemento.remove();});
}

function deleteF(){
    const lista = document.querySelector("#lista");
    lista.removeChild(lista.firstChild);
}

function deleteL(){
    const lista = document.querySelector("#lista");
    lista.removeChild(lista.lastChild);
}

