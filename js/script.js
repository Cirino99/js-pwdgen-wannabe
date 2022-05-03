/*
    Creare un generatore di password partendo da dei dati forniti dall'utente
*/

const nome = prompt('Come ti chiami?');
console.log(nome);
const cognome = prompt('Qual è il tuo cognome?');
console.log(cognome);
const colore = prompt('Qual è il tuo colore preferito?');
console.log(colore);
const password = nome + cognome + colore + '21';
console.log(password);
document.getElementById('pw').innerHTML = `La tua password è: ${password}`;