let char;
let contVocales = 0;
let result = document.getElementById("result");

while (char != "*") {
    char = prompt("Introduce un carácter:");
    var msj = "";
    
    switch (char.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            char.toUpperCase();
            contVocales++;
            
            break;
        default:
            char.toLowerCase();
            
            break;
    }
    
}

result.innerHTML = msj;

 
