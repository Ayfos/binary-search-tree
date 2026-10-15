import { Tree } from "./tree.js";

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(array);

console.log("=== levelOrder ===");
tree.levelOrderForEach((value) => console.log(value));

console.log("\n=== inOrder (debe estar ordenado de menor a mayor) ===");
tree.inOrderForEach((value) => console.log(value));

console.log("\n=== preOrder ===");
tree.preOrderForEach((value) => console.log(value));

console.log("\n=== postOrder ===");
tree.postOrderForEach((value) => console.log(value));

console.log("\n=== Prueba de error: sin callback ===");
try {
    tree.levelOrderForEach();
} catch (e) {
    console.log("Error capturado:", e.message);
}