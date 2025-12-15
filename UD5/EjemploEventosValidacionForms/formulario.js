window.onload = iniciar;

function iniciar() {
    document.getElementById('enviar').addEventListener('click', validarTodo, false);
    document.getElementById('nombre').addEventListener('blur',mayus,false);
    document.getElementById('apellidos').addEventListener('blur',mayus,false);
    
}


function comprobarNombre() {
    const name = document.getElementById('nombre');

    name.className = "";

    if (name.value == "") {
        name.focus();
        name.className = "error";
        alert("El nombre no puede estar vacío");
        return false;
    } else {
        name.className = "";
        return true;
    }
}

function comprobarApellido() {
    const apellidos = document.getElementById('apellidos');

    apellidos.className = "";

    if (apellidos.value == "") {
        apellidos.focus();
        apellidos.className = "error";
        alert("Los apellidos no pueden estar vacíos");
        return false;
    } else {
        apellidos.className = "";
        return true;
    }
}

function comprobarEdad() {
    const edad = document.getElementById('edad');

    edad.className = "";

    if (edad.value == "" || edad.value < 18 || isNaN(edad.value)) {
        edad.focus();
        edad.className = "error";
        alert("La edad no es correcta");
        return false;
    } else {
        edad.className = "";
        return true;
    }
}

function comprobarMatricula() {
    const matricula = document.getElementById('matricula');
    const patron = /^\d{4}\s?[A-Z]{3}$/;

    matricula.className = "";

    if (patron.test(matricula.value)) {
        matricula.className = "";
        return true;
    } else{
        matricula.focus();
        matricula.className = "error";
        alert("La matrícula no es correcta (0000 XXX)");
        return false;
    }


}

function comprobarProvincias(){
    const provincia = document.getElementById('provincia');
    
    provincia.className = "";

    if(provincia.selectedIndex == 0){
        provincia.focus();
        provincia.className = "error";
        alert("La provincia debe estar seleccionada");
        return false;
    } else{
        provincia.className = "";
        return true;
    }
}

function validarTodo(eDefecto) {
    if (comprobarNombre() && comprobarApellido() && comprobarEdad() && comprobarMatricula() && comprobarProvincias() && confirm("¿Desea mandar el formulario")) {
        return true;
    } else {
        eDefecto.preventDefault();
        return false;
    }
}

function mayus(){
    this.value = this.value.toUpperCase();
}