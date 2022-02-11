const numberOfVowels = function (data) {
  let splitChars = data.split("");
  let counter = 0;
  for (i = 0; i < splitChars.length; i++) {
    if (
      splitChars[i] === "a" ||
      splitChars[i] === "e" ||
      splitChars[i] === "i" ||
      splitChars[i] === "o" ||
      splitChars[i] === "u"
    )
      counter++;
  }
  return counter;
};

console.log(numberOfVowels("orange")); //3
console.log(numberOfVowels("lighthouse labs")); //5
console.log(numberOfVowels("aeiou")); //5
console.log(numberOfVowels("chainsaw")); //3
console.log(numberOfVowels("animateable")); //6
