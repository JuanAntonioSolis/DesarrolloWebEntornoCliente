function ver(){
    let texto = document.getElementById('area').value;
    let formulario = document.getElementById('insertar');
    let resultado = "";
    let palabras = texto.split(" ");

    for (let palabra of palabras){
        if(!resultado.includes(palabra)){
            resultado += `<input type="checkbox" name="item"> ${palabra} <br>`
            
        }
    }

    formulario.innerHTML = resultado;
}

document.getElementById('verP').addEventListener('click',ver,false);

