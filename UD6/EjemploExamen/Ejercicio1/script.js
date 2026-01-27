document.addEventListener("DOMContentLoaded", () => {

    const area = document.querySelector("div");
    

    document.addEventListener("keydown",(e) => {
        
        if(e.key == "R"){
            area.style.backgroundColor = "red";
        } else if (e.key == "G"){
            area.style.backgroundColor = "green";
        } else if (e.key == "B"){
            area.style.backgroundColor = "blue";
        } else if (e.key == "T" && e.shiftKey){
            area.style.width = "300px";
            area.style.height = "300px";
            
        }
    })
});