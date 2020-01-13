const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
  const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' }
]

// Exercise No1 solution
// forEach is a functional programming i.e it is a 
// a function which takes function callback function
// as a parameter for a function.It used to iterate 
// an array and is only used for an array only.

// map is a function which takes a another function 
// as a parameter which is said to be a callback function
// and it takes element of array and modify the array.

// filter is a functional programming used to iterate 
// through the array and filter the element in the array
// which satifies the condition given

// reduce is a functional programming which takes a callback 
// as a parameter, also known as functions and it iterate 
// through an array which takes accumulator (initializer)
// and current element.


// Exercise No2 solution
// call function is the callback function which when get called 
// by the functional programmming in-built method execute the 
// function 
// 

// Exercise No3 solution
countries.forEach(country => console.log(`These are the country: ${country}`));

// Exercise No4 solution
names.forEach(name => console.log(`These are the  name: ${name}`));

// Exercise No5 solution
numbers.forEach(number => console.log(`These are the numbers: ${number}`));

// Exercise No6 solution
const countryToUpperCase = countries.map((country) => country.toUpperCase());
console.log(countryToUpperCase);

// Exercise No7 solution
const countriesLength = countries.map((country) => country.length);
console.log(countriesLength);

// Exercise No8 solution
const numberToSquare = numbers.map(number => number * number);
console.log(numberToSquare);

// Exercise No9 solution
const namesToUpperCase = names.map(name => name.toUpperCase());
console.log(namesToUpperCase);

// Exercise No10 solution
const productPrices = products.map(product => product.price);
console.log(productPrices);

// Exercise No11 solution
const filterCountryNameLand = countries.filter(country => country.includes('land'));
console.log(filterCountryNameLand);

const countryWithSixCharacters = countries.filter(country => country.length === 6);
console.log(countryWithSixCharacters);

const countriesWithSixAndMoreLetters = countries.filter(country => country.length >=6);
console.log(countriesWithSixAndMoreLetters);

const countryNameStartWithE = countries.filter(country => country.startsWith('E'));
console.log(countryNameStartWithE);

const productPriceWithValues = products.filter(product => product.price);
console.log(productPriceWithValues);

const sumOfProducts = products.reduce((product,accum, curr) => accum + curr + product.price);
console.log(sumOfProducts);

const sumOfNumbers = numbers.reduce((accum, curr)=> accum + curr);
console.log(sumOfNumbers);





