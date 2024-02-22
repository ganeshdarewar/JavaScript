// function myFunction(a) {
//   return Number.isInteger(a);
// }
// return parseFloat(a.toFixed(2));

function myFunction( a ) {
  const string = a + '';
  const strings = string.split('');
  return strings.map(digit => Number(digit))
}
function splitNumberIntoDigits(a) {
  // Convert the number to a string to access individual digits
  var digits = a.toString().split('').map(Number);
  return digits;
}

// Example usage:
console.log(splitNumberIntoDigits(123));   // Output: [1, 2, 3]
console.log(splitNumberIntoDigits(9876));  // Output: [9, 8, 7, 6]
console.log(splitNumberIntoDigits(0));     // Output: [0]
