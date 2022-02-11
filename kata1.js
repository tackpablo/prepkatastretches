// // Easy solution using methods
// const sumLargestNumbers = function (data) {
//   let first = Math.max.apply(null, data);
//   data.splice(data.indexOf(first), 1);
//   let second = Math.max.apply(null, data);
//   return first + second;
// };

// Solution I came up with but does not work for negative values
// const sumLargestNumbers = function (data) {
//   let first = data[0];
//   let second = data[0];
//   for (i = 0; i < data.length; i++) {
//     if (data[i] > first) {
//       first = data[i];
//     }
//   }
//   data.splice(data.indexOf(first));

//   for (let j = 0; j < data.length; j++) {
//     if (data[j] > second) {
//       second = data[j];
//     }
//   }
//   return first + second;
// };

// Following suggestions from Yves
const sumLargestNumbers = function (data) {
  let first = data[0];
  let second = data[0];
  let index1 = 0;
  let index2 = 0;
  for (i = 0; i < data.length; i++) {
    if (data[i] > data[index1]) {
      index1 = i;
    }
  }
  first = data[index1];
  data.splice(index1, 1);

  for (let j = 0; j < data.length; j++) {
    if (data[j] > data[index2]) {
      index2 = j;
    }
  }
  second = data[index2];
  return first + second;
};

console.log(sumLargestNumbers([1, 10])); //11
console.log(sumLargestNumbers([1, 2, 3])); //5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); //126
console.log(sumLargestNumbers([-1, -2, -3, -4])); //-3
