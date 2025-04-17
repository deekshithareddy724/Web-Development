function createCalculator() {
  return {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : "Error: Division by zero"
  };
}
 
const calculator = createCalculator();

console.log(calculator.add(5, 3));       
console.log(calculator.subtract(10, 4)); 
console.log(calculator.multiply(7, 6));  
console.log(calculator.divide(20, 5));    
