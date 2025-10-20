function palabra() {
    let char;
    let contCons = 0;
    let result = document.getElementById("parrafo");
    let msj = "";

    do {
        char = prompt("Dame un caracter:");

        if (char == "#") {
            break;
        }

        switch (char.toLowerCase) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                char = char.toLowerCase();
                break;
            default:
                char = char.toUpperCase();
                contCons++;
                break;
        }
        msj += char;

    } while (char !== "#");

    result.innerHTML = `Resultado: ${msj} <br> 
                        Se han introducido ${contCons} consonantes`;
}

palabra();