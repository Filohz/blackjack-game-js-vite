
/**
 * 
 * @param {Array<String>} deck array de cartas
 * @returns {String} retorna la Carta
 */

  export const pedirCarta = (deck) => {
    if (  !deck===null || deck.length ===0) {
        throw 'NO HAY CARTAS EN EL DECK'
        
    }
    const carta= deck.pop();
    return carta;
}