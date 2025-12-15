let char;
let contVocales = 0;
let result = document.getElementById("result");
//let palabra = "";
let msj = "";



do {
    char = prompt("Introduce un carácter:");

    if (char == "*"){
        break;
    }

    switch (char.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            char = char.toUpperCase();
            contVocales++;

            break;
        default:
            char = char.toLowerCase();

            break;
    }
    msj += char;
} while (char !== "*");

result.innerHTML = `${msj} ${contVocales} Vocales`;



