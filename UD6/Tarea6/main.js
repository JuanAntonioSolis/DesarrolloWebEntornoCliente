let color = "red";

document.addEventListener("DOMContentLoaded", () => {

    generarTabla();

    document.querySelector("#blanco").addEventListener("click", () => {
        color = "white";
    });

    document.querySelector("#rojo").addEventListener("click", () => {
        color = "red";
    });

    document.querySelector("#limpia").addEventListener("click", () => {
        color = "red";
        document.querySelectorAll("#container div").forEach(div => {
            div.classList.remove("red", "white");
        });
    });

    document.querySelector("#ajedrez").addEventListener("click", pintarAjedrez, false);

    document.querySelector("#sumRojas").addEventListener("click", sumarRojas, false);

    document.querySelector("#sumBlancas").addEventListener("click", sumarBlancas, false);

});

function generarTabla() {
    const numeros = [];
    const tabla = document.querySelector("#container");

    while (numeros.length < 16) {
        const num = Math.floor(Math.random() * (15 - 0 + 1)) + 0;

        if (!numeros.includes(num)) {
            numeros.push(num);

            const cuadro = document.createElement("div");
            cuadro.textContent = num;
            cuadro.setAttribute("id", num);

            cuadro.addEventListener("click", () => {
                cuadro.classList.remove("red", "white");
                cuadro.classList.add(color);
            });

            tabla.appendChild(cuadro);
        }
    }


}

function pintarAjedrez() {
    const divs = document.querySelectorAll("div");

    for (let i = 0; i < divs.length; i++) {
        const div = divs[i];

        const fila = Math.floor(i / 4);

        const columna = i % 4;

        div.classList.remove("red", "white");

        if ((fila + columna) % 2 === 0) {
            div.classList.add("red");
        } else {
            div.classList.add("white");
        }
    }
}

function sumarRojas(){
    const rojas = document.querySelectorAll(".red");
    let suma = 0;

    for (let i = 0; i < rojas.length; i++){
        const roja = rojas[i];

        suma += parseInt(roja.textContent);

        
    }

    console.log(suma);

    document.querySelector("#suma").textContent = "La suma de las casillas rojas es: " + suma;


}

function sumarBlancas(){

    const blancas = document.querySelectorAll("#container div");
    let suma = 0;

    for (let i = 0; i < blancas.length; i++){
        const blanca = blancas[i];

        if (!blanca.classList.contains("red")){
            suma += parseInt(blanca.textContent);   
        }
    }

    console.log(suma);

    document.querySelector("#suma").textContent = "La suma de las casillas blancas es: " + suma;

}





