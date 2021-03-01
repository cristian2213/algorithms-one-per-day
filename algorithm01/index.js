/*
    Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

    For example:

    persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

    persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

    persistence(4) === 0 // because 4 is already a one-digit number
*/

function persistence(num) {
  if (num.toString().length < 2) {
    return 0;
  }

  let numbers = transformToNumber(num);
  let multiply = multiplyNumbers(numbers);
  let count = 1;

  while (multiply.length > 1) {
    multiply = multiplyNumbers(multiply);
    count += 1;
  }

  return count;
}

function transformToNumber(collection) {
  let arrayCollection = collection.toString().split("");
  let arrayCollectionNumbers = [];

  for (let i = 0; i < arrayCollection.length; i++) {
    arrayCollectionNumbers.push(parseInt(arrayCollection[i], 10));
  }
  return arrayCollectionNumbers;
}

function multiplyNumbers(numbers) {
  let total = 1;
  for (let i = 0; i < numbers.length; i++) {
    total = numbers[i] * total;
  }

  let result = transformToNumber(total);
  return result;
}

const result1 = persistence(39);
console.log(result1);
const result2 = persistence(999);
console.log(result2);
const result3 = persistence(4);
console.log(result3);
const result4 = persistence(25);
console.log(result4);
