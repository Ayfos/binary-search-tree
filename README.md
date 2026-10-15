# Binary Search Tree

Implementación de un Árbol Binario de Búsqueda (BST) equilibrado en JavaScript, desarrollada como parte del currículo de [The Odin Project](https://www.theodinproject.com/).

## ¿Qué es un BST?

Un Árbol Binario de Búsqueda es una estructura de datos jerárquica donde:

- Cada nodo tiene un valor (`data`) y hasta dos hijos (`left` y `right`).
- **Propiedad BST**: para cada nodo, todos los valores del subárbol izquierdo son **menores**, y todos los del subárbol derecho son **mayores**.

```
        8
       / \
      4   12
     / \  / \
    2  6 10 14
```

Un BST equilibrado permite operaciones de búsqueda, inserción y eliminación en tiempo **O(log n)**.

## Estructura del proyecto

- `tree.js` — Clases `Node` y `Tree`.
- `main.js` — Script de controlador con todas las pruebas.
- `package.json` — Configuración para módulos ES6.

## Clase `Node`

- `data` — El valor almacenado.
- `left` — Referencia al hijo izquierdo (o `null`).
- `right` — Referencia al hijo derecho (o `null`).

## Clase `Tree`

### Métodos

| Método | Descripción |
|---|---|
| `constructor(array)` | Construye un BST equilibrado desde un array. |
| `#buildTree(array)` | Ordena, elimina duplicados y construye el árbol (privado). |
| `includes(value)` | ¿Existe el valor en el árbol? |
| `insert(value)` | Inserta un valor (ignora duplicados). |
| `deleteItem(value)` | Elimina un valor (3 casos según hijos). |
| `levelOrderForEach(callback)` | Recorrido BFS por niveles. |
| `inOrderForEach(callback)` | Recorrido DFS in-order. |
| `preOrderForEach(callback)` | Recorrido DFS pre-order. |
| `postOrderForEach(callback)` | Recorrido DFS post-order. |
| `height(value)` | Altura del nodo con ese valor. |
| `depth(value)` | Profundidad del nodo con ese valor. |
| `isBalanced()` | ¿Está el árbol equilibrado? |
| `rebalance()` | Reequilibra el árbol. |

## Cómo ejecutar

```bash
node main.js
```

## Ejemplo de uso

```javascript
import { Tree } from "./tree.js";

const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);

console.log(tree.includes(5));   // true
console.log(tree.height(4));     // 2
console.log(tree.depth(1));      // 2

tree.insert(8);
tree.deleteItem(3);

tree.inOrderForEach((v) => console.log(v));  // ordenado
```

## Aprendizajes

- Construcción recursiva de un árbol equilibrado.
- Propiedad BST y su mantenimiento en `insert` y `deleteItem`.
- Los 3 casos de eliminación en un BST.
- Recorridos BFS (`levelOrder`) y DFS (`inOrder`, `preOrder`, `postOrder`).
- Cálculo de altura y profundidad.
- Comprobación de equilibrio en todos los nodos (no solo la raíz).
- Rebalanceo mediante in-order + reconstrucción.

## Recursos

- [The Odin Project - Binary Search Trees](https://www.theodinproject.com/lessons/javascript-binary-search-trees)
- [Geeks for Geeks - BST Insert](https://www.geeksforgeeks.org/insertion-in-binary-search-tree/)
- [Geeks for Geeks - BST Delete](https://www.geeksforgeeks.org/deletion-in-binary-search-tree/)
