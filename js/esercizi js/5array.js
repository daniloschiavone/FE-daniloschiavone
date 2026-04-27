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

//Scrivi una funzione che accetti un array di stringhe e restituisca l'array ordinato per lunghezza delle stringhe (dalla più corta alla più lunga).
console.log("ESERCIZIO 5.9");

function ordinaPerLunghezza(arr) {
    return arr.sort((a, b) => a.length - b.length);
}

let stringhe = ["casa", "auto", "a", "computer"];
console.log("Array ordinato per lunghezza:", ordinaPerLunghezza(stringhe));

//Scrivi una funzione che accetti un array e lo "ruoti" di N posizioni verso destra. 
//Ad esempio, [1, 2, 3, 4, 5] ruotato di 2 posizioni diventa [4, 5, 1, 2, 3].

console.log("ESERCIZIO 5.10");

function ruotaArray(arr, n) {
    n = n % arr.length; // In caso n sia maggiore della lunghezza dell'array
    return arr.slice(-n).concat(arr.slice(0, -n));
}

let arrayDaRuotare = [1, 2, 3, 4, 5];
console.log("Array ruotato di 2 posizioni:", ruotaArray(arrayDaRuotare, 2));    

//Scrivi una funzione che accetti un array di numeri e restituisca un oggetto con le proprietà min, max, media e somma.

console.log("ESERCIZIO 5.11");

function analizzaArray(arr) {
    let min = arr[0];
    let max = arr[0];
    let somma = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
        somma += arr[i];
    }

    return {
        min: min,
        max: max,
        media: somma / arr.length,
        somma: somma
    };
}

console.log("Analisi dell'array:", analizzaArray(numeri));

//Scrivi una funzione che "appiattisca" un array multidimensionale di un livello.
//Ad esempio, [[1, 2], [3, 4], [5]] diventa [1, 2, 3, 4, 5]. Non usare flat().

console.log("ESERCIZIO 5.12");

function appiattisciArray(arr) {
    let appiattito = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            for (let j = 0; j < arr[i].length; j++) {
                appiattito.push(arr[i][j]);
            }
        } else {
            appiattito.push(arr[i]);
        }
    }
    return appiattito;
}

let arrayMultidimensionale = [[1, 2], [3, 4], [5]];
console.log("Array appiattito:", appiattisciArray(arrayMultidimensionale)); 

//Scrivi una funzione che verifichi se un array è un palindromo (si legge uguale da sinistra a destra e da destra a sinistra).

console.log("ESERCIZIO 5.13");

function èPalindromo(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

let arrayPalindromo = [1, 2, 3, 2, 1];
console.log("L'array è un palindromo?", èPalindromo(arrayPalindromo));

let arrayNonPalindromo = [1, 2, 3, 4, 5];
console.log("L'array è un palindromo?", èPalindromo(arrayNonPalindromo));   

//Scrivi una funzione che, dato un array di numeri, restituisca un array dove ogni elemento
//è la somma cumulativa fino a quel punto. Ad esempio, [1, 2, 3, 4] diventa [1, 3, 6, 10].

console.log("ESERCIZIO 5.14");

function sommaCumulativa(arr) {
    let cumulativa = [];
    let somma = 0;
    for (let i = 0; i < arr.length; i++) {
        somma += arr[i];
        cumulativa.push(somma);
    }
    return cumulativa;
}

let arrayDaCumulare = [1, 2, 3, 4];
console.log("Array con somma cumulativa:", sommaCumulativa(arrayDaCumulare));

//Scrivi una funzione che accetti un array e restituisca un nuovo array con gli elementi in ordine casuale (shuffle).

console.log("ESERCIZIO 5.15");

function shuffleArray(arr) {
    let shuffled = arr.slice(); // Crea una copia dell'array originale
    for (let i = shuffled.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // Genera un indice casuale
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Scambia gli elementi
    }
    return shuffled;
}

let arrayDaMescolare = [1, 2, 3, 4, 5];
console.log("Array mescolato:", shuffleArray(arrayDaMescolare));

//Scrivi una funzione che accetti un array di numeri e restituisca il secondo valore più grande.

console.log("ESERCIZIO 5.16");

function secondoMassimo(arr) {
    let max = -Infinity;
    let secondoMax = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondoMax = max;
            max = arr[i];
        } else if (arr[i] > secondoMax && arr[i] !== max) {
            secondoMax = arr[i];
        }
    }

    return secondoMax;
}

let arrayPerSecondoMassimo = [1, 3, 5, 7, 9];
console.log("Il secondo valore più grande è:", secondoMassimo(arrayPerSecondoMassimo)); 

