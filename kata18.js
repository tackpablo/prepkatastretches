const squareCode = function (message) {
  // removed spaces new array
  let removedSpc = message.replace(/\s+/g, "");
  let holderArr = [];
  let finalArr = [];
  let counter = 0;
  // calculation to find squared number
  let square = Math.ceil(Math.sqrt(removedSpc.length));

  // loop over square amount to the right by one
  for (let i = 0; i < square; i++) {
    // can loop over square amount to add every 3rd letter
    for (let j = 0 + counter; j < removedSpc.length; j += square) {
      holderArr.push(removedSpc[j]);
    }
    // loops over the rows so it doesnt just keep looking the first squared letters and adds them
    counter++;
    finalArr.push(holderArr.join(""));
    holderArr = [];
  }
  return finalArr.join("\n");
};

console.log(squareCode("chill out"));
// clu
// hlt
// io

console.log(squareCode("feed the dog"));
// fto
// ehg
// ee
// dd

console.log(squareCode("have a nice day"));
// hae
// and
// via
// ecy

console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
// imtgdvs
// fearwer
// mayoogo
// anouuio
// ntnnlvt
// wttddes
// aohghn
// sseoau
