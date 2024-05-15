

import { crearDeck, pedirCarta, valorCarta, turnoComputadora ,crearCartaHTML} from './usecases';


const miModulo=(()=>{
  'use strict'
  let deck =[];
  const tipos=['C','D','H','S'],
        especiales=['A','J','Q','K'];

    let puntosJugador=0,
        puntosComputadora=0;


  //referencias html
    const btnNuevoJuego=document.querySelector('#btnJuegoNuevo');
    const btnPedir=document.querySelector('#btnPedir');
    const btnDetener=document.querySelector('#btnDetener');
    const divCartasJugadores = document.querySelectorAll('.divCartas');
    const puntajeHtml=document.querySelectorAll('small');

  
  const inicializarJuego = ()=>{
    deck=crearDeck(tipos, especiales);
    puntosJugador=0;
    puntosComputadora=0;
      puntajeHtml.forEach(elem => elem.innerText=0 );
      divCartasJugadores.forEach(elem => elem.innerHTML = '');
      btnPedir.disabled=false;
      btnDetener.disabled=true;
  }         

//EVENTOS
 //button Nuevo juego
  btnNuevoJuego.addEventListener('click',()=> {
    inicializarJuego();
  });

  //button pedir carta
  btnPedir.addEventListener('click',()=>{
      const carta = pedirCarta(deck);
      btnDetener.disabled=false;
      puntosJugador= puntosJugador + valorCarta(carta);
      puntajeHtml[0].innerText=puntosJugador;
        const cartaImg=crearCartaHTML(carta);
        divCartasJugadores[0].append(cartaImg);

      if (puntosJugador>21) {
          btnPedir.disabled=true;
          btnDetener.disabled=true;
          turnoComputadora(puntosJugador,puntajeHtml[1],divCartasJugadores[1],deck);
      }else if(puntosJugador===21){
          btnPedir.disabled=true;
          btnDetener.disabled=true;
          turnoComputadora(puntosJugador,puntajeHtml[1],divCartasJugadores[1],deck);
      }

  });
  
  //button detener
  btnDetener.addEventListener('click',()=>{
    btnPedir.disabled=true;
    btnDetener.disabled=true;
    turnoComputadora(puntosJugador,puntajeHtml[1],divCartasJugadores[1],deck);
  });

  return{
      nuevoJuego: inicializarJuego
  };

})();



