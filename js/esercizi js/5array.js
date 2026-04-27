//Crea un array con i nomi di 5 tuoi amici. Stampa il primo, l'ultimo e la lunghezza dell'array.
console.log("ESERCIZIO 5.1");

let amici = ["Luca", "Marco", "Giulia", "Sara", "Francesco"];
console.log("Primo amico:", amici[0]);
console.log("Ultimo amico:", amici[amici.length - 1]);
console.log("Lunghezza dell'array:", amici.length);

//Dato un array di numeri, scrivi una funzione che restituisca la somma di tutti gli elementi.
console.log("ESERCIZIO 5.2");

function sommaArray(arr) {
    let somma = 0;
    for (let i = 0; i < arr.length; i++) {
        somma += arr[i];
    }
    return somma;
}

let numeri = [1, 2, 3, 4, 5];
console.log("La somma dell'array è:", sommaArray(numeri));

//Dato un array di numeri, scrivi una funzione che restituisca il valore massimo.
console.log("ESERCIZIO 5.3");

function maxArray(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log("Il valore massimo dell'array è:", maxArray(numeri));

//