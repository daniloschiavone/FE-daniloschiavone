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
