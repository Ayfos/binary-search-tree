import { Tree } from "./tree.js";

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null || node === undefined) {
        return;
    }
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
};

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(array);

console.log("=== Árbol inicial ===");
prettyPrint(tree.root);

// Caso 1: eliminar una hoja
tree.deleteItem(3);
console.log("\n=== Después de eliminar 3 (hoja) ===");
prettyPrint(tree.root);

// Caso 2: eliminar un nodo con un hijo
tree.deleteItem(1);
console.log("\n=== Después de eliminar 1 (un hijo) ===");
prettyPrint(tree.root);

// Caso 3: eliminar un nodo con dos hijos
tree.deleteItem(4);
console.log("\n=== Después de eliminar 4 (dos hijos) ===");
prettyPrint(tree.root);

// Eliminar un valor que no existe
tree.deleteItem(999);
console.log("\n=== Después de eliminar 999 (no existe) ===");
prettyPrint(tree.root);

// Verificar
console.log("\nincludes(3):", tree.includes(3));   
console.log("includes(1):", tree.includes(1));   
console.log("includes(4):", tree.includes(4));   
console.log("includes(5):", tree.includes(5));   