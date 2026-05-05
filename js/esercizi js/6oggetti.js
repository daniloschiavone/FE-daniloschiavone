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

//Scrivi una funzione che accetti un oggetto e restituisca un nuovo oggetto con chiavi e valori invertiti.
//Ad esempio, { a: 1, b: 2 } diventa { 1: "a", 2: "b" }.

console.log("Esercizio 6.8");

function invertiChiaviValori(obj) {
    const invertito = {};
    for (let chiave in obj) {
        if (obj.hasOwnProperty(chiave)) {
            invertito[obj[chiave]] = chiave;
        }
    }
    return invertito;
}

const oggettoOriginale = { a: 1, b: 2 };
const oggettoInvertito = invertiChiaviValori(oggettoOriginale);
console.log("Oggetto invertito:", oggettoInvertito);

//Scrivi una funzione che, dato un array di oggetti con proprietà categoria e valore, 
//raggruppi gli oggetti per categoria in un nuovo oggetto. Ad esempio:
// [
//{ categoria: "frutta", valore: "mela" },
//{ categoria: "verdura", valore: "carota" },
//{ categoria: "frutta", valore: "pera" }
// ]
//output:
// {
//frutta: ["mela", "pera"],
//verdura: ["carota"]
// }

console.log("Esercizio 6.9");

function raggruppaPerCategoria(arr) {
    const raggruppato = {};
    for (let item of arr) {
        if (!raggruppato[item.categoria]) {
            raggruppato[item.categoria] = [];
        }
        raggruppato[item.categoria].push(item.valore);
    }
    return raggruppato;
}

const oggetti = [
    { categoria: "frutta", valore: "mela" },
    { categoria: "verdura", valore: "carota" },
    { categoria: "frutta", valore: "pera" }
];

console.log("Oggetti raggruppati per categoria:", raggruppaPerCategoria(oggetti));

//Scrivi una funzione che confronti due oggetti e restituisca true se hanno le stesse proprietà con gli stessi valori (confronto superficiale).

console.log("Esercizio 6.10");

function confrontaOggetti(obj1, obj2) {
    const chiavi1 = Object.keys(obj1);
    const chiavi2 = Object.keys(obj2);

    if (chiavi1.length !== chiavi2.length) {
        return false;
    }

    for (let chiave of chiavi1) {
        if (obj1[chiave] !== obj2[chiave]) {
            return false;
        }
    }

    return true;
}

const oggettoA = { a: 1, b: 2 };
const oggettoB = { a: 1, b: 2 };
const oggettoC = { a: 1, b: 3 };

console.log("Oggetti A e B sono uguali:", confrontaOggetti(oggettoA, oggettoB));
console.log("Oggetti A e C sono uguali:", confrontaOggetti(oggettoA, oggettoC));

//Crea un oggetto contoBancario con le proprietà titolare e saldo, e i metodi deposita, preleva e mostraSaldo.
//Il metodo preleva non deve permettere di andare in negativo.

console.log("Esercizio 6.11");

const contoBancario = {
    titolare: "Giovanni Rossi",
    saldo: 1000,
    deposita: function(importo) {
        this.saldo += importo;
    },
    preleva: function(importo) {
        if (importo > this.saldo) {
            console.log("Fondi insufficienti. Operazione non consentita.");
        } else {
            this.saldo -= importo;
        }
    },
    mostraSaldo: function() {
        console.log(`Il saldo attuale di ${this.titolare} è: ${this.saldo} euro.`);
    }
};

contoBancario.mostraSaldo();
contoBancario.deposita(500);
contoBancario.mostraSaldo();
contoBancario.preleva(2000);
contoBancario.preleva(300);
contoBancario.mostraSaldo();

//Dato un oggetto annidato che rappresenta una struttura ad albero (un'azienda con dipartimenti e dipendenti),
//scrivi una funzione che conti il numero totale di dipendenti.

console.log("Esercizio 6.12");

