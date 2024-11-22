import IUtente, { type MetodiDiPagamento } from "./IUtente";
import Mezzo from "../mezzi/Mezzo";


export default class Utente implements IUtente{

    constructor(public nome: string, public cognome: string, public email: string, public metodoPagamento: MetodiDiPagamento){
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }

    prenotaMezzo(mezzo: Mezzo): void{
        if (mezzo.stato === "disponibile"){
            mezzo.assegnaUtente(this)
        }
        else{
            console.log(`Mezzo: ${mezzo.id} non disponibile.`)
        }
    }
}
