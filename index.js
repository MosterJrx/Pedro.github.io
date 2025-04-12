const pantalla1 = document.querySelector('.pantalla1');
const pantalla2 = document.querySelector('.pantalla2');
const pantalla3 = document.querySelector('.pantalla3');
const audio = document.getElementById('audio');
const nombreCancion = document.getElementById('nombreCancion');

const canciones = [
  { src: 'audios/hair.mp3', nombre: 'Blue Hair - TV GIRL' },
  { src: 'audios/fever.mp3', nombre: 'Fever - Enhypen' },
  { src: 'audios/lovesrock.mp3', nombre: 'Lovers Rock - TV GIRL' },
  { src: 'audios/ciga.mp3', nombre: 'Cigarettes Out of the Window - TV GIRL' },
  { src: 'audios/Louse.mp3', nombre: 'Louise - TV GIRL' },
  { src: 'audios/notdoub.mp3', nombre: 'No Doubt - Enhypen' },
  { src: 'audios/DBW.mp3', nombre: 'Devil by the Window - TXT' },
  { src: 'audios/fs.mp3', nombre: 'Frost - TXT' } 
];

let indexCancion = 7;

const imagenes = [
  { src: 'imagenes/bn.jpg', texto: 'MariAdultaNoColor' },
  { src: 'imagenes/c.jpg', texto: 'MariMalColoreada' },
  { src: 'imagenes/sully.jpg', texto: "MariSully'sVersion" },
  { src: 'imagenes/martin.jpg', texto: "MariMartin'sVersion" }
];
let indexImagen = 0;

function verificarNombre() {
  const nombre = document.getElementById('nombre').value.toLowerCase();
  if (nombre === 'mari') {
    pantalla1.classList.remove('activa');
    pantalla2.classList.add('activa');
    alert('el autor intelectual no se hace responsable de lo visto aproximadamente');
    audio.src = 'audios/hbd.mp3';
    audio.play();
  } else {
    alert('¿Quién sos vos?');
    const img = document.createElement('img');
    img.src = 'imagenes/ke.jpg';
    pantalla1.appendChild(img);
  }
}

function continuarAPantalla3() {
  audio.pause();
  pantalla2.classList.remove('activa');
  pantalla3.classList.add('activa');
  audio.src = canciones[indexCancion].src;
  nombreCancion.textContent = canciones[indexCancion].nombre;
  audio.play();
}

function anteriorImagen() {
  indexImagen = (indexImagen - 1 + imagenes.length) % imagenes.length;
  actualizarImagen();
}

function siguienteImagen() {
  indexImagen = (indexImagen + 1) % imagenes.length;
  actualizarImagen();
}

function actualizarImagen() {
  document.getElementById('imgRotador').src = imagenes[indexImagen].src;
  document.getElementById('textoImagen').textContent = imagenes[indexImagen].texto;
}

function toggleAudio() {
  if (audio.paused) audio.play(); else audio.pause();
}

function cancionAnterior() {
  indexCancion = (indexCancion - 1 + canciones.length) % canciones.length;
  reproducirCancion();
}

function cancionSiguiente() {
  indexCancion = (indexCancion + 1) % canciones.length;
  reproducirCancion();
}

function reproducirCancion() {
  audio.src = canciones[indexCancion].src;
  nombreCancion.textContent = canciones[indexCancion].nombre;
  audio.play();
}