// First versio of code, very unclean
// const whereCanIPark = function (spots, vehicle) {
//   let spot = [];
//   let xAxis = 0;
//   let yAxis = 0;
//   let xAxis1 = 0;
//   let yAxis1 = 0;
//   let xAxis2 = 0;
//   let yAxis2 = 0;
//   // y axis
//   for (let i = 0; i < spots.length; i++) {
//     // x axis
//     for (let j = 0; j < spots[i].length; j++) {
//       if (spots[i][j] === "R" && vehicle === "regular") {
//         xAxis = j;
//         yAxis = i;
//         spot = [xAxis, yAxis];
//       } else if (
//         (spots[i][j] === "R" || spots[i][j] === "S") &&
//         vehicle === "small"
//       ) {
//         xAxis1 = j;
//         yAxis1 = i;
//         spot = [xAxis1, yAxis1];
//       } else if (
//         (spots[i][j] === "R" || spots[i][j] === "S" || spots[i][j] === "M") &&
//         vehicle === "motorcycle"
//       ) {
//         xAxis2 = j;
//         yAxis2 = i;
//         spot = [xAxis2, yAxis2];
//       }
//     }
//   }
//   return spot;
// };

// Cleaned up version of code
const whereCanIPark = function (spots, vehicle) {
  let spot = [];
  let xAxis = 0;
  let yAxis = 0;
  let xAxis1 = 0;
  let yAxis1 = 0;
  let xAxis2 = 0;
  let yAxis2 = 0;
  // y axis
  for (let y = 0; y < spots.length; y++) {
    // x axis
    for (let x = 0; x < spots[y].length; x++) {
      // for vehicle type and then spots
      if (vehicle === "regular") {
        if (spots[y][x] === "R") {
          return (spot = [x, y]);
        }
      } else if (vehicle === "small") {
        if (spots[y][x] === "R" || spots[y][x] === "S") {
          return (spot = [x, y]);
        }
      } else if (vehicle === "motorcycle") {
        if (spots[y][x] === "R" || spots[y][x] === "S" || spots[y][x] === "M")
          return (spot = [x, y]);
      }
    }
  }
  return false;
};

console.log(
  whereCanIPark(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ["s", "s", "s", "S", "R", "M"], // 0 ROWS ARE Y
      ["s", "M", "s", "S", "r", "M"], // 1
      ["s", "M", "s", "S", "r", "m"], // 2
      ["S", "r", "s", "m", "r", "M"], // 3
      ["S", "r", "s", "m", "r", "M"], // 4
      ["S", "r", "S", "M", "M", "S"], // 5
    ],
    "regular"
  )
); // [4,0]

console.log(
  whereCanIPark(
    [
      ["M", "M", "M", "M"],
      ["M", "s", "M", "M"],
      ["M", "M", "M", "M"],
      ["M", "M", "r", "M"],
    ],
    "small"
  )
); // false

console.log(
  whereCanIPark(
    [
      ["s", "s", "s", "s", "s", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["S", "r", "s", "m", "r", "s"],
      ["S", "r", "s", "m", "R", "s"],
      ["S", "r", "S", "M", "m", "S"],
    ],
    "motorcycle"
  )
); // [3,1]
