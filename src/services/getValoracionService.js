import { valoraciones } from '../../public/data/info.js'

export function getValoracion(id) {
  console.log('----------------------------------------------');
  console.log('Llamando a función getValoracion();');
  console.log('----------------------------------------------');

  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const puntuacion = valoraciones.find(valoracion => valoracion.id === Number(id))?.puntuacion;
      if(puntuacion) {
        resolve(puntuacion);
      }else {
        reject(`La valoración con ID ${id} no existe.`)
      }
    },900);
  });
  return promesa;
}