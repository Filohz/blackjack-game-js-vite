import { pedirCarta ,valorCarta,crearCartaHTML, determinarGanador } from "./";


/**
 * 
 * @param {Number} puntosJugador 
 * @param {HTMLElement} puntosHTML 
 * @param {HTMLElement} divCartasComputadora 
 * @param {Array<String>} deck 
 */


export const turnoComputadora = (puntosJugador,puntosHTML,divCartasComputadora, deck) =>{
    let puntosComputadora =0;
    do {
        const carta = pedirCarta(deck);
        puntosComputadora= puntosComputadora + valorCarta(carta);
        puntosHTML.innerText=puntosComputadora;
        const cartaImg=crearCartaHTML(carta);
        divCartasComputadora.append(cartaImg);

        if (puntosJugador >21) {
            break;
        }
    } while ((puntosComputadora<puntosJugador) && (puntosJugador <=21));
    determinarGanador(puntosJugador,puntosComputadora);
}