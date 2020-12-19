// EXERCISE LEVEL 1
// Q1
function fullName() {
  console.log(`Alao Abiodun AbdulRahman`);
}
fullName();
// Q2
const fullName = (firstName, lastName) => {
  let fullName = `my name is ${lastName} ${firstName}`;
  return fullName;
}
fullName(Alao, Abiodun);
// Q3
const addNumbers = (function (a, b) {
  return a + b;
})(1, 3);
console.log(addNumbers);
// Q4
const areaOfRectangle = function (length, width) {
  const area = length * width;
  return area;
}
console.log(areaOfRectangle(2, 3));
// Q5
const perimeterOfRectangle = (length, width) => {
  const perimeter = 2 * (length + width);
  return perimeter;
}
console.log(perimeterOfRectangle(2, 3));
// Q6
function volumeOfPrism(length, width, height) {
  const volume = length * width * height;
  return volume;
}
console.log(volumeOfPrism(2, 3, 4));
// Q7
const areaOfCircle = (function (r) {
  const area = Math.PI * r * r;
  return area;
})(2);
console.log(areaOfCircle);
// Q8
const circumOfCircle = function (r) {
  const circumference = 2 * Math.PI * r;
  return circumference;
}
console.log(circumOfCircle(3));
//Q9
const densityOfSubstance = (mass, volume) => {
  const density = mass * volume;
  return density;
}
console.log(densityOfSubstance(4, 5));
// Q10
function speedOfMovingObject(distance, totalTimeTaken) {
  const speed = distance / totalTimeTaken;
  return speed;
}
console.log(speedOfMovingObject(30, 6));
// Q11
const weightOfSubstance = function (mass, gravity = 9.8) {
  const weight = mass * gravity;
  return weight;
}
console.log(weightOfSubstance(20));
// Q12
const convertCelciusToFahrenheit = (function (celcius) {
  const fahrenheit = (celcius * 9 / 5) + 32;
  return fahrenheit;
})(23);
console.log(convertCelciusToFahrenheit);
// Q13
function calculateBMI(weight, height) {
  const BMI = weight / Math.pow(height, 2);
  if (BMI < 18.9) {
    console.log('This is underweight');
  } else if (BMI > 18.5 && BMI <= 24.9) {
    console.log('This is a normal weight');
  } else if (BMI > 25 && BMI <= 29.9) {
    console.log('This is overweight');
  } else if (BMI >= 30) {
    console.log('This is Obese');
  } else {
    console.log('The same group apply to both men and women');
  }
}
console.log(calculateBMI(12, 4));
// Q14
const checkSeason = (function (season) {
  switch (season) {
    case 'January':
      console.log(`Autumn`);
      break;
    case 'August':
      console.log(`Winter`);
      break;
    case 'September':
      console.log(`Spring`);
      break;
    case 'December':
      console.log(`Summer`);
      break;
    default:
      console.log(`No season with that month`)
      break;
  }
})('December');
console.log(checkSeason);
//Q15
const findMax = (a, b, c) => {
  let maxNumber = a;
  if (b > maxNumber) {
    maxNumber = b;
  } else if (c > maxNumber) {
    maxNumber = c
  }
  return maxNumber;
}
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));

