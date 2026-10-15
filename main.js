import { Tree } from "./tree.js";

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null || node === undefined) {
        return;
    }
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
};

// Árbol inicial equilibrado
const array = [1, 2, 3, 4, 5, 6, 7];
const tree = new Tree(array);

console.log("=== Árbol inicial ===");
prettyPrint(tree.root);
console.log("¿Equilibrado?", tree.isBalanced());   // true

// Desequilibrar
tree.insert(100);
tree.insert(200);
tree.insert(300);
tree.insert(400);

console.log("\n=== Árbol desequilibrado ===");
prettyPrint(tree.root);
console.log("¿Equilibrado?", tree.isBalanced());   // false

// Rebalancear
tree.rebalance();

console.log("\n=== Árbol rebalanceado ===");
prettyPrint(tree.root);
console.log("¿Equilibrado?", tree.isBalanced());   // true