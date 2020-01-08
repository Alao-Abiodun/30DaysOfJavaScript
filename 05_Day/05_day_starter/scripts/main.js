const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

// Exercise 1
let myArray_1 = [];
// Exercise 2
let numArray = [1,2,3,4,5,6,7,8,9];
// Exercise 3
console.log(numArray.length);
// Exercise 4
let firstItem = numArray[0];
let middleItem = numArray[4];
let lastItem = numArray[8];

let mixedDataTypes = [1, 3.4, 'NodeJS', true, {skills: ['REACT','NodeJS', 'MONGODB', 'POSTGRESQL', 'EXPRESS']}];
console.log(mixedDataTypes.length);

let companies = ['Facebook','Google','Microsoft','Apple', 'IBM','Oracle','Amazon'];
console.log(`The array of the companies: ${companies}`);
console.log(`The number of the companies in the array is: ${companies.length}`);
console.log(`The first company in companies array is: ${companies[0]}`);
console.log(`The middle company in the companies array is: ${companies[3]}`);
console.log(`The last company in the companies array is: ${companies[companies.length -1]}`); 
console.log(companies[2]);
console.log(companies[2].toUpperCase());
console.log(`${companies} are big IT companies`);

console.log(companies.slice(0,3));
let lastIndex = companies.length - 1;
console.log(companies.slice(4,2));
console.log(countries)
alert('Open the browser console whenever you work on JavaScript')
alert('Open the console and check if the countries has been loaded')
