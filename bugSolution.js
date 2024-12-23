function foo(a, b) {
  a = Number(a); //Convert to Number
  b = Number(b); //Convert to Number
  if (isNaN(a) || isNaN(b)) {
    return NaN; // Handle NaN values
  } else if (a === null || b === null) {
    return null; // Handle null values
  } else {
    return a + b; // Perform addition if both values are numbers
  }
}

console.log(foo(10, 20)); // Output: 30
console.log(foo(null, 20)); // Output: null
console.log(foo(10, null)); // Output: null
console.log(foo(NaN, 20)); // Output: NaN
console.log(foo(10, NaN)); // Output: NaN
console.log(foo('10', 20)); //Output: 30