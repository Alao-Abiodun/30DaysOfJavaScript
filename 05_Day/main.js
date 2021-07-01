const itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
];

// 17
console.log(itCompanies.slice(0, 3));
// 18
console.log(itCompanies.splice(4, 1));

// EXERCISE 2
// 1
console.log(countries);
console.log(webTechs);

let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let word = text.replace(', .', '');
console.log(word);
// const word = text.split(' ');
// console.log(word);
// console.log(word.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
shoppingCart.push('sugar');
shoppingCart.splice(4, 1);
shoppingCart.splice(3, 1, 'Green Tea');
console.log(shoppingCart);

// 4
let indexA = countries.indexOf('Ethiopia');
if (indexA != -1) {
  console.log('ETHIOPIA');
} else {
  countries.push('Ethiopia');
  console.log(countries);
}

let indexB = webTechs.includes('Sass');
if (indexB) {
  console.log('Sass is a CSS preprocess');
} else {
  webTechs.push('Sass');
  console.log(webTechs);
}
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// EXERCISE 3

const harmslessRansomNote = (text, magazine) => {
  let textArr = text.split(' ');
  let magazineArr = magazine.split(' ');
  let magazineObj = {};

  magazineArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  let noteIsPossible = true;
  textArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) noteIsPossible = false;
    } else {
      noteIsPossible = false;
    }
  });

  console.log(noteIsPossible);
};

harmslessRansomNote(
  'all text is',
  'this is all the magazine text in the magazine'
);

const isPalindrome = string => {
  string = string.toLowerCase();
  characterArr = string.split('');
  let validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const letters = [];
  characterArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) letters.push(char);
  });

  if (letters.join('') === letters.reverse().join('')) return true;
  else return false;
};

console.log(isPalindrome('Coding JavaScript'));
