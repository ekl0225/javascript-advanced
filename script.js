const logger = (message) => {
  console.log(message);
};

const calculatorOutput = (result) => {
  console.log(`Output:`, result);
};

const add = (a, b, callback) => {
  callback(a + b);
};

const subtract = (a, b, callback) => {
  callback(a - b);
};

const multiply = (a, b, callback) => {
  callback(a * b);
};

add(1, 2, logger);
add(5, 20, calculatorOutput);
subtract(10, 6, calculatorOutput);
multiply(10, 10, calculatorOutput);

// sender inn funksjoner direkte
multiply(2, 10, (result) => {
  console.log(`your result:`, result);
});

const sortNumbers = (numbersArray, callback) => {
  const output = numbersArray.sort(callback);
  return output;
};

const isEven = (predicate) => {
  return numbers.filter(predicate);
};

// const sortNumbersDown = (a, b) => b - a;

const numbers = [9, 6, 5, 2, 4, 1, 8];
console.log(sortNumbers(numbers, (a, b) => a - b));
console.log(sortNumbers(numbers, (a, b) => b - a));
console.log(isEven((n) => n % 2 === 0));

// const sorted = numbers.sort((a, b) => a - b);
// console.log(sorted);
// const sortedDown = numbers.sort(sortNumbersDown);

// console.log(sortedDown);
