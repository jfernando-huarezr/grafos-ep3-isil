# Curso: Algoritmos & Estructura de Datos

## ISIL 2023-2

### Evaluacion Parcial 3 - Grafos

#### Creación de un Grafo a partir de un Mapa de Tiles

Dado el proyecto base sobre el que se trabajará, se solicita desarrollar un algoritmo que transforme un mapa de tiles, donde cada tile representa una pared (1) o un piso (0), en un grafo representativo.

Considérese un mapa de dimensiones N x N. Este mapa se debe convertir en un grafo con nodos, correspondiendo cada nodo a una celda en el mapa. Por ejemplo, para un mapa de tiles de 11x11 como se muestra a continuación:

`let map = [
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
]`

correspondiente al mapa:

![Map](/img/map1.png "Map")

habría 121 nodos, uno por cada celda:

![Map with nodes](/img/map2.png "Map nodes")

**Condiciones de conexión**: Dos nodos están conectados si ambos corresponden a celdas de piso adyacentes (valor 0). Por ejemplo, el nodo 58 no se conectaría con el 80, ya que están separados por una pared, mientras que el 95 estaría conectado con el 106, al estar adyacentes y ser ambos pisos.

**Requerimiento**: El algoritmo debe ser capaz de generar el grafo correspondiente para mapas de cualquier dimensión proporcionada, manteniendo las reglas de conexión especificadas.

**Se debe:**

- Implementar de la función generateGraph()
- Agregar nodos
- Agregar conexiones
- Implementar printGraph()

Para comprobar la solución instalar los modulos con `npm install` y ejecutar `npm run test`. Un video con la solucion explicada se encuentra en este [enlace]: (https://youtu.be/3OUe2F_sytw)
