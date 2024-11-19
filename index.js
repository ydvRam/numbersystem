const numbers = [
  3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
];

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