// // Exercise 1
// let age = prompt("Enter your age:");
// if (age >= 18) {
//     console.log(`You are old enough to drive`);
// }else {
//     console.log(`You are left with 3 years to drive`);
// }

// // Exercise 2
// let myAge = prompt('What is my age?');
// let yourAge = prompt('What is your age?');
// if (myAge > yourAge) {
//     console.log(`MyAge, you are ${myAge - yourAge} years older than me`)
// } else {
//     console.log(`YourAge, you are ${yourAge - myAge} years older than me`);
// }

// // Exercise 3
// let a = 4;
// let b = 3;
// if (a > b){
//     console.log('a is greater than b') ;
// } else {
//     console.log('a is greater than b');
// }

// // (a > b) 
// // ? return 'a is greater than b' : return 'a is less than b';

// let score = prompt('What is your grade')
// let gradeScore = parseInt(score);
// if (gradeScore >= 80 && gradeScore <=100) {
//     console.log(`You have grade A`);
// } else if (gradeScore >=70 && gradeScore <=89){
//     console.log(`You have grade B`);
// } else if (gradeScore >=60 && gradeScore <=69){
//     console.log(`You have grade C`);
// } else if (gradeScore >=50 && gradeScore <=59) {
//     console.log(`You have grade D`)
// } else if (gradeScore >=0 && gradeScore <=49) {
//     console.log(`You have grade F`)
// } else {
//     console.log(`It's seems you did partake in the examination!`);
// }

// let seasonMonth = prompt('What is the type of season in this month?');
// switch (seasonMonth) {
//     case 'September':
//         console.log('Antumn');
//         break;
//     case 'October':
//         console.log('Antumn');
//         break;
//     case 'November':
//         console.log('Antumn');
//         break;
//     case 'December':
//         console.log('Winter');
//         break;
//     case 'January':
//         console.log('Winter');
//         break;
//     case 'February':
//         console.log('Winter');
//         break;
//     case 'March':
//         console.log('Spring');
//         break;
//     case 'April':
//         console.log('Spring');
//         break;
//     case 'May':
//         console.log('Spring');
//         break;
//     case 'June':
//         console.log('Summer');
//         break;
//     case 'July':
//         console.log('Summer');
//         break;
//     case 'August':
//         console.log('Summer');
//         break;
//     default:
//         console.log('No specified season for this month');
// }

let userInput = prompt('Enter your number');
let numValue = parseInt(userInput);
if (numValue % 2 == 0) {
    console.log(`${numValue} is an even number`)
} else {
    console.log(`${numValue} is an odd number`);
}

