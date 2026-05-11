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

//Dato un array di oggetti { nome, prezzo } che rappresentano prodotti, usa filter per trovare i prodotti con prezzo inferiore a 20 euro,
//poi usa map per ottenere un array con solo i nomi di quei prodotti.

console.log("Esercizio 7.4:");

const prodotti = [
    { nome: "Prodotto A", prezzo: 15 },
    { nome: "Prodotto B", prezzo: 25 },
    { nome: "Prodotto C", prezzo: 10 },
    { nome: "Prodotto D", prezzo: 30 }
];

const prodottiEconomici = prodotti.filter(prodotto => prodotto.prezzo < 20);
const nomiProdottiEconomici = prodottiEconomici.map(prodotto => prodotto.nome);
console.log(nomiProdottiEconomici);

//Dato un array di numeri, usa reduce per calcolare il prodotto di tutti gli elementi.

console.log("Esercizio 7.5:");

const numeri3 = [2, 3, 4];
const prodottoTotale = numeri3.reduce((acc, n) => acc * n, 1);
console.log(prodottoTotale);

//Dato un array di stringhe, usa reduce per trovare la stringa più lunga.

console.log("Esercizio 7.6:");

const stringhe2 = ["ciao", "mondo", "javascript", "esercizio"];
const stringaPiuLunga = stringhe2.reduce((acc, str) => str.length > acc.length ? str : acc, "");
console.log(stringaPiuLunga);

//Dato un array di oggetti { studente, voto }, usa i metodi degli array per calcolare la media dei voti.

console.log("Esercizio 7.7:");

const studenti = [
    { studente: "Alice", voto: 85 },
    { studente: "Bob", voto: 90 },
    { studente: "Charlie", voto: 78 }
];

const mediaVoti = studenti.reduce((acc, studente) => acc + studente.voto, 0) / studenti.length;
console.log(mediaVoti); 

//Dato un array di numeri che può contenere duplicati,
//usa filter per creare un array senza duplicati (senza usare Set).

console.log("Esercizio 7.8:");

const numeri4 = [1, 2, 3, 2, 4, 1, 5];
const numeriUnici = numeri4.filter((n, index) => numeri4.indexOf(n) === index);
console.log(numeriUnici);

//Dato un array di oggetti { nome, eta }, usa i metodi degli array per trovare la persona più giovane.

console.log("Esercizio 7.9:");

const persone = [
    { nome: "Alice", eta: 30 },
    { nome: "Bob", eta: 25 },
    { nome: "Charlie", eta: 35 }
];

const personaPiuGiovane = persone.reduce((acc, persona) => persona.eta < acc.eta ? persona : acc, persone[0]);
console.log(personaPiuGiovane);

//Dato un array di stringhe, usa reduce per creare un oggetto che conti le occorrenze di ogni stringa.

console.log("Esercizio 7.10:");

const stringhe3 = ["apple", "banana", "apple", "orange", "banana", "apple"];
const conteggioOccorrenze = stringhe3.reduce((acc, str) => {
    acc[str] = (acc[str] || 0) + 1;
    return acc;
}, {});
console.log(conteggioOccorrenze);

//Dato un array di array di numeri (es. [[1, 2], [3, 4], [5, 6]]),
//usa reduce per appiattirlo in un unico array e poi calcola la somma totale con un'altra chiamata a reduce.

console.log("Esercizio 7.11:");

const arrayDiArray = [[1, 2], [3, 4], [5, 6]];
const arrayAppiattito = arrayDiArray.reduce((acc, arr) => acc.concat(arr), []);
const sommaTotale = arrayAppiattito.reduce((acc, n) => acc + n, 0);
console.log(sommaTotale);

//Dato un array di transazioni (oggetti con tipo che può essere "entrata" o "uscita" e importo),
//calcola il saldo finale usando reduce.

console.log("Esercizio 7.12:");

const transazioni = [
    { tipo: "entrata", importo: 100 },
    { tipo: "uscita", importo: 30 },
    { tipo: "entrata", importo: 50 },
    { tipo: "uscita", importo: 20 }
];

const saldoFinale = transazioni.reduce((acc, transazione) => {
    if (transazione.tipo === "entrata") {
        return acc + transazione.importo;
    } else {
        return acc - transazione.importo;
    }
}, 0);
console.log(saldoFinale);

