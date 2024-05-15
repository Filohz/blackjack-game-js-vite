
/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} imagen de retorno
 */

export const crearCartaHTML =(carta)=>{
    const imgCarta=document.createElement('img');
      imgCarta.src = `public/assets/cartas/${carta}.png`;
      imgCarta.classList.add('carta');
      return imgCarta;
}