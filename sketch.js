const celdas = []; //4x4
//las constantes ocupan menos espacio que las let-variables, y ocupan un espacio fijo que apunto una direccion en la ram
//LOS ARRAY SIMPRE COMO CONST-CONTANTES
const RETICULA = 4;
//tanto el numero de azulejos y reticulas van en mayuscula al ser numeros que no van a varias, en minusculas son array que si cambian
const azulejos = [];
const NA = 7; //numero de azulejos
const reglas = [
  //reglas de los bordes de cada azulejo
  {
    //tiles0
    UP: 0,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 0,
  },
  {
    //tiles1
    UP: 0,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 0,
  },
  {
    //tiles2
    UP: 0,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 0,
  },
  {
    //tiles3
    UP: 0,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 0,
  },
  {
    //tiles4
    UP: 1,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tiles5
    UP: 1,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tiles6
    UP: 1,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
];
//usamos estructura de datos con los object literals {} para darles un nombre a cada uno de los lados
function preload() {
  for (let i = 0; i < NA; i++) {
    azulejos[i] = loadImage(`azulejos/tile${i}.png`);
  }
}

function setup() {
  createCanvas(1080, 1080);
  //un array con el numero del indice dentro del array
  //opciones iniciales
  let opcionesI = [];
  for (let i = 0; i < azulejos.length; i++) {}
}

function draw() {}
