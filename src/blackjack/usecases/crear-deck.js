import { shuffle } from "underscore";


/**
 * 
 * @param {Array<String>} tiposDeCarta Ej: ['C','D','H','S'],
 * @param {Array<String>} TiposEspeciales Ej:['A','J','Q','K'];
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
 
export const crearDeck = (tiposDeCarta, TiposEspeciales) =>{
    let deck=[];
    for(let i = 2; i <=10; i++){
        for(let tipo of tiposDeCarta){
            deck.push(i + tipo);
        }       
    }
    for (const tipo of tiposDeCarta) {
     for (const especial of TiposEspeciales) {
            deck.push(especial + tipo);
        }
    }
    return shuffle(deck);
}