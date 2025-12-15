window.onload = iniciar;

function iniciar() {
    document.getElementById('enviar').addEventListener('click',mostrar,false);
}

function validarPregunta() {
    const texto = document.getElementById('assk');
    const patron = /^[A-ZÁÉÍÓÚÑ][a-zA-ZáéíóúÁÉÍÓÚñÑ\s¿?!¡.,;]*$/;

    if (patron.test(texto.value)) {
        return true;
    } else {
        texto.focus();
        return false;
    }
}

function mostrar() {
    const categoria = document.getElementById('categoria').value;
    const pregunta = document.getElementById('assk').value;
    const respuesta1 = document.getElementById('respuesta1').value;
    const respuesta2 = document.getElementById('respuesta2').value;
    const respuesta3 = document.getElementById('respuesta3').value;
    const respuesta4 = document.getElementById('respuesta4').value;

    // Obtener respuesta correcta
    const radioButtons = document.getElementsByName('correcta');
    let respuestaCorrecta = 0;

    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            respuestaCorrecta = i + 1;
            break;
        }
    }

    alert("PREGUNTA CREADA:\n\n" +
        "Categoría: " + categoria + "\n" +
        "Pregunta: " + pregunta + "\n" +
        "Respuesta 1: " + respuesta1 + "\n\n" +
        "Respuesta 2: " + respuesta2 + "\n\n" +
        "Respuesta 3: " + respuesta3 + "\n\n" + 
        "Respuesta 4: " + respuesta4 + "\n\n" +
        "Respuesta correcta: " + respuestaCorrecta + "\n\n");

}