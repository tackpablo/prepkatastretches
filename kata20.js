const blocksAway = function (directions) {
  // result object with 2 key value pairs
  let result = { east: 0, north: 0 };
  // initial values of east and north values
  let eastValue = 0;
  let northValue = 0;
  // 1 key value pair 1 and 3 (odd)
  for (let i = 0; i < directions.length; i += 4) {
    // 2 if first direction at i is right
    if (directions[i] === "right" && directions[0] === "right") {
      // 3 add to eastValue counter the value (i+1)
      eastValue += directions[i + 1];
      // 4 ??
    } else if (directions[i] === "left" && directions[0] === "right") {
      // 5 subtract eastValue coutner the value (i+1)
      eastValue -= directions[i + 1];
    }
    // 6 final eastValue counter
    eastValue;
  }
  // 7 key value pair 2 and 4 (even)
  for (let i = 2; i < directions.length; i += 4) {
    // 8 if direction at i is right
    if (directions[i] === "right" && directions[0] === "right") {
      // 9 subtract northValue counter the value (i+1)
      northValue -= directions[i + 1];
      // 10 ??
    } else if (directions[i] === "left" && directions[0] === "right") {
      // 11 add to northValue counter the value (i+1)
      northValue += directions[i + 1];
    }
    // 12 final northValue counter
    northValue;
  }
  // 13 key value pair 1 and 3 (odd)
  for (let i = 0; i < directions.length; i += 4) {
    // 14 if direction at i is left
    if (directions[i] === "left" && directions[0] === "left") {
      // 15 add to northValue counter the value (i+1)
      northValue += directions[i + 1];
      // 16 ??
    } else if (directions[i] === "right" && directions[0] === "left") {
      // 15 subtract to northValue counter the value (i+1)
      northValue -= directions[i + 1];
    }
    // 16 final northValue counter
    northValue;
  }
  // 17 key value pair 2 and 4 (odd)
  for (let i = 2; i < directions.length; i += 4) {
    // 18 ??
    if (directions[i] === "right" && directions[0] === "left") {
      // 19 add to eastValue counter the value (i+1)
      eastValue += directions[i + 1];
      // 20 if direction at i is left
    } else if (directions[i] === "left" && directions[0] === "left") {
      // 21 subtract to northValue counter the value (i+1)
      eastValue -= directions[i + 1];
    }
    // 22 final eastValue counter
    eastValue;
  }
  // return result of object
  return (result = { east: eastValue, north: northValue });
};

// test 1
console.log(blocksAway(["right", 2, "left", 3, "left", 1])); // answer 1 {east: 1, north: 3}

// test 2
console.log(
  blocksAway([
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
  ])
); // answer 2 {east: 3, north: 3}

// test 3
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1])); // answer 3 {east: 0, north: 0}

// Answer from Albert
const blocksAway = function (directions) {
  const finalCoords = { east: 0, north: 0 };
  let lastMove = ""; // n, e, s, w

  // after eatch move (depending on direction cab is facing), add or subtract east/north value and keep track of facing direction with lastMove
  for (let i = 0; i < directions.length; i += 2) {
    let moveAmount = directions[i + 1];
    // taking right turn cases, but depends on directionality the cab is facing
    if (directions[i] === "right") {
      switch (lastMove) {
        // first move
        // when first direciton is unknown, either moves east (right) or north (left)
        case "":
          finalCoords.east += moveAmount;
          lastMove = "e";
          break;
        // subsequent moves
        // when facing north, move would be east since turing right
        case "n":
          finalCoords.east += moveAmount;
          lastMove = "e";
          break;
        // when facing south, move would be west since turing right
        case "s":
          finalCoords.east -= moveAmount;
          lastMove = "w";
          break;
        // when facing east, move would be south since turing right
        case "e":
          finalCoords.north -= moveAmount;
          lastMove = "s";
          break;
        // when facing west, move would be north since turing right
        case "w":
          finalCoords.north += moveAmount;
          lastMove = "n";
          break;
      }
      // taking left turn cases, but depends on directionality the cab is facing
    } else if (directions[i] === "left") {
      switch (lastMove) {
        // first move
        // when first direciton is unknown, either moves east (right) or north (left)
        case "":
          finalCoords.north += moveAmount;
          lastMove = "n";
          break;
        // subsequent moves
        // when facing north, move would be west since turing left
        case "n":
          finalCoords.east -= moveAmount;
          lastMove = "w";
          break;
        // when facing south, move would be east since turing left
        case "s":
          finalCoords.east += moveAmount;
          lastMove = "e";
          break;
        // when facing east, move would be north since turing left
        case "e":
          finalCoords.north += moveAmount;
          lastMove = "n";
          break;
        // when facing west, move would be south since turing left
        case "w":
          finalCoords.north -= moveAmount;
          lastMove = "s";
          break;
      }
    }
  }
  return finalCoords;
};
