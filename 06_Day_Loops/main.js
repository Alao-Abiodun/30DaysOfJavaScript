// //  EXERCISE LEVEL 1
// // No 1
// // a
// // const numOfOnetoTen = [];
// // for (let i= 0; i <= 10; i++) {
// //     console.log('using for Loop:' + numOfOnetoTen.push(i));
// // }
// // // b
// // let myNum = 1;
// // while(myNum <= 10) {
// //     console.log('using the while loop:' + myNum)
// //     myNum++
// // }
// // // c
// // let num = 1
// // do {
// //     console.log('using the do while loop:' + num)
// //     num++
// // }while(num <= 10);

// // No 2
// // for (let i= 10; i >= 0; i--) {
// //    console.log('using the for loop: ' + i)
// // }
// // // b
// // let myNum = 10;
// // while(myNum >= 0) {
// //     console.log('using the while loop:' + myNum)
// //     myNum--
// // }
// // // c
// // let num = 10
// // do {
// //     console.log('using the do while loop:' + num)
// //     num--
// // }while(num >= 0);

// // No 3
// // const n = prompt('Enter your  number:')
// // for (let i =0; i <= n; i++) {
// //     console.log(`using for loop - 0 to n: ${i}`);
// // }

// // No 5
// // for (let i = 0; i <= 10; i++) {
// //     console.log(`${i} * ${i} = ${i * i}`)
// // }

// // No 6
// // for (let i =0; i <= 10; i++) {
// //     console.log(`${i} ${i * i} ${i * i * i}`)
// // }

// // No 7
// // for (let i = 0; i <= 100; i++) {
// //     if (i % 2 == 0) {
// //         console.log(`Print only the even numbers: ${i}`)
// //     }
// // }

// // No 8
// // for (let i = 0; i <= 100; i++) {
// //     if (!(i % 2) == 0) {
// //         console.log(`Print only the odd numbers: ${i}`)
// //     }
// // }

// // No 9
// // for (let i = 0; i <= 100; i++) {
// //     if ((i % 1) == 0 && (i % 2) == 0) {
// //         console.log(`Print only the even numbers: ${i}`)
// //     }
// // }

// // No 10
// // let sum = 0
// // for (let i = 0; i <= 100; i++) {
// //     sum += i;
// // }
// // console.log(sum)

// // No 11
// // var sumOfEven = 0
// // for (let i = 0;  i >= 100; i++) {
// //     if (i % 2 == 0) {
// //         sumOfEven += i
// //     }
// //     console.log(sumOfEven)
// // }

// // // No 12
// let sumEven = 0
// let sumOdd = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 1) {
//     sumOdd += i
//   } else {
//     sumEven += i;
//   }
// }
// console.log([sumEven, sumOdd]);

// // EXERCISE LEVEL 2
// // No 2
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]

// // No 4
// // let newArray = []
// // for (const arr of countries) {
// //     newArray.push(arr.toUpperCase())
// // }
// // console.log(newArray)

// // // No 5
// // let countriesLength = []
// // for (let arr of countries) {
// //     countriesLength.push(arr.length)
// // }
// // console.log(countriesLength)

// // No  6
// // let countryDesc = [];
// // for (let arr of countries) {
// //     countryDesc.push([arr, arr.toUpperCase(), arr.length])
// // }
// // console.log(countryDesc)

// // let newCountries = [];
// // for (let arr of countries) {
// //     if (arr.includes('land')) {

// //         newCountries.push(arr)
// //     }
// // }
// // console.log(newCountries)

// No 7
// const myCountries = [];
// for (const country of countries) {
//     if (country.includes('land')) {
//         myCountries.push(country);
//     }
// }
// console.log(myCountries)

// // No 8
// let arrAI = []
// for (let arr of countries) {
//     if (arr.endsWith('ia')) {
//         arrAI.push(arr)
//     }
// }
// console.log(arrAI)

// // No 9
// let arrNum = []
// for (let arr of countries) {
//     if (arr.length >= 8) {
//         arrNum.push(arr)
//     }
// }
// console.log(arrNum)

// // No 10
// let newCountries = []
// for (let arr of countries) {
//     if (arr.length === 5) {
//             newCountries.push(arr)
//     }
// }
// console.log(newCountries)

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]

// //   No 11
// let newTech = []
// for (let tech of webTechs) {
//     if (tech.length >=10) {
//             newTech.push(tech)
//     }
// }
// console.log(newTech)

// // No 12
// let techs = []
// for (let tech of webTechs) {
//     techs.push([tech, tech.length])
// }
// console.log(techs)

// // No 13
// const mernStack = ['MongoDB', 'Express', 'React', 'Node']
// let stackAcronym = [];
// for (let mern of mernStack) {
//     stackAcronym.push(mern[0])
// }
// console.log(stackAcronym.join(''))

// // No 14
// // let fullStack = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
// // for (let  i = 0; i <= fullStack.length; i++){
// //     console.log(fullStack[i])
// // }

// // No 15
// let fruits = ['banana', 'orange', 'mango', 'lemon']
// let newFruits = []
// for (let i = fruits.length - 1; i <= 0; i--) {
//     console.log(fruits[i])
// }

// // No 16
// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
//   for (let myStack of fullStack) {
//       console.log(myStack)
//   }

// // EXERCISE LEVEL 3
// // No 1
// let copiedCountry = []
// for (let i = 0; i< countries.length; i++){
//     copiedCountry.push(countries[i])
// }
// console.log(copiedCountry)

// //  No 2
// // const sortedCountries = []
// // for (let country of countries) {
// //     sortedCountries.push(country.sort())
// // }
// // console.log(sortedCountries)

// // No 4
// for (let country of countries) {
//     if (country.includes('land')) {
//         console.log(country)
//     }
// }

// // No 7
// for (let country of countries) {
//     if (country.length === 4) {
//         console.log(country)
//     }
// }

// // No 8
// for (let country of countries) {
//     if (country.length >= 2) {
//         console.log(country)
//     }
// }

// // No 9
// let newSpecCountry = []
// for (let country of countries) {
//     newSpecCountry.push(country.toUpperCase())
// }
// console.log(newSpecCountry)

// EXERCISE LEVEL 3
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const newCountries = [];
for (let country of countries) {
  newCountries.push(country.toUpperCase());
}
console.log(newCountries);

const sortedCountries = [];
sortedCountries.push(newCountries.reverse());
console.log(sortedCountries);

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
const mernStack = ["MongoDB", "Express", "React", "Node"];

console.log(webTechs.sort());
console.log(mernStack.sort());

const countriesWithLand = [];
for (let country of countries) {
  if (country.includes("land")) {
    countriesWithLand.push(country);
  }
}
console.log(countriesWithLand);

const countriesWithFourCharacters = [];
for (let country of countries) {
  if (country.length === 4) {
    countriesWithFourCharacters.push(country);
  }
}
console.log(countriesWithFourCharacters);

const countriesWithTwoOrMoreWord = [];
for (let country of countries) {
  if (country.length >= 2) {
    countriesWithTwoOrMoreWord.push(country);
  }
}
console.log(countriesWithTwoOrMoreWord);

const reversecapitalizeCountry = [];
for (let country of countries) {
  let newCountry = [];
  newCountry.push(country.toUpperCase());
  reversecapitalizeCountry.push(newCountry.reverse());
}
console.log(reversecapitalizeCountry);

// EXERCISE LEVEL 2
