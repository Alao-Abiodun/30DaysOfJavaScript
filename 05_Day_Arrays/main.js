const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 17
console.log(itCompanies.slice(0, 3));
// 18
console.log(itCompanies.splice(4, 1));

// EXERCISE 2
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const word = text.split(" ");
console.log(word);
console.log(word.length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
shoppingCart.push("sugar");
shoppingCart.splice(4, 1);
shoppingCart.splice(3, 1, "Green Tea");
console.log(shoppingCart);

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// EXERCISE 3
