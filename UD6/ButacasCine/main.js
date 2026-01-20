document.addEventListener("DOMContentLoaded", () => {

    crearSala();

    butacasReservadas();

});

function crearSala() {
    const sala = document.querySelector("#sala");


    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 12; j++) {
            const butaca = document.createElement("div");
            butaca.textContent = (i + "," + j);
            butaca.setAttribute("id", i + ", " + j);
            butaca.className = "butaca libre";
            sala.appendChild(butaca);

            if ((i == 0 && j < 4) || (i == 0 && j > 8)) {
                butaca.classList.add("butaca", "nobutaca");
            }

            if ((i == 1 && j < 3) || (i == 1 && j > 8)) {
                butaca.classList.add("butaca", "nobutaca");
            }

            if ((i == 2 && j < 2) || (i == 2 && j > 8)) {
                butaca.classList.add("butaca", "nobutaca");
            }

            if ((i == 3 && j < 1)) {
                butaca.classList.add("butaca", "nobutaca");
            }

            if (j == 9 || j == 10) {
                butaca.classList.add("butaca", "nobutaca");
            }

        }

    }

}

function butacasReservadas() {
    const ocupadas = [[5, 4], [5, 5], [5, 6], [7, 2], [7, 3], [9, 7], [9, 8], [10, 5], [10, 6], [10, 7], [11, 7], [13, 8]];

    for (let i = 0; i < ocupadas.length; i++) {
        console.log(ocupadas[i]);
    }
}