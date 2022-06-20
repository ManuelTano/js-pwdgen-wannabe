// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il 
// suo colore preferito. Infine scrivi sulla pagina nomecognomecolorepreferito21

// Recupero elemento

const pass = document.getElementById('generator');

// Chiedo il suo nome

const firstname = prompt('Qual è il tuo nome?');

// Chiedo il suo cognome

const lastname = prompt('Qual è il tuo cognome?');

// Chiedo il suo colore preferito

const color = prompt('Qual è il tuo colore preferito?');

// Genero la password con il suo nome, cognome, colore e il numero 21

generator.innerText = (firstname + lastname + color + 21);