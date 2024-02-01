//JOSE FERNANDO HUAREZ REYES

import Graph from './src/graph-edge-list.js'
import ui from './src/ui.js'

let map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

let map2 = [
  [0 ,1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,1 ,1],
  [1 ,1 ,1 ,1 ,0 ,0 ,1 ,0 ,1 ,0 ,0 ,1 ,0 ,1 ,0],
  [1 ,1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,1 ,1 ,0 ,0 ,1],
  [0 ,0 ,1 ,1 ,1 ,0 ,0 ,0 ,1 ,1 ,1 ,0 ,1 ,0 ,0],
  [0 ,1 ,1 ,1 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,1 ,0 ,0],
  [1 ,0 ,1 ,1 ,1 ,0 ,1 ,0 ,0 ,1 ,1 ,1 ,0 ,0 ,1],
  [0 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,1 ,0 ,0 ,1 ,0 ,1],
  [0 ,1 ,0 ,0 ,0 ,0 ,0 ,1 ,1 ,1 ,0 ,1 ,1 ,0 ,0],
  [0 ,0 ,0 ,1 ,0 ,0 ,1 ,1 ,1 ,1 ,0 ,0 ,0 ,0 ,1],
  [0 ,1 ,0 ,0 ,0 ,1 ,1 ,0 ,0 ,0 ,0 ,1 ,1 ,0 ,0],
  [0 ,0 ,0 ,0 ,0 ,1 ,0 ,1 ,0 ,0 ,1 ,0 ,1 ,0 ,1],
  [1 ,0 ,0 ,1 ,1 ,1 ,0 ,0 ,1 ,0 ,1 ,1 ,1 ,0 ,1],
  [1 ,1 ,0 ,1 ,0 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,1 ,0],
  [0 ,0 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,0 ,1 ,1 ,1 ,0 ,1],
  [0 ,0 ,1 ,1 ,0 ,1 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,1 ,1],
  ]

// imprime el mapa de tiles
function printMap(map) {
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === 0) {
        ui.printCharacter(j, i, ' ')
      } else if (map[i][j] === 1) {
        ui.printCharacter(j, i, '■')
      }
    }
  }
}

// genera un grafo a partir de un mapa
function generateGraph(map) {
  let graph = new Graph()
  const width = map[0].length

  // agrega los nodos
  for (let row = 0; row<map.length; row++) {
    for(let col = 0; col < width; col++) {
        graph.addNode(row*width + col)
    }
  }

  // agrega las conexiones
  for (let row = 0; row<map.length; row++) {
    for(let col = 0; col < width; col++) {
      //si un nodo es 0 verificamos los adyacentes
      //vamos a verificar en orden, a la derecha y abajo

      if (map[row][col] == 0) {

        if(col != width-1) {
          if(map[row][col+1] == 0) {
            graph.addConnection(row*width+col, row*width+col+1)
          }
        }

        if(row != map.length-1) {
          if(map[row+1][col] == 0) {
            graph.addConnection(row*width+col, (row+1)*width+col)
          }
        }                  
      }
    }
  }

  return graph
}

// imprime el grafo
function printGraph(graph) {
  // recorre el grafo e imprime el caracter '•'
  // por cada nodo que tiene la menos un vecino
  // en la posición correspondiente 
  const width = Math.sqrt(graph.getNodes().length)

  for (let i = 0; i < graph.getNodes().length; i++) {
    ui.printCharacter(i%width, Math.floor(i/width), graph.getNeighbors(i).length ? '•' : '■')  
  }
}

let graph = generateGraph(map)
let graph2 = generateGraph(map2)
//printMap(map)
//printMap(map2)
printGraph(graph)
//printGraph(graph2)
