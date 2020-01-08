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
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

  // Exercise No1 solution
//   for (let i =0; i <=10; i++) {
//       console.log(i);
//   }

//   let i = 0;
//   while(i <= 10) {
//       console.log(i);
//       i++;
//   }

//   let i = 0;
//   do {
//       console.log(i);
//       i++;
//   }while (i <= 10)

 // Exercise No2 solution
//  for (let i = 10; i >=0; i--) {
//     console.log(i);
// }

// let i = 10;
// while(i >= 0) {
//     console.log(i);
//     i--;
// }

// let i = 10;
// do {
//     console.log(i);
//     i--;
// }while (i >= 0)

// Exercise No3 solution
// let n = prompt('What is the total number you want to loop through?');
// for (let i = 0; i <= n; i++) {
//     console.log(i);
// }

// Exercise No4 solution
// for (let i=0; i <= 6; i++) {
//     for (let j=0; j <= i; j++){

//     }
// }

// Exercise No5 solution
// for (let i=0; i <= 10; i++){
//     console.log(`${i} * ${i} = ${i * i}`);
// }

// Exercise No6 solution
//   for (let i = 0; i <= 10; i++){
//       console.log(`i  i^2  i^3`);
//       console.log(`${i}  ${i * i}  ${i * i * i}`);
//   }

// Exercise No7 solution
// for (let i =0; i <= 100; i++){
//     if (i % 2 == 0){
//         console.log(`Even numbers only: ${i}`);
//     }
// }

// Exercise No8 solution
// for (let i =0; i <= 100; i++){
//     if (i % 1 == 0  && i % i == 0){
//         console.log(`Odd numbers only: ${i}`);
//     }
// }

// Exercise No10 solution
// let total = 0;
// for (let i =0; i <= 100; i++){
//     total += i;
//     console.log(total);
// }

// Exercise No11 solution
// let sumOfEvenNumbers = 0;
// let sumOFOddNumbers = 0;
// for (let i=0; i <=100; i++){
//     if (i % 2 == 0) {
//         sumOfEvenNumbers += i;
//     } else  if (i % 2 == 1){
//         sumOFOddNumbers += i;
//     }
// }
// console.log(`The sum of all even is ${sumOfEvenNumbers}. And the sum of all odds is ${sumOFOddNumbers}`);

// Exercise No19 solution
// let newArr = [];
// for (const country of countries) {
//     newArr.push(country.toUpperCase());
// }
// console.log(newArr);

// Exercise No20 solution
// let arrContentLength = [];
// for (const country of countries) {
//     arrContentLength.push(country.length);
// }
//     console.log(arrContentLength);

// Exercise No21 solution
// let newArr = [];
// for (let country of countries) {
//     newArr.push([country, country.substr(0,3).toUpperCase(), country.length]);  
// }
// console.log(newArr);

// Exercise No22 solution
// let newArr = [];
// for (const country of countries) {
//     if (country.includes('land')){
//         newArr.push(country);
//     } else {
//         console.log('These are countries without land');
//     }
// }
// console.log(newArr);

// Exercise No23 solution
// let newArr = [];
// for (const country of countries) {
//     if (country.endsWith('ia')){
//         newArr.push(country);
//     }
// }
// console.log(newArr);

// Exercise No24 solution
//  for (let country of countries) {
//      let largestNumberCharacter = max(country.length);
//  }
//     console.log(largestNumberCharacter);

// Exercise No31 solution
const fullstack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

for (let i =0; i < fullstack.length; i++){
    for (let j = 0; j < i; j++){
        console.log(fullstack[j]);
    }
    console.log(fullstack[i]);
}

// Exercise No32 solution
// let newArray = [];
// for (let  country of countries) {
//     if (country.includes('land')) {
//         newArray.push(country);
//     }
// }
// console.log(newArray);

// Exercise No35 solution
// let newArray = [];
// for (let country of countries) {
//     if (country.length == 5) {
//         newArray.push(country);
//     } else {
//         console.log(`No countries with 4 characters`);
//     }
// }
// console.log(newArray);

// Exercise No37 solution
// let newArr = [];
// for (let country of countries) {
//     newArr.push(country.toUpperCase());
// }
// console.log(newArr.reverse());