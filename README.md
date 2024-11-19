# Prime Number and Array Operations Project

## Description
This project demonstrates working with arrays in JavaScript. The program performs the following tasks:
1. Extracts prime numbers from a given array of numbers.
2. Identifies and lists odd and even numbers.
3. Finds the maximum and minimum prime numbers.
4. Calculates the sum of all prime numbers.
5. Demonstrates clean coding practices in `index.js` and `app.js`.

The program is designed for beginners to understand basic loops, conditions, and array manipulations in JavaScript.

---

## Code in `index.js`

```javascript
const numbers = [
  3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
];

// Step 1: Find Odd and Even Numbers
const oddNumbers = [];
const evenNumbers = [];

let oddIndex = 0;
let evenIndex = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers[evenIndex] = numbers[i];
    evenIndex++;
  } else {
    oddNumbers[oddIndex] = numbers[i];
    oddIndex++;
  }
}
console.log("Odd Numbers:", oddNumbers);
console.log("Even Numbers:", evenNumbers);

// Step 2: Find Prime Numbers
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

// Step 3: Find Maximum and Minimum Primes
let max = primeArray[0];
let min = primeArray[0];
for (let i = 1; i < primeArray.length; i++) {
  if (primeArray[i] > max) max = primeArray[i];
  if (primeArray[i] < min) min = primeArray[i];
}
console.log("Maximum Prime Number:", max);
console.log("Minimum Prime Number:", min);

// Step 4: Calculate Sum of Primes
let sum = 0;
for (let i = 0; i < primeArray.length; i++) {
  sum += primeArray[i];
}
console.log("Sum of Prime Numbers:", sum);
