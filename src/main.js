import { getJuego } from './services/getJuegoService.js';

//Elementos del DOM
const btnId = document.getElementById('btn-id');
const contenedorRespuesta = document.getElementById('salida');

function buscarJuego(id) {
  console.log('----------------------------------------------');
  console.log('Llamando a función buscarJuego();');
  console.log('----------------------------------------------');

  contenedorRespuesta.textContent = '';
  contenedorRespuesta.className = '';
  let mensaje = document.createElement('p');
  let idSeleccionado = document.createElement('p');
  let titulo = document.createElement('p');
  let plataforma = document.createElement('p');

  getJuego(id)
  .then((juego) => {
    mensaje.textContent = 'Juego Encontrado:'
    idSeleccionado.textContent = `ID: ${juego.id}`;
    titulo.textContent = `Título: ${juego.titulo}`;
    plataforma.textContent = `Título: ${juego.plataforma}`;
    contenedorRespuesta.appendChild(mensaje);
    contenedorRespuesta.appendChild(idSeleccionado);
    contenedorRespuesta.appendChild(titulo);
    contenedorRespuesta.appendChild(plataforma);
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

btnId.addEventListener('click', () => {
  console.log('---------------------------------------------------------');
  console.log('Click en el botón "Buscar juego por ID"(addEventListener)');
  console.log('---------------------------------------------------------');

  const idJuego = parseInt(prompt('Ingresa el ID del juego que deseas buscar:'));
  let mensaje = document.createElement('p');

  if(isNaN(idJuego) || idJuego === '' || idJuego === null) {
    contenedorRespuesta.textContent = '';
    contenedorRespuesta.className = '';
    mensaje.textContent = 'Por favor, ingresa un ID válido';
    mensaje.className = 'text-warning-emphasis';
    contenedorRespuesta.appendChild(mensaje);
    console.log(mensaje);
  }else {
    buscarJuego(idJuego);
  }
});