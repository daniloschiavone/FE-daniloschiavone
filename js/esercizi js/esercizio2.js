// ES 2.1 Dichiara una variabile nome con il tuo nome e una costante annoNascita con il tuo anno di nascita. Stampa entrambi i valori.

console.log("ESERCIZIO 2.1"); 

let nome = "Danilo";
const annoNascita = 1991;
console.log(nome);
console.log(annoNascita);

// ES 2.2 Dichiara due variabili numeriche a e b. Stampa il risultato della loro addizione, sottrazione, moltiplicazione, divisione e modulo.
console.log("ESERCIZIO 2.2");

let a = 10;
let b = 5;
console.log("Addizione:", a + b);
console.log("Sottrazione:", a - b);
console.log("Moltiplicazione:", a * b);
console.log("Divisione:", a / b);
console.log("Modulo:", a % b);

// ES 2.3 Dato un prezzo di 49.90 e uno sconto del 20%, calcola e stampa il prezzo scontato.
console.log("ESERCIZIO 2.3");

let prezzo = 49.90;
let sconto = 0.20;
let prezzoScontato = prezzo - (prezzo * sconto);
console.log("Prezzo scontato:", prezzoScontato);

// ES 2.4 Dichiara variabili di tipi diversi (number, string, boolean, undefined, null) e usa typeof per stampare il tipo di ciascuna.

console.log("ESERCIZIO 2.4");

let numero = 42;
let testo = "Ciao";
let booleano = true;
let indefinito;
let nullo = null;

console.log("Tipo di numero:", typeof numero);
console.log("Tipo di testo:", typeof testo);
console.log("Tipo di booleano:", typeof booleano);
console.log("Tipo di indefinito:", typeof indefinito);
console.log("Tipo di nullo:", typeof nullo);    

