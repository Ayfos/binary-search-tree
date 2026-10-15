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

    // Implementación de BFS--> todos los métodos necesitan una función callback
    levelOrderForEach(callback) {
        if (typeof callback !== "function") {
            throw new Error("Se requiere una función callback");
        }

        if (this.root === null) return;

        const queue = [this.root];

        while (queue.length > 0) {
            const node = queue.shift();  // saca al primero
            callback(node.data);        // llamar al callback con el valor

            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);

        }
    }

    inOrderForEach(callback) {
        if (typeof callback !== "function") {
            throw new Error("Se requiere una función callback");
        }

        function traverse(node) {
            if (node === null) return;
            traverse(node.left);
            callback(node.data);
            traverse(node.right);
        }

        traverse(this.root);
    }

    preOrderForEach(callback) {
        if (typeof callback !== "function") {
            throw new Error("Se requiere una función callback");
        }

        function traverse(node) {
            if (node === null) return;
            callback(node.data);
            traverse(node.left);
            traverse(node.right);
        }

        traverse(this.root);
    }

    postOrderForEach(callback) {
        if (typeof callback !== "function") {
            throw new Error("Se requiere una función callback");
        }

        function traverse(node) {
            if (node === null) return;
            traverse(node.left);
            traverse(node.right);
            callback(node.data);
        }

        traverse(this.root);
    }

    //Método height(value)

    height(value) {
        //1. buscar el nodo
        let current = this.root;
        while (current !== null && current.data !== value) {
            if (value < current.data) {
                current = current.left;

            }else {
                current = current.right;
            }
        }

        // si no se encuentra
        if (current === null) {
            return undefined;
        }

        // calcular la altura recursivamente
        function calculateHeight(node) {
            if (node === null) {
                return -1;   // ← ojo con este -1
            }
            const leftHeight = calculateHeight(node.left);
            const rightHeight = calculateHeight(node.right);
            return 1 + Math.max(leftHeight, rightHeight);
        }
        return calculateHeight(current);
        }

        // Método depth(value) --> devuelve la profundidad del nodo con ese valor
        depth(value) {
            let current = this.root;
            let depth = 0;
        
            while (current !== null) {
                if (value === current.data) {
                    return depth;
                } else if (value < current.data) {
                    current = current.left;
                    depth++;
                } else {
                    current = current.right;
                    depth++;
                }
            }
        
            return undefined;
        }

        // Método isBalanced() --> comprueba si el arbol está equilibrado
        isBalanced() {
            // Función interna que calcula la altura de un nodo
            function getHeight(node) {
                if (node === null) {
                    return -1;
                }
                return 1 + Math.max(getHeight(node.left), getHeight(node.right));
            }
        
            // Función interna que comprueba si un subárbol está equilibrado
            function checkBalanced(node) {
                if (node === null) {
                    return true;
                }
        
                const leftHeight = getHeight(node.left);
                const rightHeight = getHeight(node.right);
        
                // Si la diferencia supera 1, no está equilibrado
                if (Math.abs(leftHeight - rightHeight) > 1) {
                    return false;
                }
        
                // Comprobar recursivamente ambos subárboles
                return checkBalanced(node.left) && checkBalanced(node.right);
            }
        
            return checkBalanced(this.root);
        }

        // método rebalance() --> reequilibra un árbol desequilibrado
        rebalance() {
            // 1. Recoger los valores en orden
            const values = [];
            this.inOrderForEach((value) => values.push(value));
        
            // 2. Reconstruir el árbol
            this.root = this.#buildTree(values);
        }



    }













export { Node, Tree };