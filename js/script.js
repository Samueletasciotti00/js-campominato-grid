//Creare una variabile contenente il riquadro per le caselle;
const container = document.getElementById('grid');

//Funzione che generi le caselle all'interno del container grid;
function generaTabella() {
    // Ciclo per N caselle;
    for(let i = 0; i < 100; i++){
        //Creo dinamicamente le celle
        const box = document.createElement('div');
        //Add Class
        box.classList.add('square');

        // Aggiungo un event listener per il click a ciascun div
        box.addEventListener('click', () => {
            // Aggiungi una classe aggiuntiva al div cliccato
            box.classList.toggle('bk-blue');
            
            // Generare un numero casuale per la selezione della casella
            let bomb = Math.floor(Math.random() * 3);
            
            // Output della casella
            console.log(bomb);
        });

        //Inserisco le caselle nel container
        container.append(box);
    }
}  
    
//L'utente preme un bottone per generare la griglia di gioco.
document.querySelector('.button-85').addEventListener('click', generaTabella);


