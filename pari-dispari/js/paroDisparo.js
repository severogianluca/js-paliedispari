// promt per la scelta dell'utente
const choose = prompt('Paro o disparo?');

const userNumber = Math.ceil(Math.random() * 5);
console.log('Il numero dell utente è:' + userNumber );

function computerRandomNumber(){
    return Math.ceil(Math.random() * 5);
}
const computerNumber = computerRandomNumber();
console.log('Il numero del computer è: ' + computerNumber());
