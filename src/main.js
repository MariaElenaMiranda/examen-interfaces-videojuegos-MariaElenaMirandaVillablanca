import { getJuegosPorPlataforma } from './services/getJuegosPorPlataformaService.js';

const btnPlataforma = document.getElementById('btn-plataforma');
const contenedorRespuesta = document.getElementById('salida');

async function buscarJuegoPorPlataforma(categoria) {
  console.log('----------------------------------------------');
  console.log('Llamando a función buscarJuegoPorPlataforma();');
  console.log('----------------------------------------------');

  contenedorRespuesta.textContent = '';
  contenedorRespuesta.className = '';
  let mensaje = document.createElement('p');

  try {
    const juegosSeleccionados = await getJuegosPorPlataforma(categoria);
    if(juegosSeleccionados.length <= 0) {
      mensaje.textContent = 'No hay juegos para esa plataforma';
      contenedorRespuesta.appendChild(mensaje);
    }else {
      mensaje.textContent = `Juegos encontrados para la plataforma: ${categoria}`;
      contenedorRespuesta.appendChild(mensaje);
        for(let juego of juegosSeleccionados) {
          let seleccion = document.createElement('p');
          seleccion.textContent = `[${juego.id}] ${juego.titulo} (${juego.plataforma})`;
          contenedorRespuesta.appendChild(seleccion);
        }
      console.log('Promise resolve');
      console.log(juegosSeleccionados);
    }
  }catch(error) {
    mensaje.textContent = error;
    console.log('Promise reject');
    console.log(mensaje);
  }
}

btnPlataforma.addEventListener('click', () => {
  console.log('------------------------------------------------------------------');
  console.log('Click en el botón "Buscar juegos por plataforma"(addEventListener)');
  console.log('------------------------------------------------------------------');

  const categoria = prompt('Ingresa la plataforma que deseas buscar y te mostraré los juegos disponibles:');
  let mensaje = document.createElement('p');

  if(categoria === '' || categoria === null) {
    contenedorRespuesta.textContent = '';
    contenedorRespuesta.className = '';
    mensaje.textContent = 'Por favor, ingresa una plataforma válida';
    contenedorRespuesta.appendChild(mensaje);
    console.log(mensaje);
  }else {
    buscarJuegoPorPlataforma(categoria);
  }
});