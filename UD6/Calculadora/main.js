document.addEventListener("DOMContentLoaded", () => {

    const teclas = document.querySelectorAll("div");

    teclas.forEach(tc => {
        tc.addEventListener("click", pulsar, false)
    });

});



function pulsar(e) {

    const area = document.querySelector("#resultado");

    if (e.target.closest("button")) {
        const elemento = e.target.closest("button");

        switch(elemento.textContent){
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                area.textContent = elemento.textContent;
                break;
            case "C":
                area.textContent = "";
            case "+":
                break;
            case "-":
                break;
            case "X":
                break;
            case "/":
                break;
            case "=":
                break;
            default:
                break;
            
        }

    }

}

function suma() {

}

function resta() {

}

function multiplica() {

}

function divide() {

}