import { Tree } from "./tree.js";

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(array);

console.log("depth(8):", tree.depth(8));         
console.log("depth(4):", tree.depth(4));         
console.log("depth(67):", tree.depth(67));       
console.log("depth(1):", tree.depth(1));         
console.log("depth(6345):", tree.depth(6345));   
console.log("depth(999):", tree.depth(999));     