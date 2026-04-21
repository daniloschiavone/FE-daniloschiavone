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

// ES 2.5 Scrivi un programma che converta la stringa "123" in un numero, gli aggiunga 7 e stampi il risultato.

console.log("ESERCIZIO 2.5");

let stringaNumero = "123";
let numeroConvertito = parseInt(stringaNumero);
let risultato = numeroConvertito + 7;
console.log("Risultato:", risultato);   

// ES 2.6 Senza eseguire il codice, prevedi il risultato di ciascuna espressione. Poi verificalo:

console.log("ESERCIZIO 2.6");

console.log("5" + 3); // "53"
console.log("5" - 3); // 2
console.log("5" * "2"); // 10
console.log(true + 1); // 2
console.log(false + "ciao"); // "falseciao"

// ES 2.7 Dichiara le variabili eta (con valore 17), haPermesso (con valore true). Scrivi un'espressione che restituisca true solo se la persona ha almeno 18 anni oppure ha un permesso. Stampa il risultato.

console.log("ESERCIZIO 2.7");

let eta = 17;
let haPermesso = true;
let puòEntrare = (eta >= 18) || haPermesso;
console.log("Può entrare:", puòEntrare);

// ES 2.8 Scrivi un programma che, date le variabili nome, cognome e eta, stampi una frase di presentazione usando un template literal.

console.log("ESERCIZIO 2.8");

let nome2 = "Danilo";
let cognome = "Schiavone";
let eta2 = 32;
let presentazione = `Ciao, mi chiamo ${nome2} ${cognome} e ho ${eta2} anni.`;
console.log(presentazione); 

// ES 2.9  Dato un numero di secondi totali (es. 3661), scrivi un programma che calcoli e stampi il corrispondente in ore, minuti e secondi rimanenti.

console.log("ESERCIZIO 2.9");

let secondiTotali = 3661;
let ore = Math.floor(secondiTotali / 3600);
let minuti = Math.floor((secondiTotali % 3600) / 60);
let secondiRimanenti = secondiTotali % 60;

console.log(`${ore} ore, ${minuti} minuti, ${secondiRimanenti} secondi`);  

// ES 2.10 Scrivi un programma che scambi il valore di due variabili a e b senza usare una terza variabile. Stampa i valori prima e dopo lo scambio.

console.log("ESERCIZIO 2.10");

let a2 = 5;
let b2 = 10;

console.log("Prima dello scambio: a =", a2, "b =", b2);

a2 = a2 + b2; // a2 ora è 15
b2 = a2 - b2; // b2 ora è 5
a2 = a2 - b2; // a2 ora è 10

console.log("Dopo lo scambio: a =", a2, "b =", b2); 
