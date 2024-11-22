import IMezzo from "../mezzi/IMezzo";


export default interface ICitta{
    nome: string;
    elencoMezzi: IMezzo[];

    aggiungiMezzo(mezzo: IMezzo):void;
}
