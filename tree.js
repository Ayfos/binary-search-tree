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

    // Método includes(value) devuelve true si el valor está en el árbol, false sino
    includes(value) {
        let current = this.root;

        while (current !== null) {
            if (value === current.data) {
                return true;
            } else if (value < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    // Método insert(value) ---> añade un nuevo nodo con ese valor respetando la propiedad BST
    insert(value) {
        const newNode = new Node(value);

        //caso especial cuando el árbol está vacío
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let current = this.root;

        while (true) {
            //valor duplicado no hace nada
            if (value === current.data) {
                return;
            }

            if (value < current.data) {
                if (current.left === null) {
                    current.left = newNode;
                    return;
                }
                current = current.left;

            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    //Método deleteItem(value)---> tiene tres casos según cuantos hijos tenga el nodo a eliminar
    deleteItem(value) {
        this.root = this.#deleteRecursive(this.root, value);
    }

    #deleteRecursive(node, value) {
        // Caso base: nodo vacío → no existe
        if (node === null) {
            return null;
        }

        // Buscar el nodo
        if (value < node.data) {
            node.left = this.#deleteRecursive(node.left, value);
        } else if (value > node.data) {
            node.right = this.#deleteRecursive(node.right, value);
        } else {
            // ¡Encontrado! Aplicar los 3 casos

            // Caso 1: sin hijos
            if (node.left === null && node.right === null) {
                return null;
            }

            // Caso 2: un solo hijo
            if (node.left === null) {
                return node.right;
            }
            if (node.right === null) {
                return node.left;
            }

            // Caso 3: dos hijos
            // Buscar el sucesor in-order (mínimo del subárbol derecho)
            let successor = node.right;
            while (successor.left !== null) {
                successor = successor.left;
            }

            // Reemplazar el valor del nodo actual con el del sucesor
            node.data = successor.data;

            // Eliminar el sucesor del subárbol derecho
            node.right = this.#deleteRecursive(node.right, successor.data);
        }

        return node;
    }
}











export { Node, Tree };