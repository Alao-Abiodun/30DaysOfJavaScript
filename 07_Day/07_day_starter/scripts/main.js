// EXERCISE LEVEL 1

// 1
function fullNameWithNoParams() {
    console.log(`This is fullName with no params and return: Alao Abiodun`);
}
fullNameWithNoParams();

// 2 
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(fullName('Abiodun', 'Alao'));

// 3
function addNumbers(num1, num2){
    let sum = num1 + num2;
    return `The sum of two number is ${sum}`;
}
console.log(addNumbers(2,3));

// 4
function areaOfRectangle(length, width){
    let area = length * width;
    return `The area of a rectagle is ${area}`;
}
console.log(areaOfRectangle(4,3));

// 5
function perimeterOfRectange(length , width){
    let perimeter = 2 * (length * width);
    return `The perimeter of a rectangle is: ${perimeter}`
}
console.log(perimeterOfRectange(2,3));

// 6
function volumeOfRectPrism(lenth, width, height){
    let volume = length * width * height;
    return `The volume of a rectangular prism is ${volume}`
}
console.log(volumeOfRectPrism(2,3,4));

// 7
function areaOfCircle(r){
    let area = Math.PI * r ** 2;
    return `The area of a circle is ${area}`
}
console.log(areaOfCircle(0.5));

// 8 
function circumferenceOfCircle(r){
    let circumference = 2 * Math.PI * r;
    return `The circumference of circle is ${circumference}`
}
console.log(circumferenceOfCircle(0.5));

// 9
function densityOfSubstance(mass, volume){
    let density = mass / volume;
    return `The density of a substance is ${density}`
}
console.log(densityOfSubstance(3,4));

// 10
function speedCovered(distance, time){
    let speed = distance * time;
    return `The speed covered by a moving object is ${speed}`
}
console.log(speedCovered(3,4));

// 11 
function weightOfSubstance(mass , gravity){
    let weight = mass * gravity;
    return `The weight of the substance is ${weight}`
}
console.log(weightOfSubstance(0.2, 9.8))

// 12 
function convertCelciusToFahrenheit(celcius){
    let fahrenheit = (celcius * 9 / 5) + 32;
    return `The value for the conversion of celcius to fahrenheit is ${fahrenheit}`
}
console.log(convertCelciusToFahrenheit(107))

// 13
function calculateBMI(weight, height){
    let bmi = weight  / (height ** 2);
    if (bmi  < 18.5) {
        console.log(`Underweight`);
    } else if (bmi >= 18.5 && bmi <=24.9){
        console.log(`Normal weight`)
    } else if (bmi >= 25 && bmi <= 29.9) {
        console.log(`Overweight`)
    } else if (bmi >= 30 ){
        console.log(`Obese`)
    } else {
        console.log(`The same group apply to men and women`)
    }
    return bmi;
}
console.log(calculateBMI(23,3))

// 14
function checkSeason(month){
    if (month == 'January' || month == 'February' || month == 'March'){
        console.log(`Autumn`)
    } else if (month == 'April' || month == 'May' || month == 'June') {
        console.log(`Winter`)
    } else if (month == 'July' || month == 'August' || month == 'September') {
        console.log(`Spring`)
    } else {
        console.log('Summer');
    }
    return month
}
checkSeason('January')

// 15
function findMax(a,b,c){
    let MaxNumber = Math.max(a,b, c);
    return `The maximum number is ${MaxNumber}`
}
console.log(findMax(2,3,4));

// EXERCISE LEVEL 2 

// 1
console.log("THIS IS THE EXERCISE OF LEVEL 2")


// 2
// const solveQuadEquation = function(a, b, c){
//    let X_1 =  - b + (Math.sqrt(b * b - 4 * a * c)) / 2 * a
//    let X_2 =  - b - (Math.sqrt(b * b - 4 * a * c)) / 2 * a
//    return X_1, X_2;
// }
// console.log(solveQuadEquation());
// console.log(solveQuadEquation(1, 4, 4))
// console.log(solveQuadEquation(1, -1, -2))
// console.log(solveQuadEquation(1, 7, 12))
// console.log(solveQuadEquation(1, 0, -4))
// console.log(solveQuadEquation(1, -1, 0))

// 3 
const printArray = (array) => {
    for (const arr of array){
        console.log(arr)
    }
}
printArray([2,3,4,5])

// 4 
const showDateTime = () => {
    const now = new Date();
    const date = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const hour = now.getHours()
    const minute = now.getMinutes();
    const currentDateTime = `0${date}/0${month}/${year} ${hour}:${minute}`
    return `The current date and time of today is : ${currentDateTime}`;
}

console.log(showDateTime());

