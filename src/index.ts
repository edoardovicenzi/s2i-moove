import Citta from "./citta/Citta";
import Mezzo from "./mezzi/Mezzo";
import Utente from "./utenti/Utente";



//TEST MEZZI

const mezzi: Mezzo[] = [
    new Mezzo(1, "bici", "disponibile"),
    new Mezzo(2, "scooter", "disponibile"),
    new Mezzo(3, "monopattino","disponibile")
];

console.log("I mezzi:", mezzi);

//TEST CITTA
const citta1 = new Citta("Trento", mezzi)

console.log("La citta", citta1);


//TEST UTENTI
const utente1 = new Utente("Mario", "Rossi", "mariorossi@mariorossicorp.corp", "paypal")
const utente2 = new Utente("Luca", "Verdi", "lucaverdi@lucaverdicorp.corp", "visa")
const utente3 = new Utente("Bruno", "Bianchi", "brunobianchi@brunobianchicorp.corp", "mastercard")
const utente4 = new Utente("Matteo", "Neri", "matteoneri@matteonericorp.corp", "paypal")

console.log("Gli utenti:", [utente1, utente2, utente3, utente4]);

//TEST INTERAZIONE

//all'inizio tutti i mezzi nuovi sono disponibili
//Mario prenota il primo mezzo
utente1.prenotaMezzo(mezzi[0]);
testLog("Mario prenota il primo mezzo");

//Luca prenota il secondo mezzo
utente2.prenotaMezzo(mezzi[1]);
testLog("Luca prenota il secondo mezzo");

//Bruno prenota il terzo mezzo
utente3.prenotaMezzo(mezzi[2]);
testLog("Bruno prenota il terzo e ultimo mezzo");

//Luca vuole prenotare il terzo mezzo (quello di Bruno)
utente4.prenotaMezzo(mezzi[2]);
testLog("Luca vuole prenotare il terzo mezzo ma è in uso");


//Vengono aggiunti 2 nuovi mezzi alla città di Trento
citta1.aggiungiMezzo(new Mezzo(4, "bici", "disponibile"));

citta1.aggiungiMezzo(new Mezzo(5, "scooter", "disponibile"));

testLog("Vengono aggiunti 2 nuovi mezzi alla città di trento")




function testLog(label:string): void{
    console.groupCollapsed(label);
    console.log("I mezzi:", mezzi);
    console.log("La citta", citta1);
    console.log("Gli utenti:", [utente1, utente2, utente3, utente4]);
    console.groupEnd();
}
