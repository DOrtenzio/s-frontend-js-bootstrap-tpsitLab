let segnaGiocatoreCorrente = "X";
    
        function posiziono(n) {
            let cella = document.getElementById("div" + n);
            if (cella.innerHTML === "X" || cella.innerHTML === "O") {
                alert("Questa casella è già stata selezionata.");
            } else {
                cella.innerHTML = segnaGiocatoreCorrente; //Do in input
                segnaGiocatoreCorrente = cambioGiocatore(segnaGiocatoreCorrente);
                document.getElementById("segnaGiocatore").innerHTML = segnaGiocatoreCorrente;
                controlloVittoriaoPareggio();
            }
        }  
        function controlloVittoriaoPareggio() {
            let risultatoVittoria = controllaVittoria();
            if(risultatoVittoria !== "P"){
                alert("Il giocatore " + risultatoVittoria + " ha vinto.");
                reset();
            }
            else if(!controlloPareggio()){
                alert("Pareggio");
                reset();
            }
        }        
        function controllaVittoria(){
            // Array di array combinazioni vincenti
            const combinazioniVincita = [
                [1, 2, 3], [4, 5, 6], [7, 8, 9], // orizzontali
                [1, 4, 7], [2, 5, 8], [3, 6, 9], // verticali
                [1, 5, 9], [3, 5, 7] // diagonali
            ];
    
            for (let combinazione of combinazioniVincita) {
                let cella1 = document.getElementById("div" + combinazione[0]).innerHTML;
                let cella2 = document.getElementById("div" + combinazione[1]).innerHTML;
                let cella3 = document.getElementById("div" + combinazione[2]).innerHTML;
                // Verifica se una delle combinazioni vincenti è stata completata da un giocatore
                if (cella1 === cella2 && cella2 === cella3 && cella3 !== "&nbsp;") {
                    return cella1;
                }
            }
            return "P";
        }
        function controlloPareggio(){
            let celle = document.getElementsByClassName("cella");
            for (let i = 0; i < celle.length; i++) {
                 if(celle[i].innerHTML === "&nbsp;"){
                    return true;
                 }
            }
            return false;
        }

        function cambioGiocatore(giocatoreCorrente) {
        if (giocatoreCorrente === "X") {
                return "O";
            } else {
                 return "X";
            }
        
        }
        function reset() {
            let celle = document.getElementsByClassName("cella");
            segnaGiocatoreCorrente = "X";
            document.getElementById("segnaGiocatore").innerHTML=segnaGiocatoreCorrente;
            for (let i = 0; i < celle.length; i++) {
                 celle[i].innerHTML = "&nbsp;";
            }
        }

//Seconda parte
function cambioColore() {
    const testo = document.getElementById("text");
    let r = Math.floor(Math.random() * 256); // Genera un numero casuale tra 0 e 255 intero
    let s = Math.floor(Math.random() * 256);
    let t = Math.floor(Math.random() * 256);
    testo.style.color = `rgb(${r},${s},${t})`; // Utilizza la sintassi corretta per il colore RGB
}
function cambioColoreBackground() {
    const testo = document.getElementById("text");
    let r = Math.floor(Math.random() * 256); // Genera un numero casuale tra 0 e 255 intero
    let s = Math.floor(Math.random() * 256);
    let t = Math.floor(Math.random() * 256);
    testo.style.backgroundColor = `rgb(${r},${s},${t})`; // Utilizza la sintassi corretta per il colore RGB
}
