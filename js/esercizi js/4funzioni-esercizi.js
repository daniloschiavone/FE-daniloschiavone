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

//Scrivi una arrow function sommaDigiti che accetti un numero intero e restituisca la somma delle sue cifre.
//Implementala in modo ricorsivo.
console.log("ESERCIZIO 4.18");

const sommaDigiti = (num) => {
    if (num === 0) return 0;
    return (num % 10) + sommaDigiti(Math.floor(num / 10));
}

console.log("La somma delle cifre di 1234 è:", sommaDigiti(1234));

//Scrivi una arrow function convertiTemperatura che accetti un valore, 
//un'unità di partenza ("C", "F" o "K") e un'unità di arrivo, e restituisca il valore convertito.
console.log("ESERCIZIO 4.19");

const convertiTemperatura = (valore, unitaPartenza, unitaArrivo) => {
    let celsius;
    if (unitaPartenza === "C") {
        celsius = valore;
    } else if (unitaPartenza === "F") {
        celsius = (valore - 32) * 5/9;
    } else if (unitaPartenza === "K") {
        celsius = valore - 273.15;
    } else {
        throw new Error("Unità di partenza non valida");
    }

    if (unitaArrivo === "C") {
        return celsius;
    } else if (unitaArrivo === "F") {
        return (celsius * 9/5) + 32;
    } else if (unitaArrivo === "K") {
        return celsius + 273.15;
    } else {
        throw new Error("Unità di arrivo non valida");
    }
}

console.log("30°C in Fahrenheit è:", convertiTemperatura(30, "C", "F"));
console.log("86°F in Celsius è:", convertiTemperatura(86, "F", "C"));
console.log("300K in Celsius è:", convertiTemperatura(300, "K", "C"));  

//Scrivi una arrow function convalidaEmail che accetti una stringa e restituisca true se sembra un indirizzo email valido 
//(contiene @, ha almeno un carattere prima e dopo @, ha un punto dopo @).
console.log("ESERCIZIO 4.20");

const convalidaEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

console.log("L'email 'test@example.com' è valida:", convalidaEmail("test@example.com"));
console.log("L'email 'invalid.email' è valida:", convalidaEmail("invalid.email"));  

//Scrivi una arrow function mcm che calcoli il minimo comune multiplo di due numeri.
console.log("ESERCIZIO 4.21");

const mcm = (a, b) => {
    const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
    return (a * b) / gcd(a, b);
}

console.log("Il minimo comune multiplo di 12 e 15 è:", mcm(12, 15));

//Scrivi una arrow function creaPassword che generi una password casuale di N caratteri, contenente lettere maiuscole, minuscole e cifre.
console.log("ESERCIZIO 4.22");

const creaPassword = (N) => {
    const caratteri = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
    for (let i = 0; i < N; i++) {
        password += caratteri.charAt(Math.floor(Math.random() * caratteri.length));
    }
    return password;
}

console.log("Una password casuale di 8 caratteri è:", creaPassword(8));

//Scrivi una arrow function isPangram che verifichi se una frase contiene tutte le lettere dell'alfabeto almeno una volta.
console.log("ESERCIZIO 4.23");

const isPangram = (frase) => {
    const alfabeto = "abcdefghijklmnopqrstuvwxyz";
    const fraseLower = frase.toLowerCase();
    for (let char of alfabeto) {
        if (!fraseLower.includes(char)) {
            return false;
        }
    }
    return true;
}

console.log("La frase 'The quick brown fox jumps over the lazy dog' è un pangramma:", isPangram("The quick brown fox jumps over the lazy dog"));
console.log("La frase 'Hello, World!' è un pangramma:", isPangram("Hello, World!"));

//Scrivi una arrow function fibonacci che restituisca l'N-esimo numero di Fibonacci in modo ricorsivo.
console.log("ESERCIZIO 4.24");

const fibonacci = (N) => {
    if (N <= 0) return 0;
    if (N === 1) return 1;
    return fibonacci(N - 1) + fibonacci(N - 2);
}

console.log("Il 10° numero di Fibonacci è:", fibonacci(10));
