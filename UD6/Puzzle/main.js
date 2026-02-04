document.addEventListener("DOMContentLoaded", () => {

    colocarPiezas();
    document.querySelector("#cont").addEventListener("click",contar,false);

});

let estado = [];
let contando = false;
let secs = 0;
let intervalo;

function colocarPiezas() {
    let tablero = document.querySelector("#tablero");
    let nums = [];
    let blanca = document.createElement("img");
    let divB = document.createElement("div");

    divB.setAttribute("id", "15");
    divB.classList.add("celda");
    divB.addEventListener("click", moverPieza, false);

    blanca.setAttribute("src", "./imgs/blanco.gif");

    while (nums.length < 15) {
        let num = Math.floor(Math.random() * (15 - 1 + 1)) + 1;

        if (!nums.includes(num)) {
            nums.push(num);
            estado.push(num);
        }
    }

    for (let i = 0; i < 15; i++) {

        let div = document.createElement("div");
        let foto = document.createElement("img");

        foto.setAttribute("src", "./imgs/" + nums[i] + ".gif");
        div.setAttribute("id", i);
        div.classList.add("celda");

        div.appendChild(foto);

        tablero.appendChild(div);

        div.addEventListener("click", moverPieza, false);

    }
    divB.appendChild(blanca);
    tablero.appendChild(divB);
    estado.push(0);

}


function moverPieza(e) {

    let aux;
    let auxSrc;

    if (e.target.closest("div")) {
        let pieza = e.target.closest("div");

        let pos = parseInt(pieza.id);
        let posBlanca = estado.indexOf(0);

        if ((pos === posBlanca - 4) ||
            (pos === posBlanca + 4) ||
            (pos === posBlanca - 1) ||
            (pos === posBlanca + 1)) {

            aux = estado[pos];
            estado[pos] = estado[posBlanca];
            estado[posBlanca] = aux;

            let piezaF = document.getElementById(pos);
            let piezaB = document.getElementById(posBlanca);

            let fotoF = piezaF.querySelector("img");
            let fotoB = piezaB.querySelector("img");

            auxSrc = fotoF.src;
            fotoF.setAttribute("src", fotoB.src);
            fotoB.setAttribute("src", auxSrc);
        }

        console.log(pos);
        console.log(posBlanca);
    }

}

function contar(){

    let boton = document.querySelector("#cont");
    let crono = document.querySelector("#time");
    let mins = 0;
    
    if (!contando){
        boton.textContent = "Detener Temporizador";
        secs = 0;
        intervalo = setInterval(() => {
            secs++;
            
            if(secs == 60){
                mins++;
                secs = 0;
            }

            crono.textContent = mins + ":" + secs;
        },1000);
        contando = true;
    } else{
        boton.textContent = "Iniciar Temporizador";
        clearInterval(intervalo); 
        contando = false;
    }

    



}

