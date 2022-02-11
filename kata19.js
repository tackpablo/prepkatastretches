const generateBoard = function (whiteQueen, blackQueen) {
  let board = [];
  // rows
  for (let i = 0; i < 8; i++) {
    // let each row have an emtpy array
    board[i] = [];
    //columns
    for (let j = 0; j < 8; j++) {
      // each column has 0 in it's place
      board[i][j] = 0;
    }
  }
  // board generates a 1 at whiteQueen(x,y) (or position (0,1))
  board[whiteQueen[0]][whiteQueen[1]] = 1;
  // board generates a 1 at blackQueen(x,y) (or position (0,1))
  board[blackQueen[0]][blackQueen[1]] = 1;
  // returns fully generated board
  return board;
};
const queenThreat = function (board) {
  // create emptry array for comparison
  let array = [];
  // for x axis checking
  for (let x = 0; x < 8; x++) {
    // for y axis checking
    for (let y = 0; y < 8; y++) {
      // if any values on the board of (x,y) = 1 (i.e. Queen is there, then pushe those values of x and y to the array)
      if (board[x][y] === 1) {
        array.push(x);
        array.push(y);
      }
    }
  }
  // declare the 4 numbers (you get an array [wX,wY,bX,bY] as the board is white on the inital top side of board and black is initial bottom side of board) to each queen x,y
  let whiteX = array[0];
  let whiteY = array[1];
  let blackX = array[2];
  let blackY = array[3];

  // logic to check if queens are in range, had to find on internet as not sure
  if (
    // in case queens are in same y axis
    whiteY === blackY ||
    // in case queens are in same x axis
    whiteX === blackX ||
    // logic for diagnal cases
    whiteY - blackY === blackX - whiteX ||
    whiteX - blackX === whiteY - blackY ||
    whiteY + blackY === whiteX + blackX
  ) {
    return true;
  } else {
    return false;
  }
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];

let generatedBoard = generateBoard(whiteQueen, blackQueen);

console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
// [
//   [0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ]
true;

// let whiteQueen = [0, 0];
// let blackQueen = [5, 7];

// let generatedBoard = generateBoard(whiteQueen, blackQueen);

// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));
// // [
// //   [1, 0, 0, 0, 0, 0, 0, 0],
// //   [0, 0, 0, 0, 0, 0, 0, 0],
// //   [0, 0, 0, 0, 0, 0, 0, 0],
// //   [0, 0, 0, 0, 0, 0, 0, 0],
// //   [0, 0, 0, 0, 0, 0, 0, 0],
// //   [0, 0, 0, 0, 0, 0, 0, 1],
// //   [0, 0, 0, 0, 0, 0, 0, 0],
// //   [0, 0, 0, 0, 0, 0, 0, 0]
// // ]
// // false
