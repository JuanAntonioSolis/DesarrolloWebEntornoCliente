document.addEventListener("DOMContentLoaded", () => {

    const box = document.querySelector("#caja");

    const foto = document.createElement("img");

    foto.setAttribute("src", "https://imgs.search.brave.com/fgrD_VXC4yuZ87bOYO1Z9msOruxBYJDNQAas0O0CR64/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzMxLzAxLzI3/LzM2MF9GXzMzMTAx/MjcyNV9MVFQxeFhE/bEZBbmsxRVJDTW96/TE41TUJGZnpOcE9R/MC5qcGc" );
    foto.setAttribute("alt", "Texto alternativo");

    box.appendChild(foto);

});