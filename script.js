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

//for each
const fruits = [`apple`, `strawberry`, `pear`];
fruits.forEach((fruit) => console.log(fruit));
fruits.forEach((fruit, index) => console.log(fruit, index));

// some
const hasStrawberry = fruits.some((fruit) => {
  if (fruit === `strawberry`) {
    return true;
  } else {
    return false;
  }
});
console.log(`has strawberry:`, hasStrawberry);

// reduce
const someNumbers = [10, 20, 30, 40];
const someNumbersTotal = someNumbers.reduce((acc, curr) => acc + curr);
console.log(someNumbersTotal);

const shop = [
  {
    name: "plot armor",
    price: 9999,
  },
  {
    name: "hero sword",
    price: 4750,
  },
  {
    name: "jobloop caps",
    price: 15,
  },
  {
    name: "Macguffin",
    price: 1,
  },
];

const priceTotal = shop.reduce((acc, curr) => acc + curr.price, 0);
console.log(`to buy the entire shop, you need: ${priceTotal}`);

// map- lager et ekstra array som man kan endre på, endrer ikke den orginale
const newShop = shop.map((shopItem) => {
  if (shopItem.name === "jobloop caps") {
    return {
      name: shopItem.name,
      price: shopItem.price,
    };
  }
  return {
    name: shopItem.name,
    price: shopItem.price + 10,
  };
});
console.log(newShop);
