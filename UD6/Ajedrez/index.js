document.addEventListener("DOMContentLoaded", () => {

    const tabla = document.querySelector("table");

    const fichas = [
        [
            "torreN",
            "caballoN",
            "alfilN",
            "reinaN",
            "reyN",
            "alfilN",
            "caballoN",
            "torreN",
        ],
        [
            "peonN",
            "peonN",
            "peonN",
            "peonN",
            "peonN",
            "peonN",
            "peonN",
            "peonN"
        ],
        [],
        [],
        [],
        [],
        [
            "peonB",
            "peonB",
            "peonB",
            "peonB",
            "peonB",
            "peonB",
            "peonB",
            "peonB"
        ],
        [
            "torreB",
            "caballoB",
            "alfilB",
            "reinaB",
            "reyB",
            "alfilB",
            "caballoB",
            "torreB"
        ]
    ];

    for (let i = 0; i < 8; i++) {
        const tr = document.createElement("tr");

        for (let j = 0; j < 8; j++) {

            const td = document.createElement("td");


            if (i % 2 == j % 2) {
                td.className = "";
            } else {
                td.className = "dark";
            }

            if (i < 2 || i > 5) {
                const img = document.createElement("img");
                img.setAttribute("src", "./fichas/" + fichas[i][j] + ".png");
                td.appendChild(img);
            }
            tr.appendChild(td);
        }

        tabla.appendChild(tr);

    }



});