const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  // loop through bakery A
  for (let i = 0; i < bakeryA.length; i++) {
    // loop through bakery B
    for (let j = 0; j < bakeryB.length; j++) {
      // loop through recipes
      for (let k = 0; k < recipes.length; k++) {
        if (
          //if statement for where you compare joined recipe ingredients to bakeryA and bakeryB ingredients that are also joined but check for forward and backwards cases
          recipes[k].ingredients.join() === bakeryA[i] + "," + bakeryB[j] ||
          recipes[k].ingredients.join() === bakeryB[j] + "," + bakeryA[i]
        ) {
          //return recipe name if above is true
          return recipes[k].name;
        }
      }
    }
  }
};

let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes)); // Persian Cheesecake

bakeryA = ["potatoes", "bay leaf", "raisins"];
bakeryB = ["red bean", "dijon mustard", "apples"];
recipes = [
  {
    name: "Potato Ganache",
    ingredients: ["potatoes", "chocolate"],
  },
  {
    name: "Sweet Fish",
    ingredients: ["anchovies", "honey"],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ["dijon mustard", "raisins"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes)); // Nima's Famous Dijon Raisins
