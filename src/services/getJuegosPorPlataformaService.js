import { juegos } from '../../public/data/info.js'

export function getJuegosPorPlataforma(categoria) {
  console.log('----------------------------------------------');
  console.log('Llamando a función getJuegoPorPlataforma();');
  console.log('----------------------------------------------');

  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const listadoJuegos = juegos.filter(juego => juego.plataforma === categoria);
      if(listadoJuegos) {
        resolve(listadoJuegos);
      }
    },800);
  });
  return promesa;
}