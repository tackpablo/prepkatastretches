const calculateChange = function (total, cash) {
  let difference = cash - total;
  // declare object to return later
  let changeObj = {};
  //declar bills and their values
  const currency = [
    { name: "twentyDollar", value: 2000 },
    { name: "tenDollar", value: 1000 },
    { name: "fiveDollar", value: 500 },
    { name: "twoDollar", value: 200 },
    { name: "oneDollar", value: 100 },
    { name: "quarter", value: 25 },
    { name: "dime", value: 10 },
    { name: "nickel", value: 5 },
    { name: "penny", value: 1 },
  ];
  // for every currency object with name and value key pairs, we will update the empty object with the difference of each currency and update the difference as it goes down the values
  for (let i = 0; i < currency.length; i++) {
    // at every step of new empty obj (with name of currency value), give it a value of the value amount that fits into total difference
    changeObj[currency[i].name] = Math.floor(difference / currency[i].value);
    // remove the value amount from total difference and loop so it goes through every currency
    difference -= currency[i].value * changeObj[currency[i].name];
  }
  // for values name and value key pairs that are empty, delete it so they are not there
  for (const change in changeObj) {
    if (changeObj[change] === 0) {
      delete changeObj[change];
    }
  }
  // return object that has all loop calculations and empty currencies removed
  return changeObj;
};

console.log(calculateChange(1787, 2000)); // { twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000)); // { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000)); // { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
