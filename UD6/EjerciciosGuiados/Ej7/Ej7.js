document.addEventListener("DOMContentLoaded", () => {

    const msj = document.querySelector("#mensaje");
    const boton = document.querySelector("#btn");

    boton.addEventListener("click", function (){
        if (msj.textContent == "Estado: OFF"){
            msj.textContent = "Estado: ON";
        } else{
            msj.textContent = "Estado: OFF";
        }
    })

});