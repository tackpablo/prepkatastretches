const instructorWithLongestName = function (instructors) {
  let maxName = instructors[0].name;
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i]["name"].length > maxName.length) {
      maxName = instructors[i];
    }
  }
  return maxName;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
); // {name: "Jeremiah", course: "Web"}
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
); // {name: "Domascus", course: "Web"}
