import IMezzo from "../mezzi/IMezzo";

export type MetodiDiPagamento = "paypal" | "visa" | "mastercard";

export default interface IUtente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamento: MetodiDiPagamento;

    prenotaMezzo(mezzo: IMezzo):void;
}
