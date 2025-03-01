// promt per la scelta dell'utente
const choose = prompt('Paro o disparo?');

// genero i numeri random per l'utente
const userNumber = Math.ceil(Math.random() * 5);
console.log('Il numero dell utente è:' + userNumber );

// funzione per generare numeri random per il l'IA
function computerRandomNumber(){
    return Math.ceil(Math.random() * 5);
}

const computerNumber = computerRandomNumber();
console.log('Il numero del computer è: ' + computerNumber);


// funzione per sommare i numeri random di user e IA
function sumNumber(){
    return userNumber + computerNumber;
}

// stampa per debug in console
sommaRandomNumber = sumNumber();
console.log('la somma dei numeri random è....' + ' ' + sommaRandomNumber);
