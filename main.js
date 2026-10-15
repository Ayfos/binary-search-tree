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

// Insertar algunos valores
tree.insert(6);
tree.insert(50);
tree.insert(100);
tree.insert(5);   // ya existe, no debería cambiar nada

console.log("\n=== Árbol después de insertar 6, 50, 100 (y probar duplicado 5) ===");
prettyPrint(tree.root);

// Verificar
console.log("\nincludes(6):", tree.includes(6));   // true
console.log("includes(50):", tree.includes(50));   // true
console.log("includes(100):", tree.includes(100)); // true