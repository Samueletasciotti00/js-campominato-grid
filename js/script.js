
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

        //Inserisco le caselle nel container
        container.append(box);
    }
}  
    
//L'utente preme un bottone per generare la griglia di gioco.
document.querySelector('.button-85').addEventListener('click', generaTabella);

//L'utente cliccando sulla cella, essa si colorera di azzurro
    //- emette in console con il numero della casella cliccata.