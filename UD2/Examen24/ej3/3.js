let result = document.getElementById("result");

function pedirFilas() {
    let num;
    while (isNaN(num)) {
        num = parseInt(prompt("Escribe un número de filas:"));
        if (isNaN(num)) {
            alert("Inténtalo de nuevo, no has introducido un número:");
        }
    }
    return num;
}

function pedirCol() {
    let num;
    while (isNaN(num)) {
        num = parseInt(prompt("Escribe un número de columnas:"));
        if (isNaN(num)) {
            alert("Inténtalo de nuevo, no has introducido un número:");
        }
    }
    return num;
}

function pintar(rows, cols) {
    let contador = 1;

    document.write("<table>");
    for (let i = 1; i <= rows;i++){
        document.write("<tr>");
        for (let j = 1; j <= cols;j++){
            if(contador % 3 == 0){
                document.write("<td class='naranja'>"+ contador + "</td>");
            } else
                document.write(`<td>${contador}</td>`);
            contador++
            
        }
        document.write("</tr>");
        
    }
}

let filas = pedirFilas();
let cols = pedirCol();

pintar(filas, cols);


