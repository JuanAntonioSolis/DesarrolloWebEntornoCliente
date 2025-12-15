window.onload = iniciar;

function iniciar() {
    document.getElementById('enviar').addEventListener('click', validarTodo, false);
    document.getElementById('nombre').addEventListener('blur', mayus, false);
    document.getElementById('apellidos').addEventListener('blur', mayus, false);
}

function comprobarNombre() {
    const name = document.getElementById('nombre');
    const error = document.getElementById('errores');

    name.className = "";

    if (name.value == "") {
        name.focus();
        name.className = "error";
        error.innerHTML = ("El nombre no puede estar vacío");
        return false;
    } else {
        name.className = "";
        return true;
    }
}

function comprobarApellido() {
    const apellidos = document.getElementById('apellidos');
    const error = document.getElementById('errores');

    apellidos.className = "";

    if (apellidos.value == "") {
        apellidos.focus();
        apellidos.className = "error";
        error.innerHTML = ("Los apellidos no pueden estar vacíos");
        return false;
    } else {
        apellidos.className = "";
        return true;
    }
}

function comprobarEdad() {
    const edad = document.getElementById('edad');
    const error = document.getElementById('errores');

    edad.className = "";

    if (edad.value == "" || edad.value < 18 || isNaN(edad.value)) {
        edad.focus();
        edad.className = "error";
        error.innerHTML = ("La edad no es correcta");
        return false;
    } else {
        edad.className = "";
        return true;
    }
}

function validarNif() {
    const nif = document.getElementById('nif');
    const error = document.getElementById('errores');
    const patron = /^\d{8}-[A-Z]$/;
    //^ inicio de la cadena
    //\d Dígitos del 0 al 9
    //{8} longitud de 8
    //- guión obligatorio
    //[A-Z] letra mayúscula de la A a la Z
    //$ fin de la cadena

    nif.className = "";

    if (patron.test(nif.value)) {
        return true;
    } else {
        nif.focus();
        nif.className = "error";
        error.innerHTML = ("NIF incorrecto");
        return false;
    }

}

function validarEmail() {
    const email = document.getElementById('email');
    const error = document.getElementById('errores');
    const patron = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;

    email.className = "";

    if (patron.test(email.value)) {
        return true;
    } else {
        email.focus();
        email.className = "error";
        error.innerHTML = ("Email incorrecto");
        return false;
    }
}


function validarProvincias() {
    const provincia = document.getElementById('provincia')
    const error = document.getElementById('errores');

    provincia.className = "";

    if (provincia.selectedIndex == 0) {
        provincia.focus();
        provincia.className = "error";
        error.innerHTML = ("Debes seleccionar una provincia");
        return false;
    } else {
        provincia.className = "";
        return true;
    }
}

function validarFecha() {
    const fecha = document.getElementById('fecha');
    const patron = /^\d{2}[/-]\d{2}[/-]\d{4}$/;
    const error = document.getElementById('errores');

    fecha.className = "";

    if (patron.test(fecha.value)) {
        return true;
    } else {
        fecha.focus();
        fecha.className = "error";
        error.innerHTML = ("Formato de la fecha incorrecto");
        return false;
    }
}

function validarTelefono() {
    const telefono = document.getElementById('telefono');
    const error = document.getElementById('errores');
    const patron = /^\d{9}$/;

    telefono.className = "";

    if (patron.test(telefono.value)) {
        return true;
    } else {
        telefono.focus();
        telefono.className = "error";
        error.innerHTML = ("El teléfono debe tener 9 dígitos");
        return false;
    }
}

function validarHora() {
    const hora = document.getElementById('hora');
    const error = document.getElementById("errores");
    const patron = /^\d{2}[:]\d{2}$/;

    hora.className = "";

    if (patron.test(hora.value)) {
        return true;
    } else {
        hora.focus();
        hora.className = "error";
        error.innerHTML = ('Formato de la hora incorrecto');
        return false;
    }
}


function validarTodo(eDefecto) {
    if (comprobarNombre() && comprobarApellido() && comprobarEdad() && validarNif() && validarEmail() && validarProvincias() && validarFecha() && validarTelefono() && validarHora() && ContarIntentosEnvio() && confirm("¿Desea mandar el formulario")) {
        return true;
    } else {
        eDefecto.preventDefault();
        return false;
    }
}

function mayus() {
    this.value = this.value.toUpperCase();
}

function ContarIntentosEnvio(){
    let contador = 0;
    if(document.cookie==""){
        document.cookie="contador=0"
    }

    contador=document.cookie.substring(9);

    contador++;
    document.cookie="contador="+contador;
    alert("Has intentado enviar el formulario " + contador +" veces");
    return true;
}