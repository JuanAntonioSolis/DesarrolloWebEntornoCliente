document.addEventListener("DOMContentLoaded", () => {

    const filas = document.querySelectorAll("tr");

    document.querySelector("#addRow").addEventListener("click", addFila, false);
    document.querySelector("#removeRow").addEventListener("click", delFila, false);
    
    filas.forEach(function(tr){
        tr.addEventListener("click",function(){
            tr.remove();
        });
    });
});

function addFila() {
    const tabla = document.querySelector("#tabla");
    const fila = document.createElement("tr");

    for (let i = 1; i <= 3; i++) {
        let col = document.createElement("td");
        col.textContent = prompt("Escribe el contenido");
        fila.appendChild(col);
        fila.addEventListener("click",function(){fila.remove();});
    }

    tabla.appendChild(fila);
}

function delFila(){
    const filas = document.querySelector("tr");
    filas.remove();
}




