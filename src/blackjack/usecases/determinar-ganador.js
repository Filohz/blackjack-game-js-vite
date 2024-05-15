

export const determinarGanador = (puntosJugador,puntosComputadora) =>{

    setTimeout(() => {
        if (puntosComputadora===puntosJugador) {
            alert('Empate');
        }else if(puntosJugador>21){
            alert('Computadora Gana!');
        }else if(puntosComputadora > 21){
            alert('Jugador Gana!')
        }else{
            alert('Computadora Gana!');
        }
    }, 100);
}