// 5
const swapValues = (x,y) => {
    let temp = x;
    x = y;
    y = temp;
    return `The value of x and y change: ${x}, ${y}`; 
}
console.log(swapValues(4, 5))

// 6
const reverseArray = (array) => {
    let newArray = [];
    for (let i = array.length; i >= 0; i--){
        newArray.push(array[i]);
    }
    console.log(newArray)
}
reverseArray([1,2,3,4,5]);

// 7 
const capitalizeArray = (array) => {
    let newArray = [];
    for (const arr of array) {
        newArray.push(arr.toUpperCase());
    }
    return newArray
}
console.log(capitalizeArray(['Nigerian', 'American', 'Saudi Arabia']))

// 8
const addItem = (item) => {
    let newArray = [];
    newArray.push(item);
    return newArray
}
console.log(addItem('JavaScript'));

// 9
const removeItem = (index) => {
    let newArray = [];
    newArray.pop(index);
    return newArray
}
console.log(removeItem('JavaScript'));

// 10 
const sumOfNumbers = (array) => {
    let sum = 0;
    for (const arr of array) {
        sum += arr;
    }
    return sum;
}
console.log(sumOfNumbers([1,2,3,4]));

// 11
const sumOfOdds = (array) => {
    let sum = 0;
    for (const arr of array) {
        if (arr % 2 == 1) {
            sum += arr;
        }
    }
    return sum;
}
console.log(sumOfOdds([1,2,3,4]));

// 12 
const sumOfEven = (number) => {
    let sum = 0;
    for (const num of number) {
        if (num % 2 != 1) {
        sum += num;
    }
    }
    return sum;
}
console.log(sumOfEven([1,2,3,4]));

// 13
// const evensAndOdds = (integer) => {
//     for (let i = 0; i < integer; i++){
//         let odd = integer % 2 == 1;
//         return `The number of odds are ${odd}`;
//     }
// }
// console.log(evensAndOdds(100));

// 14
const numOfArg = (...args) => {
    let sum = 0;
    for (const num of args){
        sum += num
    }
    return sum; 
}
console.log(numOfArg(3,4,5,6,7));

// 17
const randomHexaNumberGenerator = () => {
    const string = '012345689abcdef'
    let  hex = '#'
    let index;
    for (let i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * string.length);
        hex += string[index];
    }
    return hex;
}
console.log(randomHexaNumberGenerator());

// 18
const userIdGenerator = () => {
    const string = 'XDTDEuiesdj123454567';
    let id = '';
    let index;
    for (let i = 0; i < 7; i++){
        index = Math.floor(Math.random() * string.length);
        id += string[index];
    }
    return  id;
}
console.log(userIdGenerator());

// EXERCISE LEVEL 3

// 1
// const userIdGeneratedByUser = () => {
//     const charInputs = prompt('Enter the number of characters:')
//     const numInputs = prompt('Enter the number of ids:');
//     let id = ''
//     for (let i = 0; i < 5; i++) {
//         let indexChar = Math.floor(Math.random() * 5)
//     for (let i = 0; i < 2; i++) {
//         let indexNum = Math.floor(Math.random * 2)
//         id = indexChar + indexNum;

//     }
//   }
//   return id;
// }
// console.log(userIdGeneratedByUser());

// 2
const rgbColorGenerator = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}
console.log(rgbColorGenerator())

// 3 
// const arrayOfHexaColors = () => {
//     let hexaColorArray = [];
//     const string = '0123456789abcdef'
//     let hex = '#'
//     let index;
//     for (let i = 0; i < 6; i++){
//         index = Math.floor(Math.random() * string.length)
//         hex += string[index];
//     }
//     let hexValue = hex;
//     console.log(hexaColorArray.push(hexValue))
// }
// arrayOfHexaColors()

// 10 
const isEmpty = (param) => {
    param == null ? console.log(`It is empty`) :console.log(`Not empty`)
}

isEmpty('Alao')

// 11
const sum = (...args) => {
    let sum = 0;
    for (const ele of args){
        sum += ele;
    }
    return sum;
}
console.log(sum(1,2,3,4));

// 12 
const sumOfArrayItems = (array) => {
    let sum = 0;
    for (const arr of array) {
        sum += arr;
    }
    return sum;
}
console.log(sumOfArrayItems([2,3,4,5]));


// 13
const average = (array) => {
    let average;
    let sum = 0;
    for (const arr of array){
        sum += arr;
    }
    average =  sum / array.length;
    return average
}
console.log(average([1,2,3,4,5]));

// 14
const modifyArray = (array) => {
    let newArray = []
    for (const arr of array) {
        const index = (array.indexOf(arr) == 4);
        // index ? array[index].toUpperCase(): console.log(`Not Found`)
        // newArray.push(arr);
        console.log(index);
    }
    return newArray
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']))