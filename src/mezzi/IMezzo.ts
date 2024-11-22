import IUtente from "../utenti/IUtente";


export type TipoMezzo = "bici" | "scooter" | "monopattino";
export type StatoMezzo = "disponibile" | "in uso";

export default interface IMezzo{
    id: number;
    tipo: TipoMezzo;
    stato: StatoMezzo;
    
    assegnaUtente(utente: IUtente): void;
}
