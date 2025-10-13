function piramide(char, num) {
    for (let i = num; i > 0; i--) {
        
        for (let j = 0; j < i; j++) {
            document.write(char);
        }
        document.write("<br>");
    }
}

let caracter = prompt("Elige un carácter:");
let numero = parseInt(prompt("Elige un número:"));

piramide(caracter, numero);