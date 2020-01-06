// Exercise 1
console.log(`This is Exercise 1 answer`);
let firstName = 'Abiodun';
let lastName = 'Alao';
let country = 'Nigeria';
// let age = 23;
let isMarried = 'Nil';
// let year = 1996;


console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
// console.log(typeof age);
console.log(typeof isMarried);
// console.log(typeof year);

10 == '10'
 ? console.log(`The answer is : true`): console.log(`The answer is : false`);

parseInt('9.8') == 10
? console.log(`The answer is : true`): console.log(`The answer is : false`)

console.log(`This is Exercise 2 answer`);

// let base = window.prompt('Enter base :');
// let height = window.prompt('Enter height :');
// let area = 0.5 * base * height;
// console.log(`The area of the triangle is ${area}`);

// let a = window.prompt('Enter side a :');
// let  b = window.prompt('Enter side b :');
// let  c = window.prompt('Enter side c :');
// let perimeter = parseInt(a) + parseInt(b) + parseInt(c);
// console.log(`The perimeter of the triangle is ${perimeter}`);

console.log(`This is Exercise 3 answer`);

let alQuran = true;

alQuran
? console.log(`The source of guidance`): console.log('false');

let shaytan = false;

shaytan
? console.log(`true`): console.log('He will lead you astray');

console.log(`This is Exercise 6 answer`);

firstName.length > 4
? console.log(`Your first name, ${firstName} is longer than family name, ${lastName}`): console.log(`Your first name, ${firstName} is shorter than family name, ${lastName}`);

let age = window.prompt('What year were you born:');
age >= 18
? console.log(`You are ${age}. You are old enough to drive`): console.log(`You are ${age}. You will be allowed after 3 years`);

console.log(`This is Exercise 7 answer`);

const now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
console.log(`${year}-${month}-${date} ${hour}:${minutes}:${seconds}`);