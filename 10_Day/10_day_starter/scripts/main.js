//  EXERCISE 1
//  No 1
const emptySet = new Set();

// No 2
const numSet = new Set();
for (i = 0; i <= 10; i++) {
    numSet.add(i);
}
console.log(numSet)

// No 3
const programmingLang = ["JavaScript", "NodeJS", "React", "Python"];
const newLang = new Set(programmingLang);
newLang.delete('Python');
console.log(newLang);

// No 4
const phoneType = ['Iphone', 'Samsung', 'Techno', 'Nokia'];
const newPhone = new Set(phoneType)
newPhone.clear();
console.log(newPhone);

// No 5
const favFootballer = ["Ronaldo", "Messi", 'Hazard', "Mbaape", "Salah"];
const Footballer = new Set();
for (const football of favFootballer) {
    Footballer.add(football)
}
console.log(Footballer);

//  No 6
const Countries = ['Finland', 'Sweden', 'Norway'];
const newCountries = new Map();
for (const country of Countries) {
    newCountries.set(country, country.length)
}
console.log(newCountries);

// EXERCISE 2
//  No 1
const a =[4, 5, 8, 9];
const b = [3, 4, 5, 7];
const c = [...a, ...b];
let A = new Set(a);
let B = new Set(b);
let UnionC = new Set(c);
console.log(UnionC)

//  No 2
let intersectionC = a.filter(num => B.has(num));
console.log(intersectionC)

// No 3
let differenceC = a.filter(num => !B.has(num))
console.log(differenceC)

//  EXERCISE 3
// No 3




