function pedirNumero(){
    let num;
    while(isNaN(num)){
        num = parseInt(prompt("Escribe un número:"));
        if(isNaN(num)){
            alert("Inténtalo de nuevo, no has introducido un número:");
        }
    }
    return num;
}

function analisisNumeros(){
    let n1 = pedirNumero();
    let n2 = pedirNumero();
    let n3 = pedirNumero();
    let n4 = pedirNumero();
    let parrafo = document.getElementById("parrafo");

    let mayor = n1;
    let menor = n1;
    let suma = n1+n2+n3+n4;
    let contPares = 0;

    if (n2 > mayor){
        mayor = n2;
    }
    if (n3 > mayor){
        mayor = n3;
    }
    if (n4 > mayor){
        mayor = n4;
    }
   
    
    if (n2 < menor){
        menor = n2;
    }
    if (n3 < menor){
        menor = n3;
    }
    if (n4 < menor){
        menor = n4;
    }

    if (n1 % 2 == 0){
        contPares++;
    }
    if (n2 % 2 == 0){
        contPares++;
    }
    if (n3 % 2 == 0){
        contPares++;
    }
    if (n4 % 2 == 0){
        contPares++;
    }

    parrafo.innerHTML = `
    <p> El mayor número es ${mayor} </p>
    <p> El menor número es ${menor} </p>
    <p> La suma de todos los números es ${suma} </p>
    <p> Hay ${contPares} números pares </p>
    `
}
analisisNumeros();