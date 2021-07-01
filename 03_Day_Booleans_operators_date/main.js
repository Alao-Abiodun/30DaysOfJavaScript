//  EXERCISE LEVEL 1
// No 1
let firstName = 'Abiodun';
let lastName = 'Alao';
let country = 'Nigerian';
let city = 'Lagos';
let isMarried = 'No';
let year = 2020;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof isMarried);
console.log(typeof year);

// No 2
console.log(typeof '10' === 10);
// No 3
console.log(parseInt('9.8') === 10);
// No 4 i
let alQuran = true;
alQuran
  ? console.log('The book of Allah')
  : console.log('Not the book of Allah');
let programmingIsEasy = 1;
programmingIsEasy
  ? console.log('Programming is easy')
  : console.log('Programming is hard');
let hadith = -1;
hadith
  ? console.log('The hadith is the practice of the prophet')
  : console.log('Not the practice of the prophet');
// No 4 ii
isSatan = false;
isSatan
  ? console.log('Is a slave of Allah')
  : console.log('Is an enemy of Allah');
isZina = 0;
isZina
  ? console.log('Is good act practice it')
  : console.log("Is not a good act don't practice it at all");
isStealing = '';
isStealing ? console.log('Is a good act') : console.log('Is not a good act');
//  No 5
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
// No 6
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log(!('dragon' || 'python').includes('on'));
// No 7
const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
// EXERCISE: LEVEL 2
// No 1
let base = prompt('Enter base:');
let height = prompt('Enter height:');
let Area = 0.5 * Number(base) * Number(height);
console.log(
  `Enter base: ${base}\nEnter height: ${height}\nThe area of the triangle is ${Area}`
);
// No 2
let a = prompt('Side a:');
let b = prompt('Side b');
let c = prompt('Side c');
let perimeter = Number(a) + Number(b) + Number(c);
console.log(
  `Enter side a: ${a}\nEnter side b: ${b}\nEnter side c: ${c}\nThe perimeter of the triangle is ${perimeter}`
);
// No 3
let length = prompt('Enter length');
let width = prompt('Enter width');
let area1 = Number(length) * Number(width);
let perimeter1 = 2 * (Number(length) + Number(width));
console.log(area1);
console.log(perimeter1);
// // No 4
let r = prompt('Enter radius');
const pi = 3.14;
let area2 = pi * Number(r) * Number(r);
let c1 = 2 * pi * Number(r);
console.log(area2);
console.log(c);
// No 9
let hours = prompt('Enter hours:');
let ratePerHours = prompt('Enter');
let weeklyLearning = Number(hours) * Number(ratePerHours);
console.log(
  `Enter hours: ${hours}\nEnter rate per hour: ${ratePerHours}\nYour weekly earning is ${weeklyLearning}`
);
// No 10
let name = prompt('Enter your name?');
name.length > 7
  ? console.log('your name is long')
  : console.log('your name is short');
console.log(name.length);
// No 11
let familyName = 'Alao';
firstName.length > familyName.length
  ? console.log(
      `Your first name, ${firstName} is longer than your family name, ${familyName}`
    )
  : console.log('family name is longer than your first name.');
// No 12
let myAge = 250;
let yourAge = 25;
myAge > yourAge
  ? console.log(`I am ${myAge - yourAge} older than you`)
  : console.log(`It\'s ok`);
// No 13
let yearBorn = prompt('Enter birth year:');
if (2020 - yearBorn >= 18) {
  console.log(
    `Enter birth year: ${yearBorn}\nYou are ${
      2020 - Number(yearBorn)
    }. You are old enough to drive`
  );
} else {
  console.log(
    `Enter your birth: ${yearBorn}\nYou are ${
      2020 - yearBorn
    }. You will be allowed to drive after ${2023 - 2020} years`
  );
}
// No 14
let userNumberOfYears = prompt('Enter number of years');
console.log(
  `Enter number of yours you live: ${userNumberOfYears}\nYou lived ${
    new Date().getSeconds * userNumberOfYears
  }`
);
// No 15
const newDate = new Date();
const YY = newDate.getFullYear();
let MM = newDate.getMonth() + 1;
let DD = newDate.getDay();
let HH = newDate.getHours();
let mm = newDate.getMinutes();
console.log(`${YY}-0${MM}-${DD} ${HH}:${mm}`);
console.log(`${DD}-0${MM}-${YY} ${HH}:${mm}`);
console.log(`${DD}/0${MM}/${YY} ${HH}:${mm}`);
// No 16
const myDate = new Date();
let YYa = myDate.getFullYear();
let MMa = myDate.getMonth() + 1;
let DDa = myDate.getDay();
let HHa = myDate.getHours();
let mma = myDate.getMinutes();
console.log(`${YYa}-0${MMa}-0${DDa} ${HHa}:${mma}`);
