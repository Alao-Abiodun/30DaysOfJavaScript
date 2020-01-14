// EXERCISE LEVEL:1

// No 1
const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola'
];
console.table(countries);   

// No 3
console.group('countries');
console.log(countries);
console.groupEnd();

// EXERCISE LEVEL:2

// No 1
console.log(10 > 2 * 10, 'No it is not greater than the 2 * 10');
// No 2
console.warn('You are not using the javascript best practices');
// No 3
console.error('Unexpected token in code block!!!');

// EXERCISE LEVEL:3

// No 1
console.time(`While`);
let i = 10;
while(i <= 10){
    console.log(i);
    i++;
}
console.timeEnd('While');


console.time('For loop');
for (let i = 0; i <=10; i++){
    console.log(i);
}
console.timeEnd('For loop');


console.time('for of loop');
const names = ['fatimah', 'adebukunmi', 'aduke'];
for (const name of names) {
    console.log(name);
}
console.timeEnd('for of loop');

console.time('forEach');
countries.forEach(country => country);
console.timeEnd('forEach');