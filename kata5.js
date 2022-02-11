const urlEncode = function (text) {
  let stringNumber = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] == " ") {
      stringNumber += "%20";
    } else {
      stringNumber += text.charAt(i);
    }
  }
  for (let j = 0; j < text.length; j++) {
    if ((text.charAt(0) || text.length() - 1) === " ") {
      let removeOutsideSpace = stringNumber.slice(3);
      return removeOutsideSpace.slice(0, -3);
    } else {
      return stringNumber;
    }
  }
};

console.log(urlEncode("Lighthouse Labs")); //Lighthouse%20Labs
console.log(urlEncode(" Lighthouse Labs ")); //Lighthouse%20Labs
console.log(urlEncode("blue is greener than purple for sure")); //blue%20is%20greener%20than%20purple%20for%20sure
