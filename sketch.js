const celdas = []; //4x4
//las constantes ocupan menos espacio que las let-variables, y ocupan un espacio fijo que apunto una direccion en la ram
//LOS ARRAY SIMPRE COMO CONST-CONTANTES
const RETICULA = 8;
//tanto el numero de azulejos y reticulas van en mayuscula al ser numeros que no van a varias, en minusculas son array que si cambian
const azulejos = [];
const NA = 14; //numero de azulejos
let opcionesI = [];

let ancho;
let alto;

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
    DOWN: 1,
    LEFT: 0,
  },
  {
    //tiles6
    UP: 1,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tiles7
    UP: 1,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  // {
  //     //tiles8
  //     UP: 0,
  //     RIGHT: 5,
  //     DOWN: 0,
  //     LEFT: 0,
  //   },
  //   {
  //     //tiles9
  //     UP: 1,
  //     RIGHT: 2,
  //     DOWN: 0,
  //     LEFT: 5,
  //   },
  //   {
  //     //tiles10
  //     UP: 0,
  //     RIGHT: 2,
  //     DOWN: 0,
  //     LEFT: 2,
  //   },
  //   {
  //     //tiles11
  //     UP: 0,
  //     RIGHT: 0,
  //     DOWN: 0,
  //     LEFT: 2,
  //   },
  //   {
  //     //tiles12
  //     UP: 3,
  //     RIGHT: 0,
  //     DOWN: 3,
  //     LEFT: 0,
  //   },
  {
    //tiles13
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tiles14
    UP: 0,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 0,
  },
  //   {
  //     //tiles15
  //     UP: 0,
  //     RIGHT: 0,
  //     DOWN: 3,
  //     LEFT: 0,
  //   },
  //   {
  //     //tiles16
  //     UP: 3,
  //     RIGHT: 5,
  //     DOWN: 0,
  //     LEFT: 0,
  //   },
  //   {
  //     //tiles17
  //     UP: 0,
  //     RIGHT: 5,
  //     DOWN: 0,
  //     LEFT: 5,
  //   },
  //   {
  //     //tiles18
  //     UP: 1,
  //     RIGHT: 2,
  //     DOWN: 1,
  //     LEFT: 5,
  //   },
  //   {
  //     //tiles19
  //     UP: 3,
  //     RIGHT: 0,
  //     DOWN: 0,
  //     LEFT: 2,
  //   },
  {
    //tiles620
    UP: 0,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 0,
  },
  {
    //tiles21
    UP: 0,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 0,
  },
  //   {
  //     //tiles22
  //     UP: 1,
  //     RIGHT: 0,
  //     DOWN: 4,
  //     LEFT: 0,
  //   },
  //   {
  //     //tiles23
  //     UP: 0,
  //     RIGHT: 0,
  //     DOWN: 3,
  //     LEFT: 0,
  //   },
  {
    //tiles24
    UP: 1,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  //   {
  //     //tiles25
  //     UP: 0,
  //     RIGHT: 5,
  //     DOWN: 0,
  //     LEFT: 5,
  //   },
  //   {
  //     //tiles26
  //     UP: 4,
  //     RIGHT: 0,
  //     DOWN: 4,
  //     LEFT: 0,
  //   },
  //   {
  //     //tiles27
  //     UP: 0,
  //     RIGHT: 2,
  //     DOWN: 0,
  //     LEFT: 2,
  //   },
  //   {
  //     //tiles28
  //     UP: 0,
  //     RIGHT: 0,
  //     DOWN: 0,
  //     LEFT: 2,
  //   },
  //   {
  //     //tiles29
  //     UP: 0,
  //     RIGHT: 5,
  //     DOWN: 0,
  //     LEFT: 0,
  //   },
  //   {
  //     //tiles30
  //     UP: 4,
  //     RIGHT: 0,
  //     DOWN: 0,
  //     LEFT: 0,
  //   },
  {
    //tiles31
    UP: 0,
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

  frameRate(4);

  ancho = width / RETICULA;
  alto = height / RETICULA;

  for (let i = 0; i < azulejos.length; i++) {
    opcionesI.push(i);
  }
  for (let i = 0; i < RETICULA * RETICULA; i++) {
    celdas[i] = {
      colapsada: false,
      opciones: opcionesI,
    };
  }
}
function draw() {
  background(225);
  const celdasDisponibles = celdas.filter((celda) => {
    return celda.colapsada == false;
  });
  if (celdasDisponibles.length > 0) {
    celdasDisponibles.sort((a, b) => {
      return a.opciones.length - b.opciones.length;
    });

    const celdasPorColapsar = celdasDisponibles.filter((celda) => {
      return celda.opciones.length == celdasDisponibles[0].opciones.length;
    });
    const celdaSeleccionada = random(celdasPorColapsar);
    celdaSeleccionada.colapsada = true;
    const opcionSeleccionada = random(celdaSeleccionada.opciones);
    celdaSeleccionada.opciones = [opcionSeleccionada];

    for (let x = 0; x < RETICULA; x++) {
      for (let y = 0; y < RETICULA; y++) {
        const celdaIndex = x + y * RETICULA;
        const celdaActual = celdas[celdaIndex];
        if (celdaActual.colapsada) {
          const azulejosIndice = celdaActual.opciones[0];
          const reglasActuales = reglas[azulejosIndice];
          image(azulejos[azulejosIndice], x * ancho, y * alto, ancho, alto);
          //entropìa UP
          if (y > 0) {
            const indiceUP = x + (y - 1) * RETICULA;
            const celdaUP = celdas[indiceUP];
            if (!celdaUP.colapsada) {
              cambiarEntropia(celdaUP, reglasActuales["UP"], "DOWN");
            }
          }
          // entropìa RIGHT
          if (x < RETICULA - 1) {
            const indiceRIGHT = x + 1 + y * RETICULA;
            const celdaRIGHT = celdas[indiceRIGHT];
            if (!celdaRIGHT.colapsada) {
              cambiarEntropia(celdaRIGHT, reglasActuales["RIGHT"], "LEFT");
            }
          }
          // entropìa DOWN
          if (y < RETICULA - 1) {
            const indiceDOWN = x + (y + 1) * RETICULA;
            const celdaDOWN = celdas[indiceDOWN];
            if (!celdaDOWN.colapsada) {
              cambiarEntropia(celdaDOWN, reglasActuales["DOWN"], "UP");
            }
          }
          //entropia LEFT
          if (x > 0) {
            const indiceLEFT = x - 1 + y * RETICULA;
            const celdaLEFT = celdas[indiceLEFT];
            if (!celdaLEFT.colapsada) {
              cambiarEntropia(celdaLEFT, reglasActuales["LEFT"], "RIGHT");
            }
          }
        }
      }
    }
    //noLoop
  } else {
    for (let i = 0; i < RETICULA * RETICULA; i++) {
      celdas[i] = {
        colapsada: false,
        opciones: opcionesI,
      };
    }
  }
}
function cambiarEntropia(_celda, _regla, _opuesta) {
  const nuevasOpciones = [];
  for (let i = 0; i < _celda.opciones.length; i++) {
    if (_regla == reglas[_celda.opciones[i]][_opuesta]) {
      const celdaCompatible = _celda.opciones[i];
      nuevasOpciones.push(celdaCompatible);
    }
  }
  _celda.opciones = nuevasOpciones;
  print(nuevasOpciones);
}
