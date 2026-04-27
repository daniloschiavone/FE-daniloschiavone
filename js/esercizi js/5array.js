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

//Dato un array di numeri, scrivi una funzione che restituisca un nuovo array contenente solo i numeri pari.
console.log("ESERCIZIO 5.4");

function filtraPari(arr) {
    let pari = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            pari.push(arr[i]);
        }
    }
    return pari;
}

console.log("I numeri pari dell'array sono:", filtraPari(numeri));

//Scrivi una funzione che accetti un array e un valore, e restituisca quante volte quel valore appare nell'array.
console.log("ESERCIZIO 5.5");

function contaValore(arr, valore) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === valore) {
            count++;
        }
    }
    return count;
}

let valori = [1, 2, 3, 2, 4, 2, 5];
console.log("Il valore 2 appare", contaValore(valori, 2), "volte nell'array.");

//Scrivi una funzione che accetti un array di numeri e restituisca la media aritmetica.

console.log("ESERCIZIO 5.6");

function mediaArray(arr) {
    let somma = 0;
    for (let i = 0; i < arr.length; i++) {
        somma += arr[i];
    }
    return somma / arr.length;
}

console.log("La media dell'array è:", mediaArray(numeri));

//Scrivi una funzione che accetti un array e restituisca un nuovo array senza elementi duplicati.

console.log("ESERCIZIO 5.7");

function rimuoviDuplicati(arr) {
    let unico = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unico.includes(arr[i])) {
            unico.push(arr[i]);
        }
    }
    return unico;
}

let arrayConDuplicati = [1, 2, 3, 2, 4, 3, 5];
console.log("Array senza duplicati:", rimuoviDuplicati(arrayConDuplicati));

//Scrivi una funzione che accetti due array e restituisca un array con gli elementi comuni (intersezione).

console.log("ESERCIZIO 5.8");

function intersezioneArray(arr1, arr2) {
    let intersezione = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !intersezione.includes(arr1[i])) {
            intersezione.push(arr1[i]);
        }
    }
    return intersezione;
}

let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];
console.log("Elementi comuni tra i due array:", intersezioneArray(array1, array2));

//