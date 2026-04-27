//Scrivi una arrow function benvenuto che accetti un nome come parametro e restituisca la stringa "Benvenuto, [nome]!".
console.log("ESERCIZIO 4.1");

const benvenuto = (nome) => {
    return `Benvenuto, ${nome}!`;
}
console.log(benvenuto("Mario"));

//Scrivi una arrow function rettangolo che accetti base e altezza come parametri e restituisca l'area del rettangolo.
console.log("ESERCIZIO 4.2");

const rettangolo = (base, altezza) => {
    return base * altezza;
}
console.log("Area del rettangolo:", rettangolo(5, 3));

//Scrivi una arrow function celsiusToFahrenheit che converta una temperatura da Celsius a Fahrenheit. La formula è: F = C × 9/5 + 32.
console.log("ESERCIZIO 4.3");

const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
}
console.log("30°C in Fahrenheit è:", celsiusToFahrenheit(30));

//Scrivi una arrow function massimo che accetti tre numeri e restituisca il più grande.
console.log("ESERCIZIO 4.4");

const massimo = (a, b, c) => {
    return Math.max(a, b, c);
}
console.log("Il massimo tra 5, 10 e 3 è:", massimo(5, 10, 3));

//Scrivi una arrow function isPari che accetti un numero e restituisca true se è pari, false altrimenti.
console.log("ESERCIZIO 4.5");

const isPari = (numero) => {
    return numero % 2 === 0;
}
console.log("Il numero 4 è pari?", isPari(4));
console.log("Il numero 7 è pari?", isPari(7));  

//Scrivi una arrow function fattoriale che calcoli il fattoriale di un numero usando un ciclo.
console.log("ESERCIZIO 4.6");

const fattoriale = (n) => {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log("Il fattoriale di 5 è:", fattoriale(5));

//Scrivi una arrow function contaVocali che accetti una stringa e restituisca il numero di vocali presenti.
console.log("ESERCIZIO 4.7");

const contaVocali = (str) => {
    const vocali = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vocali.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log("Il numero di vocali in 'JavaScript' è:", contaVocali("JavaScript"));

//Scrivi una arrow function isPrimo che accetti un numero e restituisca true se è primo, false altrimenti.
console.log("ESERCIZIO 4.8");

const isPrimo = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log("Il numero 7 è primo?", isPrimo(7));
console.log("Il numero 10 è primo?", isPrimo(10));

//Scrivi una arrow function potenza che accetti una base e un esponente (con esponente predefinito a 2) e restituisca il risultato.
console.log("ESERCIZIO 4.9");

const potenza = (base, esponente = 2) => {
    return Math.pow(base, esponente);
}
console.log("5 alla seconda potenza è:", potenza(5, 2));
console.log("3 alla terza potenza è:", potenza(3, 3));  

//Scrivi una arrow function invertiStringa che accetti una stringa e restituisca la stringa invertita (non usare metodi degli array: usa un ciclo).
console.log("ESERCIZIO 4.10");

const invertiStringa = (str) => {
    let inverted = '';
    for (let i = str.length - 1; i >= 0; i--) {
        inverted += str[i];
    }
    return inverted;
}
console.log("La stringa 'JavaScript' invertita è:", invertiStringa("JavaScript")); 

//Scrivi una arrow function applicaDue che accetti un valore e due funzioni, e restituisca il risultato dell'applicazione della seconda funzione al risultato della prima.
// Esempio di utilizzo:
// applicaDue(5, raddoppia, aggiungiUno) dovrebbe restituire 11 (5*2 = 10, 10+1 = 11)

console.log("ESERCIZIO 4.11");

const applicaDue = (valore, func1, func2) => {
    return func2(func1(valore));
}

const raddoppia = (x) => x * 2;
const aggiungiUno = (x) => x + 1;

console.log("Applicazione di raddoppia e aggiungiUno a 5:", applicaDue(5, raddoppia, aggiungiUno));

//Scrivi una arrow function ripeti che accetti una funzione e un numero N, e invochi quella funzione N volte.
console.log("ESERCIZIO 4.12");

const ripeti = (func, N) => {
    for (let i = 0; i < N; i++) {
        func();
    }
}

const saluta = () => console.log("Ciao!");

console.log("Ripetizione di saluta 3 volte:");
ripeti(saluta, 3);

//Scrivi una arrow function creaContatore che restituisca una funzione. Ogni volta che la funzione restituita viene chiamata, 
// deve restituire il numero successivo (partendo da 1).
console.log("ESERCIZIO 4.13");

const creaContatore = () => {
    let count = 0;
    return () => {
        count++;
        return count;
    }
}

const contatore = creaContatore();
console.log("Contatore chiamato la prima volta:", contatore());
console.log("Contatore chiamato la seconda volta:", contatore());
console.log("Contatore chiamato la terza volta:", contatore());

//Scrivi una arrow function sommaFinoA che accetti un numero N e restituisca la somma di tutti i numeri da 1 a N. 
//Implementala in modo ricorsivo (la funzione chiama se stessa).
console.log("ESERCIZIO 4.14");

const sommaFinoA = (N) => {
    if (N <= 1) return N;
    return N + sommaFinoA(N - 1);
}

console.log("La somma dei numeri da 1 a 5 è:", sommaFinoA(5)); 

//Scrivi una arrow function minMax che accetti un numero qualsiasi di argomenti e restituisca un oggetto con min e max.
console.log("ESERCIZIO 4.15");

const minMax = (...numeri) => {
    return {
        min: Math.min(...numeri),
        max: Math.max(...numeri)
    };
}

console.log("Min e Max tra 3, 7, 1, 9 è:", minMax(3, 7, 1, 9));

//Scrivi una arrow function tronca che accetti un numero e un numero di decimali, 
//e restituisca il numero troncato a quel numero di decimali (senza usare toFixed).
console.log("ESERCIZIO 4.16");

const tronca = (num, decimali) => {
    const fattore = Math.pow(10, decimali);
    return Math.trunc(num * fattore) / fattore;
}

console.log("Il numero 3.14159 troncato a 2 decimali è:", tronca(3.14159, 2));

//Scrivi una arrow function ripetiFino che accetti una stringa e una lunghezza massima,
//e restituisca la stringa ripetuta fino a raggiungere quella lunghezza.
//Ad esempio, ripetiFino("abc", 7) restituisce "abcabca".
console.log("ESERCIZIO 4.17");

const ripetiFino = (str, lunghezza) => {
    let risultato = '';
    while (risultato.length < lunghezza) {
        risultato += str;
    }
    return risultato.slice(0, lunghezza);
}

console.log("La stringa 'abc' ripetuta fino a raggiungere la lunghezza 7 è:", ripetiFino("abc", 7));

