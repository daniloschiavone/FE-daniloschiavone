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