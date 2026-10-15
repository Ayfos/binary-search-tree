import { Tree } from "./tree.js";

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(array);

console.log("height(8):", tree.height(8));       // altura de la raíz
console.log("height(4):", tree.height(4));       // altura del subárbol izquierdo
console.log("height(1):", tree.height(1));
console.log("height(3):", tree.height(3));       // hoja → 0
console.log("height(6345):", tree.height(6345)); // hoja → 0
console.log("height(999):", tree.height(999));   // no existe → undefined