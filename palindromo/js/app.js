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

// nella funzione appena creata gli passo come parametro la variabile del prompt
// che contiene la parola dell'utente che inserirà
checkPalindromo(insertWord);
console.log(checkPalindromo(insertWord));

// creo una condizione dove inserisco la parola dell'utente e lo metto a confronto
// con la funzione che lo leggerà al contrario 
// se le parole sono identiche sarà palindromo altrimenti no
if(insertWord === checkPalindromo(insertWord)){
    console.log('la parola è palindroma');
}else{
    console.log('la parola non è palindroma');
}