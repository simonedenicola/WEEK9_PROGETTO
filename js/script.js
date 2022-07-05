"use strict";
class User {
    constructor(_credito, _numerochiamate) {
        this.credito = _credito;
        this.numerochiamate = _numerochiamate;
    }
    ricarica(unaRicarica) {
        this.credito += unaRicarica;
    }
    chiamata(minutiDurata) {
        let tariffa = 0.20;
        this.credito = this.credito - (tariffa * minutiDurata);
        this.numerochiamate++;
    }
    numero404() {
        return this.credito;
    }
    getNumeroChiamate() {
        return this.numerochiamate;
    }
    azzeraChiamate() {
        this.numerochiamate = 0;
    }
}
let ClienteUno = new User(1, 2);
ClienteUno.ricarica(10);
ClienteUno.chiamata(5);
let ClienteDue = new User(3, 4);
ClienteDue.ricarica(20);
ClienteDue.chiamata(10);
let ClienteTre = new User(5, 6);
ClienteTre.ricarica(30);
ClienteTre.chiamata(15);
console.log("---PRIMO UTENTE---");
console.log("Chiamate Effettuate" + ClienteUno.getNumeroChiamate());
console.log("Credito Disponibile" + ClienteUno.numero404());
ClienteUno.azzeraChiamate();
console.log("Dopo l'azzeramento delle chiamate: " + ClienteUno.getNumeroChiamate());
ClienteUno.azzeraChiamate();
console.log("---SECONDO UTENTE---");
console.log("Chiamate Effettuate" + ClienteDue.getNumeroChiamate());
console.log("Credito Disponibile" + ClienteDue.numero404());
ClienteDue.azzeraChiamate();
console.log("Dopo l'azzeramento delle chiamate: " + ClienteDue.getNumeroChiamate());
console.log("---TERZO UTENTE---");
console.log("Chiamate Effettuate" + ClienteTre.getNumeroChiamate());
console.log("Credito Disponibile" + ClienteTre.numero404());
ClienteTre.azzeraChiamate();
console.log("Dopo l'azzeramento delle chiamate: " + ClienteTre.getNumeroChiamate());
