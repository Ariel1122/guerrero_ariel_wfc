const celdas = [];
const RETICULA = 4;

const azulejos = [];
const NA = 7; //numero de azulejos
let reglas = [
  //REGLAS DE LOS BORDES DE CADA AZULEJO
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
    UP: 0,
    RIGHT: 0,
    DOWN: 1,
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

function preload() {
  for (let i = 0; i < NA; i++) {
    azulejos[i] = loadImage(`azulejos/tilei` + i + `.png`);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {}
