const organizeInstructors = function (instructors) {
  // empty object to push results to
  let output = {};
  // for loop to go through the objects and their key value pairs (name, course)
  for (let i = 0; i < instructors.length; i++) {
    // defining variable for all the "courses"
    let courseName = instructors[i].course;
    // for/in loops through properties of an object, in this case the course names
    if (courseName in output) {
      // pushes names of instructors to course
      output[courseName].push(instructors[i].name);
    } else {
      // once all done it pushes the course to the output????
      output[courseName] = [instructors[i].name];
    }
  }
  return output;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
// {
//   iOS: ["Samuel"],
//   Web: ["Victoria", "Karim", "Donald"]
// }
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
);
// {
//   Blockchain: ["Brendan"],
//   Web: ["David", "Carlos"],
//   iOS: ["Martha"]
// }
