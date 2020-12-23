// // EXERCISE LEVEL
// No 1
let age1 = prompt('Enter your age?');
if (2020 - parseInt(age1) >= 18) {
  console.log(
    `Enter your age: ${2020 - parseInt(age1)}\nYou are old enough to drive`
  );
} else {
  console.log(
    `Enter your age: ${
      2020 - parseInt(age1)
    }\nYou are left with 3 years to drive`
  );
}
// No 2
let myAge = prompt('Enter my age?');
let yourAge = prompt('Enter your age?');
if (parseInt(myAge) < parseInt(yourAge)) {
  console.log(
    `Enter your age: ${yourAge}\nYou are ${
      yourAge - myAge
    } years older than me.`
  );
}
// No 3
let a = 4;
let b = 3;
if (a > b) {
  console.log(`${a} is greater than ${b}`);
}
a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`your condition is not correct`);
// No 4
let numbers = prompt('Enter any number');
if (parseInt(numbers) % 2 == 0) {
  console.log(`Enter a number:  ${numbers}\n${numbers} is an even number.`);
} else {
  console.log(`Enter a number:  ${numbers}\n${numbers} is an odd number.`);
}

// EXERCISE LEVEL 2
let grade = parseInt(prompt('What is your score?'));
if (grade >= 80 && grade <= 100) {
  console.log('A');
} else if (grade >= 70 && grade <= 89) {
  console.log('B');
} else if (grade >= 60 && grade <= 69) {
  console.log('C');
} else if (grade >= 59 && greade <= 50) {
  console.log('D');
} else {
  console.log('F');
}

let monthSeason = prompt('What type of season is in this month');
switch (monthSeason) {
  case 'September':
  case 'October':
  case 'November':
    console.log('The season is Autumn');
    break;
  case 'December':
  case 'January':
  case 'February':
    console.log('Winter');
    break;
  case 'March':
  case 'April':
  case 'May':
    console.log('Spring');
    break;
  case 'July':
  case 'June':
  case 'August':
    console.log('Summer');
    break;
  default:
    console.log('No season for that month');
}

// EXERCISE LEVEL 3
let stringInput = /[a-z]+/gi;
let myInput = prompt(`How many number of days in a month of `);
let answer = stringInput.test(myInput);
switch (stringInput.test(myInput)) {
  case `${myInput}`:
    console.log(`${myInput} has 31 days`);
    break;
  case `${myInput}`:
    console.log(`${myInput} has 28 days`);
    break;
  default:
    console.log(`The remaining number of days in a month is 30 days`);
}
