import { Tree } from "./tree.js";

// Árbol equilibrado
const balancedArray = [1, 2, 3, 4, 5, 6, 7];
const balancedTree = new Tree(balancedArray);
console.log("Árbol equilibrado:", balancedTree.isBalanced());   // true

// Árbol desequilibrado (añadimos valores altos)
const unbalancedArray = [1, 2, 3, 4, 5];
const unbalancedTree = new Tree(unbalancedArray);
unbalancedTree.insert(100);
unbalancedTree.insert(200);
unbalancedTree.insert(300);
console.log("Árbol desequilibrado:", unbalancedTree.isBalanced()); // false
