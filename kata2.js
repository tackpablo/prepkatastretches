const conditionalSum = function (values, condition) {
  let evenValues = 0;
  let oddValues = 0;
  if (condition === "even") {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        evenValues += values[i];
      }
    }
  } else if (condition === "odd") {
    for (let j = 0; j < values.length; j++) {
      if (Math.abs(values[j]) % 2 === 1) {
        oddValues += values[j];
      }
    }
  }
  return evenValues + oddValues;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even")); //6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); //9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); //144
console.log(conditionalSum([], "odd")); //0
console.log(conditionalSum([-1, -2, -7, 5, 18, 20], "odd")); // -3
console.log(conditionalSum([-11, -22, -17, 52, 18, 20], "odd")); // -28
