import { Tree } from "./tree.js";

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null || node === undefined) {
        return;
    }
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
};

// Función para generar array de números aleatorios
function randomArray(size) {
    const arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}

// Función para imprimir en los 4 órdenes
function printAllOrders(tree) {
    const levels = [];
    const pre = [];
    const post = [];
    const inOrd = [];

    tree.levelOrderForEach((v) => levels.push(v));
    tree.preOrderForEach((v) => pre.push(v));
    tree.postOrderForEach((v) => post.push(v));
    tree.inOrderForEach((v) => inOrd.push(v));

    console.log("  Level order:", levels.join(", "));
    console.log("  Pre order:  ", pre.join(", "));
    console.log("  Post order: ", post.join(", "));
    console.log("  In order:   ", inOrd.join(", "));
}

// ============================================
// SCRIPT DE CONTROLADOR
// ============================================

// 1. Crear árbol con números aleatorios
const arr = randomArray(15);
console.log("Array inicial:", arr.join(", "));

const tree = new Tree(arr);
console.log("\n=== Árbol inicial ===");
prettyPrint(tree.root);

// 2. Confirmar que está equilibrado
console.log("\n¿Equilibrado?", tree.isBalanced());

// 3. Imprimir en los 4 órdenes
console.log("\n=== Recorridos iniciales ===");
printAllOrders(tree);

// 4. Desequilibrar añadiendo números > 100
tree.insert(150);
tree.insert(200);
tree.insert(250);
tree.insert(300);
tree.insert(400);

console.log("\n=== Después de desequilibrar ===");
prettyPrint(tree.root);
console.log("\n¿Equilibrado?", tree.isBalanced());

// 6. Rebalancear
tree.rebalance();
console.log("\n=== Después de rebalancear ===");
prettyPrint(tree.root);
console.log("\n¿Equilibrado?", tree.isBalanced());

// 8. Imprimir de nuevo en los 4 órdenes
console.log("\n=== Recorridos después de rebalancear ===");
printAllOrders(tree);