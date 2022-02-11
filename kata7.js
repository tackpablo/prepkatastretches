const checkAir = function (samples, threshold) {
  let dirtyCounter = 0;
  let cleanCounter = 0;
  for (i = 0; i < samples.length; i++) {
    if (samples[i] === "dirty") {
      dirtyCounter = dirtyCounter + 1;
    }
  }
  if (dirtyCounter / samples.length < threshold) {
    return "Clean";
  } else {
    return "Polluted";
  }
};

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
); // Polluted

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25)); // Polluted

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
); // Clean
