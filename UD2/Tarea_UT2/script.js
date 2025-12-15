function mostrar() {
    let nombre = document.getElementById("nombre").value;
    let actual = new Date().getFullYear();
    let fecha = parseInt(document.getElementById("nacimiento").value);
    let colorfav = document.getElementById("color").value;
    let textoColor = document.getElementById("color").options[document.getElementById("color").selectedIndex].text;
    let edad = actual - fecha;
    let resultado = document.getElementById("resultado");

    if (edad > 18) {
        var mayor = "eres mayor de edad";

    } else
        mayor = "eres menor de edad";

    let saludo = resultado.innerHTML = `Hola, ${nombre}.
    Tienes ${edad} años y tu color favorito es el ${textoColor} y además ${mayor}`;
    
    resultado.style.color = colorfav;

    console.log(saludo);
    
}


document.getElementById("calcular").addEventListener("click", mostrar, false);


