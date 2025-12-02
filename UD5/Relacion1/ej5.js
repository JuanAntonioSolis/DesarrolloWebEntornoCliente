window.onload = iniciar;

function iniciar(){
    document.getElementById('aceptar').addEventListener("click",validarAll,false);
}

function validarNombre(){
    const nombre = document.getElementById("nombre");

    if(nombre.value == ""){
        nombre.focus();
        alert("El nombre no puede estar vacío");
        return false;
    } else{
        return true;
    }
}

function validarApellidos(){
    const apellidos = document.getElementById('apellidos');

    if (apellidos.value == ""){
        apellidos.focus();
        alert("Los apellidos no pueden estar vacíos");
        return false;
    } else{
        return true;
    }
}

function validarPass(){
    const password = document.getElementById('pass');
    const password1 = document.getElementById('passver');

    if(password.value !== password1.value){
        password.focus();
        password1.focus();
        alert("Las contraseñas no coinciden");
        return false;
    } else{
        return true;
    }
}

function validarEmail(){
    const email = document.getElementById('email');
    const patron = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;

    if (patron.test(email.value)){
        return true;
    } else{
        email.focus();
        alert("El email debe incluir un punto y @");
        return false;
    }
}

function validarDni(){
    const dni = document.getElementById('dni');
    const patron = /[a-zA-Z]$/;

    if(patron.test(dni.value)){
        return true;
    } else{
        dni.focus();
        alert("El DNI debe incluir una letra");
        return false;
    }
}

function validarAll(eDefecto){
    if (validarApellidos() && validarNombre()  && validarPass() && validarEmail()&& validarDni() && confirm("¿Desea mandar el formulario?")){
        return true;
    } else{
        eDefecto.preventDefault();
        return false;
    }
}