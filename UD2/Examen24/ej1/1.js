function operaciones(num1, num2, num3, num4, num5) {
    let mayor = num1;
    let menor = num1;
    let media = (num1 + num2 + num3 + num4 + num5) / 5;
    let contMultiplos = 0;
    let parrafo = document.getElementById("parrafo");

    if (num2 > mayor) {
        mayor = num2;
    }

    if (num3 > mayor) {
        mayor = num3;
    }

    if (num4 > mayor) {
        mayor = num4;
    }

    if (num5 > mayor) {
        mayor = num5;
    }

    if (num2 < menor) {
        menor = num2;
    }

    if (num3 < menor) {
        menor = num3;
    }

    if (num4 < menor) {
        menor = num4;
    }

    if (num5 < menor) {
        menor = num5;
    }


    if (num1 % 5 == 0) {
        contMultiplos++;
    }
    if (num2 % 5 == 0) {
        contMultiplos++;
    }
    if (num3 % 5 == 0) {
        contMultiplos++;
    }
    if (num4 % 5 == 0) {
        contMultiplos++;
    }
    if (num5 % 5 == 0) {
        contMultiplos++;
    }

    parrafo.innerHTML = `
    <p> El mayor número es ${mayor} </p>
    <p> El menor número es ${menor} </p>
    <p> La media de los números introducidos es: ${media} </p>
    <p> Hay ${contMultiplos} múltiplos de 5 entre los números introducidos </p>
    `;
}

function pedirNumero(){
    let num;
    while(isNaN(num)){
        num = parseInt(prompt("Escribe un número:"));
        if(isNaN(num)){
            alert("Inténtalo de nuevo, no has introducido un número:");
        }
    }
    return num;
}

let n1 = pedirNumero("Escribe un número");
let n2 = pedirNumero("Escribe un número");
let n3 = pedirNumero("Escribe un número");
let n4 = pedirNumero("Escribe un número");
let n5 = pedirNumero("Escribe un número");

operaciones(n1, n2, n3, n4, n5);






