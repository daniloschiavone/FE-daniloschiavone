//Crea un oggetto libro con le proprietà: titolo, autore, annoPubblicazione, pagine. Stampa ogni proprietà.

console.log("Esercizio 6.1");

const libro = {
    titolo: "Il Signore degli Anelli",
    autore: "J.R.R. Tolkein",
    annoPubblicazione: 1954,
    pagine: 1216
};

console.log("Titolo:", libro.titolo);
console.log("Autore:", libro.autore);
console.log("Anno di pubblicazione:", libro.annoPubblicazione);
console.log("Pagine:", libro.pagine);

//Crea un oggetto rettangolo con le proprietà base e altezza, e i metodi area e perimetro che restituiscano i rispettivi valori.

console.log("Esercizio 6.2");

const rettangolo = {
    base: 5,
    altezza: 3,
    area: function() {
        return this.base * this.altezza;
    },
    perimetro: function() {
        return 2 * (this.base + this.altezza);
    }
};

console.log("Area del rettangolo:", rettangolo.area());
console.log("Perimetro del rettangolo:", rettangolo.perimetro());

//Scrivi una funzione che accetti un oggetto e restituisca il numero delle sue proprietà.

console.log("Esercizio 6.3");

function contaProprieta(obj) {
    return Object.keys(obj).length;
}

const persona = {
    nome: "Mario",
    cognome: "Rossi",
    età: 30
};

console.log("Numero di proprietà dell'oggetto persona:", contaProprieta(persona));

//Scrivi una funzione che accetti un oggetto persona (con nome, cognome, eta) e restituisca una stringa di presentazione formattata.

console.log("Esercizio 6.4");

function presentazione(persona) {
    return `Ciao, mi chiamo ${persona.nome} ${persona.cognome} e ho ${persona.età} anni.`;
}

console.log(presentazione(persona));

//Scrivi una funzione che accetti due oggetti e restituisca un nuovo oggetto che sia la fusione dei due 
//(le proprietà del secondo sovrascrivono quelle del primo in caso di conflitto).

console.log("Esercizio 6.5");

function fusione(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

const oggetto1 = { a: 1, b: 2 };
const oggetto2 = { b: 3, c: 4 };

const oggettoFuso = fusione(oggetto1, oggetto2);
console.log("Oggetto fuso:", oggettoFuso);  

//Dato un array di oggetti che rappresentano studenti (ciascuno con nome e voto),
//scrivi una funzione che restituisca il nome dello studente con il voto più alto.

console.log("Esercizio 6.6");

const studenti = [
    { nome: "Alice", voto: 85 },
    { nome: "Bob", voto: 92 },
    { nome: "Charlie", voto: 78 }
];

function studenteMigliore(studenti) {
    let migliore = studenti[0];
    for (let studente of studenti) {
        if (studente.voto > migliore.voto) {
            migliore = studente;
        }
    }
    return migliore.nome;
}

console.log("Lo studente con il voto più alto è:", studenteMigliore(studenti));

//Dato un array di oggetti { nome, prezzo, quantita } che rappresentano prodotti in un carrello,
//scrivi una funzione che calcoli il totale dell'ordine.

console.log("Esercizio 6.7");

const carrello = [
    { nome: "Prodotto A", prezzo: 10, quantita: 2 },
    { nome: "Prodotto B", prezzo: 15, quantita: 1 },
    { nome: "Prodotto C", prezzo: 5, quantita: 4 }
];

function totaleOrdine(carrello) {
    let totale = 0;
    for (let prodotto of carrello) {
        totale += prodotto.prezzo * prodotto.quantita;
    }
    return totale;
}

console.log("Il totale dell'ordine è:", totaleOrdine(carrello));
