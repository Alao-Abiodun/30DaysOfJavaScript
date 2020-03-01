// EXERCISE LEVEL 1

// 1
// forEach: Is a functional programming which iterates an through an array
// and take element as it parameter and it is used only in array

// map: Is a functional programming which iterates through an array
// and modify the array

// filter: Is a functional programming which removes the item that 
// follows the filtering condition

// reduce: Is a function programming which has a callback function 
// and the callback function takes an accumulator and current value
// as a parameter and return a single value.

// 2
const arrays = []
const numArr = arr => {
    let sum = 0;
    const callback = function(){
        sum += arr
    }
    arrays.forEach(callback)
    return sum;
}

const modifiedArray = arr => {
    const callback = function(){
        return arr.toUpperCase()
    }
    arrays.map(callback);
}

const filteredArray = arr => {
    const callback = function(){
        return arr.length > 5
    }
    arrays.filter(callback)
}

// const reduceArray = (acc) => {
//     let acc = 0;
//     const callback = function(value){
//         acc += value;
//     }
//     arrays.reduce(callback(v))
//     return acc;
// }

//3 
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Estonia']
countries.forEach(country => {
    console.log(`forEach function: ${country}`)
})

// 4
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
names.forEach(name => {
    console.log(`forEach function: ${name}`)
})

// 5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.forEach(number => {
    console.log(`forEach function: ${number}`)
})

// 6
const uppercaseCountry = countries.map(country => {
    return country.toUpperCase();
})
console.log(`map function: ${uppercaseCountry}`)

// 7
const countryLength = countries.map(country => {
    return country.length;
})
console.log(`map function: ${countryLength}`)

// 8
const squareNumber = numbers.map(number => {
    return number * number;
})
console.log(`map function: ${squareNumber}`)

// 9
const namesToUpperCase = names.map(name => {
    return name.toUpperCase();
})
console.log(`map function: ${namesToUpperCase}`)

// 10
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' }
  ]
const productPrice = products.map(product => {
    return product.price
})
console.log(`map function: ${productPrice}`)

// 11
const filteredCountryA = countries.filter(country => {
    return country.includes('land')
})
console.log(`filter function with character land: ${filteredCountryA}`)

// 12
const filteredCountryB = countries.filter(country => {
    return country.length === 6
})
console.log(`filter function with country with 6 character: ${filteredCountryB}`)

// 13
const filteredCountryC = countries.filter(country => {
    return country.length >= 6
})
console.log(`filter function with country with 6 or more characters: ${filteredCountryC}`)

// 14
const filteredCountryD = countries.filter(country => {
    return country.startsWith('E');
})
console.log(`filter function with country that start with letter E: ${filteredCountryD}`)

// 15
const filteredCountryE = products.filter(product => {
    if (product.price != ''){
        console.log(product.price)
    }
})
filteredCountryE
// console.log(`filter function with product price with values: ${filteredCountryE}`)

// 16
const getStringLists = (array) => {
    return array
}

console.log(getStringLists(countries));

// 17
const sumOfNumbers = numbers.reduce((acc, curr) => acc + curr)
console.log(`The sum of the number are: ${sumOfNumbers}`);

// 18
const concatenateCountries = countries.reduce((acc, curr) => {
    const result = `${curr},${acc}`
    return result;
})
console.log(concatenateCountries);

// 19
// some is a functional programming which check if some of
// of the element have similarities in the array
//  every is a functional programming which check if all the 
// element in the array have similarities in one aspect

// 20
const nameGreaterThanSeven = names.some(name => name.length > 7)
console.log(`using the some function: ${nameGreaterThanSeven}`)

// 21
const countryWithCharacterLand = countries.every(country => country.includes('land'))
console.log(`using the some function: ${countryWithCharacterLand}`)

// 22
// find is a functional programming which return
// the first element which satisfies the condition
// findIndex is a functional programming which return 
// the position of the first element which satisfies the condition

// 23
const findCountryWithSixLetters = countries.find(country => country.length === 6)
console.log(`using the find function: ${findCountryWithSixLetters}`);

// 24
const findPositionOfCountryWithSixLetters = countries.findIndex(country => country.length === 6)
console.log(`using the findIndex function: ${findPositionOfCountryWithSixLetters}`)

// 25
const findCountryA = countries.findIndex(country => country.indexOf('Norway'))
console.log(findCountryA)

// 26
const findCountry = countries.findIndex(country => country.indexOf('Russia'))
console.log(findCountry)

// EXERCISE LEVEL 2

// 1
// const totalPriceOfProduct = products.map(product => {
//     return product.price
// }).filter(product => product.price === '').reduce((acc , curr) => acc + curr, 0);
// console.log(`The total price of the product is: ${totalPriceOfProduct} using chain of two or more iterator`)


// 2
const priceTotal = products.reduce((total, product) => {
    return total += product.price
}, 0)
console.log(priceTotal)

