const camelCase = function (input) {
  let string = "";
  for (let i = 0; i < input.length; i++) {
    // second conditional for in case white space at the end
    if (input[i] === " " && i !== input.length - 1) {
      string = string + input[i + 1].toUpperCase();
      i = i + 1; // needs to be done to go to next letter
    } else {
      string = string + input[i];
    }
  }
  return string;
};

console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy lighthouse")); // loopyLighthouse
console.log(camelCase("supercalifragalisticexpialidocious")); //supercalifragalisticexpialidocious
