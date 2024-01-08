// 1 Chiedo all'utente il suo nome;
// 2 L'utente lo inserisce e lo conservo in una variabile userName;
// 3 Chiedo all'utente il suo cognome;
// 4 L'utente lo inserisce e lo conservo in una variabile userSurname;
// 5 Chiedo all'utente il suo colore preferito;
// 6 L'utente lo inserisce e lo conservo in una variabile userColour;
// 7 Genero la password sommando userName + userSurname + userColour + 23;
// 8 Stampo la password su schermo.

// 1
const userName = prompt("Come ti chiami?");
console.log(userName);

// 3
const userSurname = prompt("Qual è il tuo cognome?");
console.log(userSurname);

// 5
const userColour = prompt("Qual è il tuo colore preferito?");
console.log(userColour);

// 7
const password = userName + userSurname + userColour + 23;
console.log(password);

// 8
resultElement.innerText = 
