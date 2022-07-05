// Interfaccia smartphone
interface Smartphone {

    credito: number;
    numerochiamate: number;

    ricarica(credito: number, unaRicarica: number): void;
    chiamata(credito: number, minutiRicarica: number): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate():void;
}


class User implements Smartphone {

    
    public numerochiamate: number;
    public credito: number;

    
    constructor(_credito: number, _numerochiamate:  number) {
        this.credito = _credito;
        this.numerochiamate = _numerochiamate;
    } 



    
    public ricarica( unaRicarica: number):void {
        this.credito += unaRicarica;
    }

    
    public chiamata( minutiDurata: number):void {
        let tariffa = 0.20;
        this.credito= this.credito-(tariffa * minutiDurata);
        this.numerochiamate++;
    }

    
    public numero404():number{
        return this.credito;
    }

    
    public getNumeroChiamate():number{
        return this.numerochiamate;
    }

    
    public azzeraChiamate():void{
        this.numerochiamate=0;
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


    console.log("---PRIMO UTENTE---")

    console.log("Chiamate Effettuate"+ClienteUno.getNumeroChiamate());
    console.log("Credito Disponibile"+ClienteUno.numero404());
    ClienteUno.azzeraChiamate();
    console.log("Dopo l'azzeramento delle chiamate: " + ClienteUno.getNumeroChiamate());

    ClienteUno.azzeraChiamate();


    console.log("---SECONDO UTENTE---")

    console.log("Chiamate Effettuate"+ClienteDue.getNumeroChiamate());
    console.log("Credito Disponibile"+ClienteDue.numero404());
    ClienteDue.azzeraChiamate();
    console.log("Dopo l'azzeramento delle chiamate: " + ClienteDue.getNumeroChiamate());


    
    console.log("---TERZO UTENTE---")

    console.log("Chiamate Effettuate"+ClienteTre.getNumeroChiamate());
    console.log("Credito Disponibile"+ClienteTre.numero404());
    ClienteTre.azzeraChiamate();
    console.log("Dopo l'azzeramento delle chiamate: " + ClienteTre.getNumeroChiamate());
 