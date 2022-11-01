// 바닐라 Version
// function original(a, b) {
//   if (typeof a === "number" && typeof b === "number") {
//     return a + b;
//   } else {
//     console.log("parameter is type error");
//   }
// }

// console.log(original("2", "500"));

// TS Version
function test(a: number, b: number) {
  return a + b;
}
console.log(test(6, 30));
