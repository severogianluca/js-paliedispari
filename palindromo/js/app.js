// creo il promt dove l'utente  inserirà la parola
let insertWord = prompt ('Inserisci una parola!');

// creo una funzione che prende come parametro la parola dell'user
// col for la ciclerò al contrario e la farò ritornare come una nuova parola
function checkPalindromo(userWord){
    let newUserWord='';
    for(let i = userWord.length -1; i >= 0; i--){
        newUserWord += userWord[i]
    }
    return newUserWord;    
}

