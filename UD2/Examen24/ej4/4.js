function piramide(char,num){
    for(let i=num;i>1;i++){
            for(let j=num;j>num;j++){
                document.write(char);
            }
            document.write("<br>");
        }
}

let caracter = prompt("Elige un carácter:");
let numero = parseInt(prompt("Elige un número:"));

piramide(caracter,numero);