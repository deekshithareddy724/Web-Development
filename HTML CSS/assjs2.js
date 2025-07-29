console.log(mysteryVariable); // ❌ ReferenceError
let mysteryVariable = 10;
console.log(mysteryVariable);
function revealMystery() {
  console.log("Inside revealMystery:", mysteryVariable); // ❌ ReferenceError
  let mysteryVariable = 20;
  console.log("Inside revealMystery (after declaration):", mysteryVariable);
}
revealMystery();
console.log("After revealMystery:", mysteryVariable);
