import { getValoracion } from './services/getValoracionService.js';
import { getJuego } from './services/getJuegoService.js';

const btnIdValoracion = document.getElementById('btn-id-valoracion');
const contenedorRespuesta = document.getElementById('salida');

function buscarJuegoPorValoracion(id) {
  console.log('----------------------------------------------');
  console.log('Llamando a función buscarJuegoPorValoracion();');
  console.log('----------------------------------------------');

  contenedorRespuesta.textContent = '';
  contenedorRespuesta.className = '';
  let mensaje = document.createElement('p');
  let titulo = document.createElement('p');
  let valoracion = document.createElement('p');

  Promise.all([getJuego(id), getValoracion(id)])
  .then((juegoValoracion) => {
    const [juego, puntuacion] = juegoValoracion;
    mensaje.textContent = 'Juego y Valoración:'
    titulo.textContent = `Título: ${juego.titulo} (${juego.plataforma})`;
    valoracion.textContent = `Puntuación: ${puntuacion.puntuacion} / 10`;
    contenedorRespuesta.appendChild(mensaje);
    contenedorRespuesta.appendChild(titulo);
    contenedorRespuesta.appendChild(valoracion);
    console.log('Promise resolve');
    console.log(mensaje);
  })
  .catch((error) => {
    mensaje.textContent = error;
    contenedorRespuesta.appendChild(mensaje);
    console.log('Promise reject');
    console.log(mensaje);
  })
}

btnIdValoracion.addEventListener('click', () => {
  console.log('----------------------------------------------------------------------');
  console.log('Click en el botón "Buscar juego y valoración por ID"(addEventListener)');
  console.log('----------------------------------------------------------------------');

  const idJuego = parseInt(prompt('Ingresa el ID del juego que deseas buscar para ver si valoración:'));
  let mensaje = document.createElement('p');

  if(isNaN(idJuego) || idJuego === '' || idJuego === null) {
    contenedorRespuesta.textContent = '';
    contenedorRespuesta.className = '';
    mensaje.textContent = 'Por favor, ingresa un ID válido';
    contenedorRespuesta.appendChild(mensaje);
    console.log(mensaje);
  }else {
    buscarJuegoPorValoracion(idJuego);
  }
});