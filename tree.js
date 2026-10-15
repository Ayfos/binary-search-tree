class Node {
    constructor(data = null, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

// Estructura de la función buildeTree(array)

function buildTree(array) {

    //1. ordenar y eliminar duplicados
    const sortedArray = [...new Set(array)].sort((a, b) => a - b);

    // 2. función recursiva interna
    function buildRecursive(arr, start, end) {
        if (start > end) {
            return null;
        }

        const mid = Math.floor((start + end) / 2);
        const node = new Node(arr[mid]);

        node.left = buildRecursive(arr, start, mid - 1);
        node.right = buildRecursive(arr, mid + 1, end);

        return node;

    }
}

// Creamos la clase Tree--> generamos un método privado y la función buildTree la movemos dentro la clase método privado

class Tree {
    #buildTree(array) {
        const sortedArray = [...new Set(array)].sort((a, b) => a - b);

        function buildRecursive(arr, start, end) {
            if (start > end) {
                return null;
            }

            const mid = Math.floor((start + end) / 2);
            const node = new Node(arr[mid]);

            node.left = buildRecursive(arr, start, mid - 1);
            node.right = buildRecursive(arr, mid + 1, end);

            return node;
        }

        return buildRecursive(sortedArray, 0, sortedArray.length - 1);
    }

    constructor(array) {
        this.root = this.#buildTree(array); //# método privado
    }
}








export { Node, Tree };