const pass = document.getElementById('generator');

const firstname = prompt('Qual è il tuo nome?');

const lastname = prompt('Qual è il tuo cognome?');

const color = prompt('Qual è il tuo colore preferito?');

generator.innerText = (firstname + lastname + color + 21);