const azienda = {
    nome: "Tech Solutions",
    dipartimenti: [
        {
            nome: "Sviluppo",
            dipendenti: ["Alice", "Bob"]
        },
        {
            nome: "Marketing",
            dipendenti: ["Charlie"]
        },
        {
            nome: "Vendite",
            dipendenti: ["David", "Eve", "Frank"]
        }
    ]
};

function contaDipendenti(azienda) {
    let totaleDipendenti = 0;
    for (let dipartimento of azienda.dipartimenti) {
        totaleDipendenti += dipartimento.dipendenti.length;
    }
    return totaleDipendenti;
}

console.log("Il numero totale di dipendenti è:", contaDipendenti(azienda));

//Scrivi una funzione che accetti un array di oggetti e una chiave, e restituisca un nuovo array ordinato per il valore di quella chiave.
//Ad esempio, ordinare [{nome: "Zara", eta: 20}, {nome: "Anna", eta: 25}] per "nome".

console.log("Esercizio 6.13");

function ordinaPerChiave(arr, chiave) {
    return arr.sort((a, b) => {
        if (a[chiave] < b[chiave]) {
            return -1;
        }
        if (a[chiave] > b[chiave]) {
            return 1;
        }
        return 0;
    });
}

const persone = [
    { nome: "Zara", eta: 20 },
    { nome: "Anna", eta: 25 },
    { nome: "Luca", eta: 22 }
];

console.log("Persone ordinate per nome:", ordinaPerChiave(persone, "nome"));
console.log("Persone ordinate per età:", ordinaPerChiave(persone, "eta"));

//Scrivi una funzione che accetti un oggetto e restituisca una copia profonda (deep clone) dell'oggetto,
//gestendo oggetti e array annidati. Non usare JSON.parse(JSON.stringify()).

console.log("Esercizio 6.14");

function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }

    const clone = {};
    for (let chiave in obj) {
        if (obj.hasOwnProperty(chiave)) {
            clone[chiave] = deepClone(obj[chiave]);
        }
    }
    return clone;
}

const oggettoOriginale = {
    nome: "Mario",
    dettagli: {
        eta: 30,
        hobby: ["calcio", "cucina"]
    }
};

const oggettoClonato = deepClone(oggettoOriginale);
console.log("Oggetto originale:", oggettoOriginale);
console.log("Oggetto clonato:", oggettoClonato);

//Modifica il clone e verifica che l'originale non sia stato modificato
oggettoClonato.dettagli.eta = 31;
oggettoClonato.dettagli.hobby.push("lettura");

console.log("Oggetto originale dopo modifica al clone:", oggettoOriginale);
console.log("Oggetto clonato dopo modifica:", oggettoClonato); 

//Scrivi una funzione pick che accetti un oggetto e un array di chiavi, e restituisca un nuovo oggetto con solo quelle proprietà.

console.log("Esercizio 6.15");

function pick(obj, chiavi) {
    const risultato = {};
    for (let chiave of chiavi) {
        if (obj.hasOwnProperty(chiave)) {
            risultato[chiave] = obj[chiave];
        }
    }
    return risultato;
}

const personaCompleta = {
    nome: "Giulia",
    cognome: "Bianchi",
    eta: 28,
    professione: "Ingegnere"
};

const personaSelezionata = pick(personaCompleta, ["nome", "professione"]);
console.log("Persona selezionata:", personaSelezionata);    

//Scrivi una funzione omit che accetti un oggetto e un array di chiavi, e restituisca un nuovo oggetto senza quelle proprietà.

console.log("Esercizio 6.16");

function omit(obj, chiavi) {
    const risultato = {};
    for (let chiave in obj) {
        if (obj.hasOwnProperty(chiave) && !chiavi.includes(chiave)) {
            risultato[chiave] = obj[chiave];
        }
    }
    return risultato;
}

const personaOmmessa = omit(personaCompleta, ["cognome", "eta"]);
console.log("Persona omessa:", personaOmmessa); 

//Crea un oggetto rubrica con un array interno di contatti (ciascuno con nome, telefono, email).
//Aggiungi i metodi: aggiungiContatto, rimuoviContatto, cercaPerNome, cercaPerTelefono e mostraTutti.

