document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#contenedor").addEventListener("click", manejador);
    document.querySelector("#contenedor").addEventListener("mouseover", manejador);
    document.querySelector("#contenedor").addEventListener("mouseout", manejador);
    document.querySelector("#contenedor").addEventListener("mouseout", manejador);
    
    
    
    document.querySelector("#btn").addEventListener("click", contarParrafos, false);
});

function manejador(e) {

    if (e.target.closest("p")) {
        switch (e.type) {
            case "click":
                const elemento1 = e.target.closest("p");
                elemento1.innerHTML = prompt("Introduce el texto");
                console.log(elemento1);
                break;
            case "mouseover":
                let elemento = e.target.closest("p");
                elemento.style.backgroundColor = "red"
                console.log(elemento);
                break;
            case "mouseout":
                e.target.closest("p").style.backgroundColor = "white";
                break;
            default:
                break;
        }
    }

    if(e.target.closest("li")){
        switch (e.type) {
            case "click":
                const nuevoL = document.createElement("li");
                nuevoL.textContent = prompt("Escribe");

                const actual = e.target.closest("li");
                actual.appendChild(nuevoL);
                break;
            case "mouseover":
                const elem = e.target.closest("li");
                elem.remove();
                break;
            
            default:
                break;
        }
    }

}

function contarParrafos() {
    const cuenta = document.querySelectorAll("p").length;

    alert("Hay " + cuenta + " párrafos en el documento");
}