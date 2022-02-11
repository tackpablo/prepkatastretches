const urlDecode = function (text) {
  // final object
  let resultObj = {};
  // replacing %20 to " " and splitting any place &/= are present into different array (with different indexes)
  let splitText = text.replace(/%20/g, " ").split(/[&=]/);
  // console.log(splitText);
  // for split text, at values of i (until split text end), cycling through every 2 of i for the object key and then after apppending value at every 1 of i
  for (let i = 0; i < splitText.length; i = i + 2) {
    resultObj[splitText[i]] = splitText[i + 1];
  }
  return resultObj;
};

console.log(urlDecode("duck=rubber")); // {duck: "rubber"}
console.log(urlDecode("bootcamp=Lighthouse%20Labs")); // {bootcamp: "Lighthouse Labs"}
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain")); // {city: "Vancouver", weather: "lots of rain"}
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather); // "lots of rain"
