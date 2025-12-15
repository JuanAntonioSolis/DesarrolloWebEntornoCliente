window.onload = iniciar;

function iniciar() {
    document.getElementById('enviar').addEventListener('click', validarTodo, false);
    document.getElementById('nombre').addEventListener('blur', mayus, false);
    document.getElementById('apellidos').addEventListener('blur', mayus, false);
}

function validarNombre() {
    const name = document.getElementById('nombre');
    const patron = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if (patron.test(name.value)) {
        return true;
    } else {
        name.focus();
        alert("Nombre incorrecto");
        return false;
    }
}

function validarApellidos() {
    const apellidos = document.getElementById('apellidos');
    const patron = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if (patron.test(apellidos.value)) {
        return true;
    } else {
        apellidos.focus();
        alert("Apellidos incorrectos");
        return false;
    }
}

function validarPassword(){
    const password = document.getElementById('pass');
    const password1 = document.getElementById('passver');
    const patron = /^(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[;,.\-])[a-zA-Z0-9;,.\-]+$/;

    if(!patron.test(password.value)){
        password.focus();
        alert("Formato de la contraseña incorrecta");
        return false;
    }

    if(password.value !== password1.value){
        password1.focus();
        alert("Las contraseñas no coinciden");
        return false;
    }

    return true;
}

function validarFecha() {
    const fecha = document.getElementById('fecha');
    const patron = /^\d{2}[/-]\d{2}[/-]\d{4}$/;

    if (patron.test(fecha.value)) {
        return true;
    } else {
        fecha.focus();
        alert("Formato de la fecha incorrecto");
        return false;
    }
}

function validarTodo(eDefecto) {
    if (validarNombre() && validarApellidos() && validarPassword() && validarFecha() && confirm("¿Desea mandar el formulario") && mostrarDatos()) {
        return true;
    } else {
        eDefecto.preventDefault();
        return false;
    }
}

function mostrarDatos(){
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const fecha = document.getElementById('fecha').value;

    alert("DATOS DEL PERFIL:\n\n" +
          "Nombre: " + nombre + "\n" +
          "Apellidos: " + apellidos + "\n" +
          "Fecha de Nacimiento: " + fecha + "\n\n" +
          "¡Perfil creado correctamente!");
}

function mayus() {
    this.value = this.value.toUpperCase();
}