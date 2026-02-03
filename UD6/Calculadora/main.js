document.addEventListener("DOMContentLoaded", () => {

    const teclas = document.querySelectorAll("button");

    teclas.forEach(tc => {
        tc.addEventListener("click", pulsar, false)
    });

});

let numero1 = null;
let numero2 = false;
let operacion = null;


function pulsar(e) {

    const area = document.querySelector("#resultado");

    if (e.target.closest("button")) {
        const elemento = e.target.closest("button");

        switch (elemento.textContent) {
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
                if (numero2 || area.textContent === "0") {
                    area.textContent = elemento.textContent;
                    numero2 = false;
                } else {
                    area.textContent += elemento.textContent;
                }
                break;

            case "C":
                area.textContent = "0";
                numero1 = null;
                operacion = null;
                numero2 = false;

                break;
            case "+":
            case "-":
            case "X":
            case "/":

                numero1 = parseInt(area.textContent);
                operacion = elemento.textContent;
                numero2 = true;

                break;
            case "=":
                if (numero1 !== null && operacion !== null) {
                    let num2 = parseInt(area.textContent);
                    let resultado;

                    switch (operacion) {
                        case "+":
                            resultado = suma(numero1, num2);
                            break;
                        case "-":
                            resultado = resta(numero1, num2);
                            break;
                        case "X":
                            resultado = multiplica(numero1, num2);
                            break;
                        case "/":
                            resultado = divide(numero1, num2);
                            break;
                    }

                    area.textContent = resultado;

                    numero1 = null;
                    operacion = null;
                    numero2 = true;
                }

                break;
            default:
                break;

        }

    }

}

function suma(n1, n2) {
    return n1+n2;
}

function resta(n1, n2) {
    return n1 - n2;
}

function multiplica(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    if (n2 === 0){
        alert("No se puede dividir entre cero");
    }

    return n1 / n2;
}