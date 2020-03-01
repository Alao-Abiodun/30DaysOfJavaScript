
// EXERCISE LEVEL: 1

// 1
let myArray_1 = []
//  2
let numArray = [1,2,3,4,5,6,7,8,9]
//  3
console.log(numArray.length)
// 4
let firstItem = numArray[0]
let middleItem = numArray[4]
let lastItem = numArray[8]
// 5
let mixedDataTypes = [1, 3.4, 'NodeJS', true, {skills: ['REACT','NodeJS', 'MONGODB', 'POSTGRESQL', 'EXPRESS']}];
console.log(mixedDataTypes.length);
// 6
let companies = ['Facebook','Google','Microsoft','Apple', 'IBM','Oracle','Amazon']
// 7
console.log(`The array of the companies: ${companies}`);
// 8
console.log(`The number of the companies in the array is: ${companies.length}`);
// 9
console.log(`The first company in companies array is: ${companies[0]}`);
console.log(`The middle company in the companies array is: ${companies[3]}`);
console.log(`The last company in the companies array is: ${companies[companies.length -1]}`);
// 10 
const allCompanies = companies.forEach(company => {
  console.log(company)
}) 
// 11
const allCompaniesToUppercase = companies.forEach(company => {
  console.log(company.toUpperCase())
}) 
// 12
const stringCompanies = companies.toString();
console.log(`${stringCompanies} are big IT companies`);
// 13
const companyExist = companies.indexOf('Airbnb')
companyExist !== -1 ? console.log('Airbnb') : console.log('company does not exist');
// 14
// const filteredCompanies = companies.forEach(company => {
  
// })
// 15
const sortedCompanies = companies.sort();
console.log(sortedCompanies);
// 16
console.log(companies.reverse())
// 17
console.log(`The first 3 companies are :${companies.slice(0, 2)}`);
let lastIndex = companies.length - 1;
// 18
console.log(`The last 3 companies are : ${companies.slice(4,1)}`);
// 19
console.log(`The middle IT companies ${companies.slice(3, 2)}`);
// 20 
console.log(`Removing the first IT companies from the array: ${companies.splice(0,1)}`);
// 21 
console.log(`Removing the middle IT companies of the array ${companies.splice(2,1)}`);
// 22
console.log(`Removing the last IT companies from the array ${companies.splice(5,1)}`);
// 23
console.log(`Removing all the IT companies in the array ${companies.splice(0,6)}`);


// EXERCISE: LEVEL 2

// 1
console.log(countries);
console.log(webTechs);

// 2
let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let arrayText = text.split(' ')
console.log(arrayText)
console.log(arrayText.length)

// 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.pop('Honey')
shoppingCart.unshift('Meat')
shoppingCart.push('sugar')
shoppingCart[3] = 'Green Tea'
console.log(shoppingCart)

// 4
const countryIndex = countries.indexOf('Ethiopia');
 countryIndex != -1 ? console.log('ETHIOPIA') : countries.push('Ethiopia')

 // 5
const webTechIndex = webTechs.indexOf('Sass')
  webTechIndex != -1 ? console.log('Sass is a CSS preprocess') : webTechs.push('Sass')
  console.log(webTechs);

// 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

// EXERCISE: LEVEL 3

// 1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const sortAges = ages.sort()
console.log(sortAges)
// console.log(`The largest age is: ${largestAge}`)


const middleOne = ages[4]
const middleTwo = ages[5]
const median = (middleOne + middleTwo) / 2
console.log(median);


const average = () => {
  let sum = 0
  ages.forEach(age => {
    sum += age;
  })
  console.log(sum);
}
average();

// 2
const userIdGeneratedByUser = () => {
    let numInput =  prompt('Please enter the number of characters');
    let idInput = prompt('Please enter the number of ids: ')
}
const middleCountry = countries[5];
console.log(middleCountry)


// 3
const evenOdd = countries.length % 2 !== 1 
 evenOdd ? countries.slice(0, 6) : countries.push('Nigerian')
 console.log(countries)



