import IMezzo, { type TipoMezzo, type StatoMezzo } from "./IMezzo";
import Utente from "../utenti/Utente";


export default class Mezzo implements IMezzo{

    constructor(public id: number, public tipo: TipoMezzo, public stato: StatoMezzo){
        this.id = id;
        this.tipo = tipo;
        this.stato = stato;
    }

    assegnaUtente(utente: Utente){
        this.stato = "in uso";
    }
}
