document.addEventListener("DOMContentLoaded", () => {

    crearSala();

    reservarButaca();

});

function crearSala() {
    const sala = document.querySelector("#sala");

    const ocupadas = [[5, 4], [5, 5], [5, 6], [7, 2], [7, 3], [9, 7], [9, 8], [10, 5], [10, 6], [10, 7], [11, 7], [13, 8]];


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

            for (let x = 0; x < ocupadas.length; x++) {
                if (ocupadas[x][0] == i && ocupadas[x][1] == j){
                    butaca.classList.add("butaca","ocupada");
                }
            }

        }

    }

}

function reservarButaca(){

    const sala = document.querySelector("#sala");
    const boton = document.querySelector("#reservar");
    const texto = document.querySelector("#reservas");
    const seleccionadas = [];
    let reservaConfirmada = false;

    sala.addEventListener("click",(e)=> {
        const butaca = e.target.closest(".butaca");

        if (reservaConfirmada) {
            texto.textContent = "";
            reservaConfirmada = false;
        }

        if (butaca && butaca.classList.contains("libre")){
            butaca.classList.remove("libre");
            butaca.classList.add("seleccion");
            seleccionadas.push(butaca.id);
        } /*else if (butaca && butaca.classList.contains("seleccion")){
            butaca.classList.remove("seleccion");
            butaca.classList.add("libre");
            seleccionadas = seleccionadas.filter(b => b !== butaca.id);
        }*/

        boton.addEventListener("click",()=>{
            texto.textContent = seleccionadas;
            butaca.classList.remove("seleccion");
            butaca.classList.add("ocupada");
            seleccionadas = [];
            reservaConfirmada = true;
        });
        
        
        
    });

    

}


