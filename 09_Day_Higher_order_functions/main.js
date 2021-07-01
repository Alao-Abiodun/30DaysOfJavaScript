const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
countries.forEach((country) =>
  console.log(`These are the country: ${country}`)
);

// Exercise No4 solution
names.forEach((name) => console.log(`These are the  name: ${name}`));

// Exercise No5 solution
numbers.forEach((number) => console.log(`These are the numbers: ${number}`));

// Exercise No6 solution
const countryToUpperCase = countries.map((country) => country.toUpperCase());
console.log(countryToUpperCase);

// Exercise No7 solution
const countriesLength = countries.map((country) => country.length);
console.log(countriesLength);

// Exercise No8 solution
const numberToSquare = numbers.map((number) => number * number);
console.log(numberToSquare);

// Exercise No9 solution
const namesToUpperCase = names.map((name) => name.toUpperCase());
console.log(namesToUpperCase);

const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// Exercise No10 solution
const productPrices = products.map((product) => product.price);
console.log(productPrices);

// Exercise No11 solution
const filterCountryNameLand = countries.filter((country) =>
  country.includes("land")
);
console.log(filterCountryNameLand);

//Exercise No12
const countryWithSixCharacters = countries.filter(
  (country) => country.length === 6
);
console.log(countryWithSixCharacters);

// Exercise No13
const countriesWithSixAndMoreLetters = countries.filter(
  (country) => country.length >= 6
);
console.log(countriesWithSixAndMoreLetters);

// Exercise No14
const countryNameStartWithE = countries.filter((country) =>
  country.startsWith("E")
);
console.log(countryNameStartWithE);

// Exercise No15
const pricesWithValue = products.filter(
  (product) => product.price >= 3 && product.price <= 10
);
console.table(pricesWithValue);

// Exercise No16
const sumOfProducts = products.reduce((accum, curr) => accum + curr.price);
console.log(sumOfProducts);

// Exercise No17
const sumOfNumbers = numbers.reduce((accum, curr) => accum + curr);
console.log(sumOfNumbers);

//Exercise 19
// some checks if parts of the element look similar to one another in typeOf.
// every check if all of the elements look identical to one another in typeOf.

//Exercise 20
const namesGreaterThanSeven = names.some((name) => name.length > 7);
console.log(namesGreaterThanSeven);

// Exercise 21
const countryWithWordLand = countries.every((country) =>
  country.includes("land")
);
console.log(countryWithWordLand);

// Exercise 22
// find function works by searching for first element that satisfies a condition
// findIndex function works by searching for the first element that satisfied the condition and returning the index of the element.

// Exercise 23
const firstCountryWithOnlySixLetters = countries.find(
  (country) => country.length == 6
);
console.log(firstCountryWithOnlySixLetters);

// Exercise 24
const firstCountryWithOnlySixLettersIndex = countries.findIndex(
  (country) => country.length == 6
);
console.log(firstCountryWithOnlySixLettersIndex);

// Exercise 25
const IndexOfNorway = countries.findIndex((country) =>
  country.includes("Norway")
);
console.log(IndexOfNorway);

// Exercise 26
const IndexOfRussia = countries.findIndex((country) =>
  country.includes("Russia")
);
console.log(IndexOfRussia);

// EXERCISE LEVEL 2
// 1
const isProductWithValue = (product) =>
  product.price >= 3 && product.price <= 10;
const isValue = (product) => product.price;
const sum = (sum, product) => sum + product;
let sumPrice = products.filter(isProductWithValue).map(isValue).reduce(sum);
console.log(sumPrice);
// 2
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
const sumOfPriceOfProducts = products.reduce((accum, product) => {
  if (product.price) {
    return accum += product.price;
  }
}, 0);
// 4
const lengthOfletterUsedAsInitial = (arr) => {
  const mostFirstLetterUsed = [];
  const counts = [];
  let sortedFirstLetterByLength;
  for (const { name } of arr) {
    mostFirstLetterUsed.push(name[0]);
  }
  const uniquemostFirstLetterUsed = new Set(mostFirstLetterUsed);
  for (const firstLetter of uniquemostFirstLetterUsed) {
    const filterFirstLetter = mostFirstLetterUsed.filter(l => l === firstLetter)
    counts.push({ letter: firstLetter, count: filterFirstLetter.length });
    sortedFirstLetterByLength = counts.sort((b, a) => a.count - b.count);
  }
  return sortedFirstLetterByLength;
}
// 5
const getFirstTenCountries = (arr) => {
  return arr.slice(0, 10);
}
console.log(getFirstTenCountries(countries));
// 6
const getLastTenCountries = (arr) => {
  return arr.splice(240, 10);
}
console.log(getLastTenCountries(countries));
// 7
const firstLetterThatIsUsedMost = (arr) => {
  const mostFirstLetterUsed = [];
  const counts = [];
  let sortedFirstLetterByLength;
  for (const { name } of arr) {
    mostFirstLetterUsed.push(name[0]);
  }
  const uniquemostFirstLetterUsed = new Set(mostFirstLetterUsed);
  for (const firstLetter of uniquemostFirstLetterUsed) {
    const filterFirstLetter = mostFirstLetterUsed.filter(l => l === firstLetter)
    counts.push({ letter: firstLetter, count: filterFirstLetter.length });
    sortedFirstLetterByLength = counts.sort((b, a) => a.count - b.count);
  }
  return sortedFirstLetterByLength.slice(0, 1);
}
console.log(firstLetterThatIsUsedMost(countries));

// EXERCISE LEVEL 3
// 3
const mostPopulatedCountries = (arr, n) => {
  const counts = [];
  let sortedByPopulation;
  for (const { name, population } of countries) {
    counts.push({ country: name, population: population });
  }
  sortedByPopulation = counts.sort((b, a) => a.population - b.population);
  const tenPopulatedCountries = sortedByPopulation.slice(0, n);
  return tenPopulatedCountries;
}
console.log(mostPopulatedCountries(countries, 10));
console.log(mostPopulatedCountries(countries, 3));
