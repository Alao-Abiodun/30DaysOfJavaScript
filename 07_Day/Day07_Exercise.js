// Exercise No1 solution
// function fullName() {
//     console.log(`Alao Abiodun AbdulRahman`);
// }
// fullName();

// Exercise No2 solution
function fullName(firstName, lastName) {
    let fullName = firstName + lastName;
    return fullName;
}
console.log(fullName('Abiodun', ' Alao'));

// Exercise No3 solution
function addNumbers(a, b){
    let sum = a + b;
    return sum;
}
console.log(addNumbers(3,5));

// Exercise No solution
function PerimeterOfRectangle(lengthP, widthP) {
    let perimeter = 2 * (lengthP + widthP);
    return perimeter;
}
console.log(`The perimeter of the rectangle: `, PerimeterOfRectangle(3,2));

function VolumeOfRectPrism(lengthV, widthV, heightV){
    let volume = lengthV * widthV * heightV;
    return volume;
}
console.log(`The volume of the RectPrism: `,VolumeOfRectPrism(3,4,5));

function AreaOfCircle(rA){
    let areaOfCircle = Math.PI * rA * rA;
    return areaOfCircle;
}
console.log(`The area of the circle: `, AreaOfCircle(3));

function CircumferenceOfCircle(rC){
    let circumferenceOfCircle = 2 * Math.PI * rC;
    return circumferenceOfCircle;
}
console.log(`The circumference of the circle is :`, CircumferenceOfCircle(2));

function DensityOfSubstance(massD, volumeD){
    let density = massD / volumeD;
    return density;
}
console.log(`The amount of density of the substance is: `, DensityOfSubstance(3,4));

function SpeedOfAnObject(distanceCovered, totalTimetaken){
    let speed = distanceCovered / totalTimetaken;
    return speed;
}
console.log(`The speed of a moving object with respect to the distance and time-taken is: `, SpeedOfAnObject(3,4));


function WeightOfASubstance(massW, gravityG = 9.81){
    let weight = massW * gravityG;
    return weight;
}
console.log(`The weight of the substance is: `, WeightOfASubstance(10))

function CelciusToFahrenheitConversion(celciusDegree){
    let FahrenheitDegree = (celciusDegree * 9 / 5) + 32;
    return FahrenheitDegree;
}
console.log(`The conversion of celcius to fahrenheit is: `, CelciusToFahrenheitConversion(23));

function BodyMassIndex(weightBmi, heightBmi){
    let bmi = weightBmi / (heightBmi * heightBmi);
    if (bmi <= 18.5){
        return `Underwieght`;
    } else if(bmi >= 18.5 && bmi <=24.9){
        return `Normal weight`;
    } else if (bmi >=25 && bmi <=29.9){
        return `Overweight`;
    } else if (bmi > 30){
        return `Obese`;
    } else {
        return `The same groups apply to both men and women`;
    }
}
console.log(`The BodyMassIndex of the weight of this group:`, BodyMassIndex(2000,23));

function checkSeason(month) {
    switch(month){
        case 'January':
        case 'February':
        case 'March':
            return `The season is Autumn`;
        case 'April':
        case 'June':
            return `The season is Winter`;
        case 'July':
        case 'August':
            return `The season is Spring`;
        case 'September':
        case 'December':
            return `The season is summer`;
        default:
            return `The season is not included`;
    }
}
console.log(`The season for the month is :`, checkSeason('March'));

function findMax(a, b, c){
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c){
        return b;
    } else if (c > a && c > b){
        return c;
    }
}
console.log(`The maximum (highest) number is:`,findMax(0, -10, -2));

function solveLinEquation(aV, bV, cV) {
    let x_1 = (-bV + (Math.sqrt(bV**2 - 4 * aV * cV)))/ (2 * aV);
    let x_2 = (-bV - (Math.sqrt(bV**2 - 4 * aV * cV)))/ (2 * aV);
    return  `{${x_1}, ${x_2}}`;
}
console.log(solveLinEquation(1, 7, 12));

function printArray(arr){
    return arr;
}
const numArr = [1,2,3,4,5];
console.log(printArray(numArr));

function showDateTime(){
    const dateTime = new Date();
    const todaysDate = dateTime.getDate();
    const todaysMonth = dateTime.getMonth() + 1;
    const todaysYear = dateTime.getFullYear();
    const hour = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    return `0${todaysDate}/0${todaysMonth}/${todaysYear} ${hour}:${minutes}`
}
console.log(showDateTime());

function  swapValues(x, y) {
    let temp = x;
    x = y;
    y = temp;
    return `${x, y}`;
}
console.log(swapValues(3,4));

// Exercise 46 solution
// const modifyArray = (arrValue) => {
//     const newArr = [];
//     for (let i=0; i < arrValue.length; i++){
//         if (arrValue.length < 5) {
//             return 'item not found'
//         } else {
//             let secondToTheLastArray = arrValue.length - 2;
//             return secondToTheLastArray.toUpperCase();
//         }
//     }
// }
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));

// Exercise 50 solution
// const isValidVariable = (variableValue) => {
//     for (const val of variableValue) {
//         if (val.includes(variableValue)){
//             return 'variable is not valid';
//         }else {
//             return 'variable is valid'
//         }
//     }
// }

// const specialWords = ['let','const'];
// console.log(isValidVariable(specialWords));


// Exercise  No51 solution
// const generateSevenRandomNumbers = () => {
//         const newArr = [];
//         for (let i = 0; i <=7; i++){
//             newArr.push(Math.floor(Math.random() * 10));
//         }
//         return newArr;
// }
// console.log(generateSevenRandomNumbers());


// Exercise No52 solution
// const reverseCountries = arr => {
//       const newArr = [];
//       for (const country of arr) {
//           newArr.push(country);
//       }
//       return newArr.reverse();
//   }

//   const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]

// console.log(reverseCountries(countries));