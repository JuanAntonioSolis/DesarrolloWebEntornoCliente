document.addEventListener("DOMContentLoaded", () => {

    const parrafos = document.querySelectorAll("p");

    parrafos.forEach(p => {
        p.addEventListener("click",cambiarTexto,false);
        p.addEventListener("mouseover",resaltarTexto,false);
        p.addEventListener("mouseout",resaltarTexto,false);
        
    });

    document.querySelector("#contar").addEventListener("click",contarParrafos);

});

function cambiarTexto(e){
    if(e.target.closest("p")){
        const elemento = e.target.closest("p");

        elemento.textContent = prompt("Escribe un nuevo contenido del párrafo:");
    }
}

function resaltarTexto(e){

    const elemento = e.target.closest("p");

    if(e.target.closest("p")){
        if (e.type == "mouseover"){
            elemento.style.backgroundColor = "lightgrey";
            elemento.style.fontSize = "1.6em";
        } else if(e.type == "mouseout"){
            elemento.style.backgroundColor = "";
            elemento.style.fontSize = "1.5em";
        }
    }
}

function contarParrafos(){
    const cuenta = document.querySelectorAll("p").length;

    alert(`Hay ${cuenta} párrafos en el documento`);
}