//Dato un array di numeri, scrivi una singola catena di metodi che:
//1. Elimini i numeri negativi
//2. Rimuova i duplicati
//3. Ordini in ordine crescente
//4. Moltiplichi ogni numero per 10

console.log("Esercizio 7.13:");
const numeri5 = [3, -1, 2, 3, -5, 4, 2];
const risultato = numeri5
    .filter(n => n >= 0) // Elimina i numeri negativi
    .filter((n, index, arr) => arr.indexOf(n) === index) // Rimuove i duplicati
    .sort((a, b) => a - b) // Ordina in ordine crescente
    .map(n => n * 10); // Moltiplica ogni numero per 10

console.log(risultato);

//Implementa la tua versione di map, filter e reduce come funzioni standalone (senza usare i metodi nativi).
//Ciascuna deve accettare un array e una callback.

console.log("Esercizio 7.14:");

function myMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

function myFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}

function myReduce(array, callback, initialValue) {
    if (array.length === 0 && arguments.length < 3) {
        throw new TypeError("Reduce of empty array with no initial value");
    }

    let accumulator;
    let startIndex;

    if (arguments.length >= 3) {
        accumulator = initialValue;
        startIndex = 0;
    } else {
        accumulator = array[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}

//--- Esempio di utilizzo: ---
const arr = [1, 2, 3];
console.log(myMap(arr, x => x * 2)); // [2, 4, 6]
console.log(myFilter(arr, x => x % 2 === 1)); // [1, 3]
console.log(myReduce(arr, (acc, x) => acc + x, 0)); // 6

//Dato un array di oggetti che rappresentano ordini { cliente, prodotto, quantita, prezzoUnitario }, scrivi una pipeline che:

// 1. Calcoli il totale di ogni ordine
// 2. Raggruppi gli ordini per cliente
// 3. Calcoli il totale speso da ogni cliente

console.log("Esercizio 7.15:");

const ordini = [
    { cliente: "Alice", prodotto: "Prodotto A", quantita: 2, prezzoUnitario: 10 },
    { cliente: "Bob", prodotto: "Prodotto B", quantita: 1, prezzoUnitario: 20 },
    { cliente: "Alice", prodotto: "Prodotto C", quantita: 3, prezzoUnitario: 5 }
];

const ordiniConTotale = ordini
    .map(ordine => ({ ...ordine, totale: ordine.quantita * ordine.prezzoUnitario })); // Calcola il totale di ogni ordine

const ordiniPerCliente = ordiniConTotale.reduce((acc, ordine) => {
    if (!acc[ordine.cliente]) {
        acc[ordine.cliente] = [];
    }
    acc[ordine.cliente].push(ordine);
    return acc;
}, {}); // Raggruppa gli ordini per cliente

const totalePerCliente = Object.fromEntries(
    Object.entries(ordiniPerCliente).map(([cliente, ordiniCliente]) => {
        const totale = ordiniCliente.reduce((acc, ordine) => acc + ordine.totale, 0);
        return [cliente, totale];
    })
); // Calcola il totale speso da ogni cliente

console.log(totalePerCliente);

//Dato un array di numeri, usa map per generare un array di oggetti { valore, quadrato, cubo } per ciascun numero.

console.log("Esercizio 7.16:");

const numeri6 = [1, 2, 3];
const arrayDiOggetti = numeri6.map(n => ({
    valore: n,
    quadrato: n ** 2,
    cubo: n ** 3
}));

console.log(arrayDiOggetti);

//Dato un array di stringhe che rappresentano indirizzi email, usa filter per ottenere solo quelli che terminano con ".it".

console.log("Esercizio 7.17:");

const email = ["alice@example.com", "bob@example.it", "charlie@example.com", "diana@example.it"];
const emailIt = email.filter(e => e.endsWith(".it"));

console.log(emailIt);

//Dato un array di oggetti { nome, voti } (dove voti è un array di numeri),
//usa map per creare un nuovo array dove ogni oggetto ha una proprietà aggiuntiva media.ù

console.log("Esercizio 7.18:");

const studenti2 = [
    { nome: "Alice", voti: [85, 90, 78] },
    { nome: "Bob", voti: [80, 85, 88] },
    { nome: "Charlie", voti: [90, 92, 95] }
];

const studentiConMedia = studenti2.map(studente => {
    const media = studente.voti.reduce((acc, voto) => acc + voto, 0) / studente.voti.length;
    return { ...studente, media };
});

console.log(studentiConMedia);  

//Dato un array di frasi (stringhe), usa flatMap per ottenere un array di tutte le singole parole, tutte in minuscolo.

console.log("Esercizio 7.19:");

const frasi = ["Ciao Mondo", "JavaScript è fantastico", "Esercizi con flatMap"];
const parole = frasi.flatMap(frase => frase.toLowerCase().split(" "));

console.log(parole);

//Dato un array di numeri, usa reduce per creare un oggetto che separi i numeri in { pari: [...], dispari: [...] }.

console.log("Esercizio 7.20:");

const numeri7 = [1, 2, 3, 4, 5, 6];
const numeriSeparati = numeri7.reduce((acc, n) => {
    if (n % 2 === 0) {
        acc.pari.push(n);
    } else {
        acc.dispari.push(n);
    }
    return acc;
}, { pari: [], dispari: [] });

console.log(numeriSeparati);

//Dato un array di oggetti { nome, eta }, usa sort e slice per ottenere i 3 più anziani.

console.log("Esercizio 7.21:");

const personeAnziane = [
    { nome: "Alice", eta: 30 },
    { nome: "Bob", eta: 25 },
    { nome: "Charlie", eta: 35 },
    { nome: "Diana", eta: 28 },
    { nome: "Eve", eta: 32 }
];

const anziani = personeAnziane
    .sort((a, b) => b.eta - a.eta)
    .slice(0, 3);

console.log(anziani);

//Dato un array di stringhe, usa i metodi degli array per trovare la parola che appare più frequentemente.

console.log("Esercizio 7.22:");

const parole2 = ["apple", "banana", "apple", "orange", "banana", "apple"];
const frequenzaParole = parole2.reduce((acc, parola) => {
    acc[parola] = (acc[parola] || 0) + 1;
    return acc;
}, {});

let parolaPiuFrequente = null;
let maxFrequenza = 0;

for (const parola in frequenzaParole) {
    if (frequenzaParole[parola] > maxFrequenza) {
        maxFrequenza = frequenzaParole[parola];
        parolaPiuFrequente = parola;
    }
}

console.log(parolaPiuFrequente);

//Dato un array di oggetti { studente, materia, voto },
//usa reduce per creare un oggetto dove ogni studente ha un array dei suoi voti raggruppati per materia.

console.log("Esercizio 7.23:");

const voti = [
    { studente: "Alice", materia: "Matematica", voto: 85 },
    { studente: "Alice", materia: "Inglese", voto: 90 },
    { studente: "Bob", materia: "Matematica", voto: 80 },
    { studente: "Bob", materia: "Inglese", voto: 85 },
    { studente: "Charlie", materia: "Matematica", voto: 90 },
    { studente: "Charlie", materia: "Inglese", voto: 92 }
];

const votiPerStudente = voti.reduce((acc, { studente, materia, voto }) => {
    if (!acc[studente]) {
        acc[studente] = {};
    }
    if (!acc[studente][materia]) {
        acc[studente][materia] = [];
    }
    acc[studente][materia].push(voto);
    return acc;
}, {});

console.log(votiPerStudente);

//Scrivi una funzione che accetti un array e una funzione di raggruppamento,
//e restituisca un oggetto con gli elementi raggruppati (implementa una versione generica di groupBy).

console.log("Esercizio 7.24:");

function groupBy(array, keyFn) {
    return array.reduce((acc, item) => {
        const key = keyFn(item);
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    }, {});
}

//--- Esempio di utilizzo: ---
const persone2 = [
    { nome: "Alice", eta: 30 },
    { nome: "Bob", eta: 25 },
    { nome: "Charlie", eta: 30 },
    { nome: "Diana", eta: 25 }
];

const personeRaggruppate = groupBy(persone2, persona => persona.eta);
console.log(personeRaggruppate);

//Dato un array di date (come stringhe "YYYY-MM-DD"),
//usa filter per ottenere solo le date di un mese specifico, poi ordinale dalla più recente alla più vecchia.

console.log("Esercizio 7.25:");

const date = ["2024-01-15", "2024-02-20", "2024-01-10", "2024-03-05"];
const meseSpecifico = "01";

const dateFiltrate = date.filter(d => d.split("-")[1] === meseSpecifico);
const dateOrdinate = dateFiltrate.sort((a, b) => new Date(b) - new Date(a));

console.log(dateOrdinate);

//Dato un array di oggetti { prodotto, prezzo, sconto }, scrivi una pipeline che:

// 1. Calcoli il prezzo scontato
// 2. Filtri i prodotti con prezzo scontato > 10
// 3. Ordini per prezzo scontato crescente
// 4. Restituisca un array di stringhe "prodotto: €prezzo"

console.log("Esercizio 7.26:");

const prodotti2 = [
    { prodotto: "Prodotto A", prezzo: 20, sconto: 0.1 },
    { prodotto: "Prodotto B", prezzo: 15, sconto: 0.2 },
    { prodotto: "Prodotto C", prezzo: 30, sconto: 0.05 }
];  

const risultato2 = prodotti2
    .map(p => ({ ...p, prezzoScontato: p.prezzo * (1 - p.sconto) })) // Calcola il prezzo scontato
    .filter(p => p.prezzoScontato > 10) // Filtra i prodotti con prezzo scontato > 10
    .sort((a, b) => a.prezzoScontato - b.prezzoScontato) // Ordina per prezzo scontato crescente
    .map(p => `${p.prodotto}: €${p.prezzoScontato.toFixed(2)}`); // Restituisce un array di stringhe "prodotto: €prezzo"

console.log(risultato2);

//Dato un array di numeri,
//usa reduce per calcolare la varianza. La varianza è la media dei quadrati delle differenze dalla media.

console.log("Esercizio 7.27:");

const numeri8 = [1, 2, 3, 4, 5];
const media = numeri8.reduce((acc, n) => acc + n, 0) / numeri8.length;
const varianza = numeri8.reduce((acc, n) => acc + (n - media) ** 2, 0) / numeri8.length;

console.log(varianza);

//Dato un array di parole, usa i metodi degli array per creare un indice:
//un oggetto dove ogni lettera dell'alfabeto è una chiave e il valore è un array di parole che iniziano con quella lettera.

console.log("Esercizio 7.28:");

const parole3 = ["apple", "banana", "avocado", "grape", "orange", "melon"];
const indice = parole3.reduce((acc, parola) => {
    const letteraIniziale = parola.charAt(0).toLowerCase();
    if (!acc[letteraIniziale]) {
        acc[letteraIniziale] = [];
    }
    acc[letteraIniziale].push(parola);
    return acc;
}, {});

console.log(indice);

//Scrivi una funzione zip che accetti due array e restituisca un array di coppie. Ad esempio, zip([1, 2, 3], ["a", "b", "c"]) 
//restituisce [[1, "a"], [2, "b"], [3, "c"]]. Se gli array hanno lunghezza diversa, fermati al più corto.

console.log("Esercizio 7.29:");

function zip(array1, array2) {
    const lunghezza = Math.min(array1.length, array2.length);
    const risultato = [];
    for (let i = 0; i < lunghezza; i++) {
        risultato.push([array1[i], array2[i]]);
    }
    return risultato;
}

//--- Esempio di utilizzo: ---
const zipped = zip([1, 2, 3], ["a", "b", "c"]);
console.log(zipped); // [[1, "a"], [2, "b"], [3, "c"]]

//Dato un array di oggetti che rappresentano log di accesso { utente, data, azione }, scrivi una pipeline che:

// 1. Raggruppi per utente
// 2. Per ogni utente conti il numero totale di azioni
// 3. Ordini gli utenti per numero di azioni (dal più attivo al meno attivo)
// 4. Restituisca un array di oggetti { utente, totaleAzioni }

console.log("Esercizio 7.30:");

const logAccesso = [
    { utente: "Alice", data: "2024-01-01", azione: "login" },
    { utente: "Bob", data: "2024-01-01", azione: "login" },
    { utente: "Alice", data: "2024-01-02", azione: "logout" },
    { utente: "Charlie", data: "2024-01-01", azione: "login" },
    { utente: "Bob", data: "2024-01-02", azione: "logout" },
    { utente: "Charlie", data: "2024-01-02", azione: "logout" }
];

const logPerUtente = logAccesso.reduce((acc, voce) => {
    if (!acc[voce.utente]) {
        acc[voce.utente] = [];
    }
    acc[voce.utente].push(voce);
    return acc;
}, {});

const utentiOrdinati = Object.entries(logPerUtente)
    .map(([utente, azioni]) => ({ utente, totaleAzioni: azioni.length }))
    .sort((a, b) => b.totaleAzioni - a.totaleAzioni);

console.log(utentiOrdinati);