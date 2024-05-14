const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

a = 5;
b = 2;

console.log(add(a, b));
console.log(subtract(a, b));
console.log(multiply(a, b));
console.log(divide(a, b));

const information = (firstName, location, hobby) => {
  console.log(
    `Hi, my name is ${firstName} I live in ${location} and enjoy ${hobby}.`
  );
};

firstName = "Chin";
location = "Surin";
hobby = "Playing game";

information(firstName, location, hobby);
