// EXERCISE 1
// 1
const newSet = new Set();
// 2
const setOfZeroToTen = new Set();
for (let i = 0; i <= 10; i++) {
    setOfZeroToTen.add(i);
}
console.log(setOfZeroToTen);

// 3
setOfZeroToTen.delete(6);

// 4
setOfZeroToTen.clear();

// 5
const accomplishedGreatnesss = ['Work-hard', 'Pray', 'Consistency', 'Help Others', 'Behave Well in Society'];
const setOfString = new Set();
for (const s of accomplishedGreatnesss) {
    setOfString.add(s);
}
console.log(setOfString);

// 6
const countries = ['Finland', 'Sweden', 'Norway'];
const mapOfCountries = new Map();
for (const [country, capital = lagos] of countries) {
    mapOfCountries.set(country, capital);
}
console.log(mapOfCountries);

// EXERCISE 2

// 1
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const c = [...b, ...a];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);
console.log(C);

// 2
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

let A = new Set(a);
let B = new Set(b);

let c = a.filter(num => B.has(num));
let C = new Set(c);

console.log(C);

// 3
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

let A = new Set(a);
let B = new Set(b);

let c = a.filter(num => !B.has(num));
let C = new Set(c);

console.log(C);


// 1
// const countryLanguage = countries.map(country => country.languages);
// const [[...a], [...b], [...c], [...d], [...e]] = countryLanguage;
// const setOfLanguage = [...a, ...b, ...c, ...d, ...e];
// const uniqueLanguage = new Set(setOfLanguage);
// console.log(setOfLanguage);
// console.log(uniqueLanguage);
// console.log(uniqueLanguage.size);
// console.log(...a, ...b, ...c, ...d, ...e);



