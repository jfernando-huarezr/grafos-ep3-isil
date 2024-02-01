export default class Graph {
  constructor() {
    this.nodes = []
    this.edges = []
  }

  addNode(node) {
    this.nodes.push(node)
  }

  addConnection(i, j, weight = 1) {
    this.edges.push({ start: i, end: j, weight: weight })
  }

  isConnected(i, j) {
    for (let edge of this.edges) {
      if (edge.start === i && edge.end === j) return true
      if (edge.start === j && edge.end === i) return true
    }
    return false
  }

  getWeight(i, j) {
    for (let edge of this.edges) {
      if (edge.start === i && edge.end === j) return edge.weight
      else if (edge.start === j && edge.end === i) return edge.weight
    }
    return null
  }

  getNeighbors(i) {
    let neighbors = []
    for (let edge of this.edges) {
      if (edge.start === i) neighbors.push(edge.end)
      if (edge.end === i) neighbors.push(edge.start)
    }
    return neighbors
  }

  /***funciones adicionales***/

  getNodes() {
    return this.nodes
  }

  print() {
    // se imprimen los nodos
    console.log('nodos:')
    this.nodes.forEach((node, i) => {
      console.log(i + ': ' + node)
    })

    // se imprimen las conexiones
    console.log('conexiones:')
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        if (this.isConnected(i, j)) {
          console.log(i + ' --- ' + j + ' : ' + this.getWeight(i, j))
        }
      }
    }
  }
}