// EXERCISE LEVEL 2
// Q1
// Q2
const solveQuadratic = (a, b, c) => {
  const quadEquation_1 = (-b + Math.sqrt((Math.pow(b, 2)) - (4 * a * c))) / (2 * a);
  const quadEquation_2 = (-b - Math.sqrt((Math.pow(b, 2)) - (4 * a * c))) / (2 * a);
  return {
    quadEquation_1,
    quadEquation_2
  }
}
console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}
// Q3
function printArray(arr) {
  for (const value of arr) {
    console.log(value);
  }
}
printArray([1, 2, 3, 4, 5]);
// Q4
function showDateTime() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}
console.log(showDateTime())
// Q5
const swapValues = function (x, y) {
  let temp = x;
  x = y;
  y = temp;
  return { x, y };
}
swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4
// Q6
const reverseArray = (array) => {
  let newArray = []
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i])
  }
}
const numbers = [1, 2, 3, 4, 5]
const alphabets = ['A', 'B', 'C']
reverseArray(numbers);
reverseArray(alphabets)
// Q7
const capitalizeArray = (array) => {
  let newArray = []
  for (const arr of array) {
    newArray.push(arr.toUpperCase())
  }
  return newArray
}
const mernStacks = ['MongoDB', 'Express', 'React', 'Node.JS'];
console.log(capitalizeArray(mernStacks))
// Q8
const addItem = (items) => {
  let newArray = []
  for (const item of items) {
    newArray.push(item);
  }
  return newArray
}
const item1 = ['Hello']
const item2 = ['Hello', 'World']
console.log(addItem(item1));
console.log(addItem(item2))
// Q9
const myArray = [1, 2, 3, 4, 5];
function removeItem(index) {
  return myArray.slice(index, index + 1);
}
console.log(removeItem(2));
// Q11 
function sumOfOdd(number) {
  let oddSum = 0;
  for (let i = 0; i < number; i++) {
    if (number[i] % 2 === 1) {
      oddSum += num;
    }
  }
  return oddSum;
}
console.log(50);
// Q13
const evensAndOdds = (integer) => {
  for (let i = 0; i < integer; i++) {
    let sum = 0;
    if (i % 2 === 1) {
      sum = sum + i;
      console.log(`The number of odd are ${sum}`);
    }
    console.log(`The number of even are ${sum}`);
  }
}
console.log(evensAndOdds(100));
// Q14
const sumOfNumber = (...args) => {
  let sum = 0;
  for (const element of args) {
    sum += element;
  }
  return sum;
};
console.log(sumOfNumber(1, 2, 3));
// Q17
const randomHexaNumberGenerator = () => {
  const str = '0123456789abcdef';
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    hex += str[index];
  }
  return hex;
}
console.log(randomHexaNumberGenerator());

// EXERCISE LEVEL 3
// Q2
const rgbColorGenerator = () => {
  const value1 = Math.floor(Math.random() * 256);
  const value2 = Math.floor(Math.random() * 256);
  const value3 = Math.floor(Math.random() * 256);
  const rgbValues = `rgb(${value1},${value2},${value3})`;
  return rgbValues
}
console.log(rgbColorGenerator());
// Q3
const arrayOfHexaColors = () => {
  const hexColorArray = [];
  const string = '0123456789abcdef';
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * string.length);
    hex += string[index];
  }
  hexColorArray.push(hex);
  return hexColorArray;
}
console.log(arrayOfHexaColors());

// Q4
const arrayOfRgbColors = () => {
  const rgbColorArray = [];
  const value1 = Math.floor(Math.random() * 256);
  const value2 = Math.floor(Math.random() * 256);
  const value3 = Math.floor(Math.random() * 256);
  const rgbValues = `rgb(${value1},${value2},${value3})`;
  rgbColorArray.push(rgbValues);
  return rgbColorArray;
};
console.log(arrayOfRgbColors());
// Q7
const generateColors = (colorPattern, n) => {
  const arrayOfColors = [];
  if (colorPattern === 'rgb') {
    const value1 = Math.floor(Math.random() * 256);
    const value2 = Math.floor(Math.random() * 256);
    const value3 = Math.floor(Math.random() * 256);
    const rgbValues = `rgb(${value1},${value2},${value3})`;
    let i = 1;
    while (i <= n) {
      arrayOfColors.push(rgbValues);
      i++;
    }
  } else if (colorPattern === 'hexa') {
    const string = '0123456789abcdef';
    let hex = '#';
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * string.length);
      hex += string[index];
    }
    let i = 0;
    while (i < n) {
      arrayOfColors.push(hex);
    }
  }
  return arrayOfColors;
}
console.log(generateColors('hexa', 3));
console.log(generateColors('hexa', 1));
console.log(generateColors('rgb', 3));
console.log(generateColors('rgb', 1));
// Q9
const factorial = (number) => {
  if (number === 0) {
    return 1;
  }
  return number * factorial(number - 1);
}
console.log(factorial(3));
// Q10
const isEmpty = (param) => {
  if (param === '' || param === null || param === undefined) {
    return `It is empty or no value`
  }
  return `It is not empty`;
}
console.log(isEmpty());