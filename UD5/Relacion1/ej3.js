
function ver(){
    let texto = document.getElementById('area').value;
    let formulario = document.getElementById('insertar');
    let resultado = "";
    let palabras = texto.split(" ");

    for (let palabra of palabras){
        resultado += `<input type="checkbox" name="item"> ${palabra} <br>`
        console.log(resultado);
    }

    formulario.innerHTML = resultado;
}

document.getElementById('verP').addEventListener('click',ver,false);

