import { juegos } from '../../public/data/info.js'

export function getJuego(id) {
  console.log('----------------------------------------------');
  console.log('Llamando a función getJuego;');
  console.log('----------------------------------------------');

  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const juego = juegos.find(juego => juego.id === Number(id));
      if(juego) {
        resolve(juego);
      }else {
        reject(`El juego con ID ${id} no existe.`)
      }
    },800);
  });
  return promesa;
}

