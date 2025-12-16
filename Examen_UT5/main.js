window.onload = init;

function init() {
    document.getElementById('enviar').addEventListener("click", validarAll, false);
    document.getElementById('name').addEventListener('blur', mayus, false);
}

function validarNombre() {
    const nombre = document.getElementById('name');

    nombre.className = "";

    if (nombre.value == "") {
        nombre.focus();
        nombre.className = "error";
        alert("El nombre no puede estar vacío");
        return false;
    } else {
        nombre.className = "";
        return true;
    }
}

function validarFecha() {
    const fecha = document.getElementById('fechaNac');
    const patron = /^\d{2}[/-]\d{2}[/-]\d{4}$/;

    fecha.className = "";

    if (patron.test(fecha.value)) {
        return true;
    } else {
        fecha.focus();
        fecha.className = "error";
        alert("Formato de la fecha incorrecto (dd/mm/aaaa)");
        return false;
    }
}

function validarTelefono() {
    const telf = document.getElementById('telf');
    const patron = /^\+\d{2}\s?\d{9,15}$/;

    telf.className = "";

    if (patron.test(telf.value)) {
        return true;
    } else {
        telf.focus();
        telf.className = "error";
        alert("Formato del número de teléfono incorrecto");
        return false;
    }
}

function validarIBAN() {
    const iban = document.getElementById('iban');
    const patron = /^ES\d{22}$/;

    iban.className = "";

    if (patron.test(iban.value)) {
        return true;
    } else {
        iban.focus();
        iban.className = "error";
        alert("Formato del IBAN incorrecto");
        return false;
    }
}

function validarPassword() {
    const pass = document.getElementById('pass');
    //const pass1 = document.getElementById('passR'); 
    const patron = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    pass.className = "";
    //pass1.className = "";

    if (patron.test(pass.value)) {
        return true;
    } else {
        pass.focus();
        //pass1.focus();
        //pass1.className = "error"
        pass.className = "error";
        alert("Contraseña debe tener mínimo 8 dígitos y contener minusculas, mayúsculas y 1 dígito");
        return false;
    }
}

function validarConfirmPass() {

    const pass = document.getElementById('pass');
    const pass1 = document.getElementById('passR');

    pass.className = "";
    pass1.className = "";

    if (pass.value === pass1.value) {
        return true;
    } else {
        pass1.focus();
        pass1.className = 'error';
        alert("Las contraseñas no coinciden");
        return false;
    }
}


function validarAll(eDefecto) {

    if (validarNombre() && validarFecha() && validarTelefono() && validarIBAN() && validarConfirmPass() && validarPassword() && confirm("¿Desea mandar el formulario?")) {
        return true;
    } else {
        eDefecto.preventDefault();
        return false;
    }
}

function mayus() {
    this.value = this.value.toUpperCase();
}