document.addEventListener("DOMContentLoaded", () => {

    document.querySelector(".add").addEventListener("click", addRow, false);
    document.querySelector(".del").addEventListener("click", delRow, false);

});

function addRow() {
    const texto1 = document.querySelector("#c1").value;
    const texto2 = document.querySelector("#c2").value;
    const texto3 = document.querySelector("#c3").value;
    const tabla = document.querySelector("#tabla");

}

function delRow() {
    
}