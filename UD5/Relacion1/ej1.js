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
        if (checks[i].checked =true){
            checks[i].checked = false;
            document.getElementById("todos").checked = false;
        }
        
    }
}

document.getElementById("todos").addEventListener('click',selecTodos,false);
document.getElementById("ninguno").addEventListener('click',deselecTodos,false);




