const numbers = [
  3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
];

// Step 1: Find Prime Numbers
const primeArray = [];
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
let primeIndex = 0;
for (let i = 0; i < numbers.length; i++) {
  if (isPrime(numbers[i])) {
    primeArray[primeIndex] = numbers[i];
    primeIndex++;
  }
}
console.log("Prime Array:", primeArray);

// Step 2: Find Maximum and Minimum
let max = primeArray[0];
let min = primeArray[0];
for (let i = 1; i < primeArray.length; i++) {
  if (primeArray[i] > max) max = primeArray[i];
  if (primeArray[i] < min) min = primeArray[i];
}
console.log("Maximum Prime Number:", max);
console.log("Minimum Prime Number:", min);

// Step 3: Calculate Sum
let sum = 0;
for (let i = 0; i < primeArray.length; i++) {
  sum += primeArray[i];
}
console.log("Odd Numbers:", oddNumbers);
console.log("Even Numbers:", evenNumbers);
console.log("Prime Array:", primeArray);
console.log("Maximum Prime Number:", max);
console.log("Minimum Prime Number:", min);
console.log("Sum of Prime Numbers:", sum);
