//Dato un array di numeri, usa map per creare un nuovo array dove ogni numero è triplicato.
console.log("Esercizio 7.1:");

const numeri = [1, 2, 3, 4, 5];
const numeriTriplicati = numeri.map(n => n * 3);
console.log(numeriTriplicati);

//Dato un array di stringhe, 
//usa map per creare un nuovo array dove ogni stringa ha la prima lettera maiuscola e il resto minuscolo.

console.log("Esercizio 7.2:");

const stringhe = ["ciao", "mondo", "javascript"];
const stringheCapitalizzate = stringhe.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
console.log(stringheCapitalizzate);

//Dato un array di numeri, usa filter per ottenere solo i numeri maggiori di 10 e minori di 50.

console.log("Esercizio 7.3:");

const numeri2 = [5, 12, 25, 8, 30, 60];
const numeriFiltrati = numeri2.filter(n => n > 10 && n < 50);
console.log(numeriFiltrati);

