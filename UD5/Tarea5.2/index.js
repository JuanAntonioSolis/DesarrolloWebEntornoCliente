window.onload = iniciar;

function iniciar() {
    document.getElementById('perfil').addEventListener('click', redirigirPerfil, false);
    document.getElementById('preguntas').addEventListener('click', redirigirPreguntas, false);
    contarCookies();
}

function redirigirPerfil() {
    window.location.href = 'perfil.html';
}

function redirigirPreguntas() {
    window.location.href = 'preguntas.html';
}

function contarCookies() {
    let contador = 0;
    
    // Buscar si existe la cookie "contador"
    if (document.cookie.indexOf("contador=") === -1) {
        // No existe, crear con valor 0
        contador = 1;
    } else {
        // Existe, extraer su valor
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.startsWith("contador=")) {
                contador = parseInt(cookie.substring(9)) + 1;
                break;
            }
        }
    }
    
    // Guardar con fecha de expiración (365 días)
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + (365 * 24 * 60 * 60 * 1000));
    document.cookie = "contador=" + contador + "; expires=" + fecha.toUTCString() + "; path=/";
    
    // Mostrar en el HTML
    document.getElementById('numVisitas').textContent = contador;
    
    return true;
}

