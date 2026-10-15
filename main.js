import { Tree } from "./tree.js";

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(array);

console.log("includes(5):", tree.includes(5));       // true
console.log("includes(8):", tree.includes(8));       // true
console.log("includes(6345):", tree.includes(6345)); // true
console.log("includes(100):", tree.includes(100));   // false
console.log("includes(4):", tree.includes(4));       // true
console.log("includes(2):", tree.includes(2));       // false