const repeatNumbers = function (data) {
  let results = "";
  let finalResult = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i][1]; j++) {
      results = results + data[i][0];
    }
    finalResult.push(results);
    results = ""; // this is imperative to get the repeat to reset before the second array
  }
  return finalResult.join(","); // because results are reset, we can join each seperately via a comma since they are different string
};

console.log(repeatNumbers([[1, 10]])); // 1111111111

console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
); // 11, 222

console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
); // 10101010, 343434343434, 9292
