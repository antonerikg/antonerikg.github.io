function modalitaScura(){
    
    const stato = document.getElementById("cambio-colore").textContent;

    if (stato === "Modalità scura") {
        document.body.style.backgroundColor = "black";
        document.getElementById("box").style.backgroundColor = "gray";
        document.getElementById("cambio-colore").textContent = "Modalità chiara";
    } else if (stato === "Modalità chiara") {
        document.body.style.backgroundColor = "#efc998";
        document.getElementById("box").style.backgroundColor = "#FFFFF0";
        document.getElementById("cambio-colore").textContent = "Modalità scura";
    }
}