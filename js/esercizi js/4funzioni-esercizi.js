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
