//Creo il contenitore dei blocchi.
const container = document.getElementById('grid');
 

//Ci sono 10 caselle per ongi riga (10).
function generaTabella() {
    for(let i = 0; i < 100; i++){
        console.log(i); //DEBUG

        //Creo dinamicamente le celle
        const box = document.createElement('div');
        //Add Class
        box.classList.add('square');

        // Aggiungo un event listener per il click a ciascun div
        box.addEventListener('click', () => {
            // Aggiungi una classe aggiuntiva al div cliccato
            box.classList.toggle('bk-blue');
            console.log(bomb);
        });

        //Inserisco le caselle nel container
        container.append(box);
    }
}  
    
//L'utente preme un bottone per generare la griglia di gioco.
document.querySelector('.button-85').addEventListener('click', generaTabella);


//Aggiugnere la classe agli elementi appena creati

