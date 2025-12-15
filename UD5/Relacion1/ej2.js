function selecTodos(){
    const checks = document.getElementsByName("item");

    for (let i = 0; i < checks.length; i++){
        if (!checks[i].checked){
            checks[i].checked = true;
            document.getElementById("ninguno").checked = false;
        }
    }
}

function deselecTodos(){
    const checks = document.getElementsByName("item");
    

    for (let i = 0; i < checks.length; i++){
        if (checks[i].checked){
            checks[i].checked = false;
            document.getElementById("todos").checked = false;
        }
        
    }
}

let personas = ['pepe', 'lola', 'juan', 'lucas', 'lorena', 'asunta', 'javier'];

function leer(){
    const checks = document.getElementsByName("item");
    let resultado = "";
    
    for (let i = 0; i < checks.length; i++){
        if (checks[i].checked){
            resultado += `${personas[checks[i].value]} \n`;
        }
        console.log(checks[i].value)
    }

    document.getElementById('area').value = resultado;

    
}


document.getElementById("todos").addEventListener('click',selecTodos,false);
document.getElementById("ninguno").addEventListener('click',deselecTodos,false);
document.getElementById("enviar").addEventListener('click',leer,false);



