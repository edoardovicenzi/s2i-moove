import ICitta from "./ICitta";
import Mezzo from "../mezzi/Mezzo";


export default class Citta implements ICitta{
    constructor(public nome:string, public elencoMezzi: Mezzo[]){
        this.nome = nome;
        this.elencoMezzi = elencoMezzi;
    }
    aggiungiMezzo(mezzo: Mezzo){
        this.elencoMezzi.push(mezzo)
    }
}