console.log("Esercizio 6.17");

const rubrica = {
    contatti: [],
    aggiungiContatto: function(nome, telefono, email) {
        this.contatti.push({ nome, telefono, email });
    },
    rimuoviContatto: function(nome) {
        this.contatti = this.contatti.filter(contatto => contatto.nome !== nome);
    },
    cercaPerNome: function(nome) {
        return this.contatti.find(contatto => contatto.nome === nome);
    },
    cercaPerTelefono: function(telefono) {
        return this.contatti.find(contatto => contatto.telefono === telefono);
    },
    mostraTutti: function() {
        console.log("Contatti in rubrica:");
        this.contatti.forEach(contatto => {
            console.log(`Nome: ${contatto.nome}, Telefono: ${contatto.telefono}, Email: ${contatto.email}`);
        });
    }
};

rubrica.aggiungiContatto("Alice", "1234567890", "alice@example.com");
rubrica.aggiungiContatto("Bob", "0987654321", "bob@example.com");
rubrica.mostraTutti();
console.log("Cerca per nome 'Alice':", rubrica.cercaPerNome("Alice"));
console.log("Cerca per telefono '0987654321':", rubrica.cercaPerTelefono("0987654321"));
rubrica.rimuoviContatto("Alice");
rubrica.mostraTutti();  

//Scrivi una funzione che accetti un oggetto con proprietà annidate e un "percorso" come stringa (es. "indirizzo.citta")
//e restituisca il valore corrispondente, oppure undefined se il percorso non esiste.

console.log("Esercizio 6.18");

function getValorePercorso(obj, percorso) {
    const chiavi = percorso.split('.');
    let valore = obj;
    for (let chiave of chiavi) {
        if (valore && valore.hasOwnProperty(chiave)) {
            valore = valore[chiave];
        } else {
            return undefined;
        }
    }
    return valore;
}

const personaConIndirizzo = {
    nome: "Luca",
    indirizzo: {
        citta: "Roma",
        via: "Via Roma 1"
    }
};

console.log("Valore percorso 'indirizzo.citta':", getValorePercorso(personaConIndirizzo, "indirizzo.citta"));
console.log("Valore percorso 'indirizzo.via':", getValorePercorso(personaConIndirizzo, "indirizzo.via"));
console.log("Valore percorso 'indirizzo.cap':", getValorePercorso(personaConIndirizzo, "indirizzo.cap"));

//Dato un array di oggetti che rappresentano transazioni { data, tipo, importo, categoria },
//scrivi una funzione che restituisca un oggetto riepilogo con: totale entrate, totale uscite, saldo, e importo per categoria.

console.log("Esercizio 6.19");

const transazioni = [
    { data: "2024-01-01", tipo: "entrata", importo: 1000, categoria: "stipendio" },
    { data: "2024-01-05", tipo: "uscita", importo: 200, categoria: "spese" },
    { data: "2024-01-10", tipo: "entrata", importo: 500, categoria: "freelance" },
    { data: "2024-01-15", tipo: "uscita", importo: 300, categoria: "spese" }
];

function riepilogoTransazioni(transazioni) {
    const riepilogo = {
        totaleEntrate: 0,
        totaleUscite: 0,
        saldo: 0,
        importoPerCategoria: {} 
    };

    for (let transazione of transazioni) {
        if (transazione.tipo === "entrata") {
            riepilogo.totaleEntrate += transazione.importo;
            riepilogo.saldo += transazione.importo;
        } else if (transazione.tipo === "uscita") {
            riepilogo.totaleUscite += transazione.importo;
            riepilogo.saldo -= transazione.importo;
        }

        if (!riepilogo.importoPerCategoria[transazione.categoria]) {
            riepilogo.importoPerCategoria[transazione.categoria] = 0;
        }
        riepilogo.importoPerCategoria[transazione.categoria] += transazione.importo;
    }

    return riepilogo;
}

console.log("Riepilogo transazioni:", riepilogoTransazioni(transazioni));   
