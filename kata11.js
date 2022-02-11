// Use the value below whenever you need the value of Pi
const PI = 3.14159;

// volume of sphere = 4/3PI *(r^3)
const sphereVolume = function (radius) {
  if (radius > 0) {
    return (4 / 3) * PI * (radius * radius * radius);
  } else {
    return undefined;
  }
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

// volume of cone = 1/3(PI*(r^2)*h)
const coneVolume = function (radius, height) {
  if (radius > 0 && height > 0) {
    return (1 / 3) * (PI * (radius * radius) * height);
  } else {
    return undefined;
  }
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

// volume of prism = height * width * depth
const prismVolume = function (height, width, depth) {
  if (height > 0 && width > 0 && depth > 0) {
    return height * width * depth;
  } else {
    return undefined;
  }
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let total = 0;
  for (const solid of solids) {
    if (solid.type === "sphere") {
      total += sphereVolume(solid.radius);
    } else if (solid.type === "cone") {
      total += coneVolume(solid.radius, solid.height);
    } else if (solid.type === "prism") {
      total += prismVolume(solid.height, solid.width, solid.depth);
    }
  }
  return total;
};

const largeSphere = {
  type: "sphere",
  radius: 40,
};

const smallSphere = {
  type: "sphere",
  radius: 10,
};

const cone = {
  type: "cone",
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000); // true true true true
