// EXERCISE LEVEL 1
// No 1
const array = [];
// No 2
const numArrays = [3,4,5,6,'alao', 'abiodun', 'abdulrahman'];
// No 3
console.log(numArrays.length)
// No 4
console.log(numArrays[0])
console.log(numArrays[3]);
console.log(numArrays[numArrays.length -1])
// No 5
const mixedDataTypes  = [2,4,6, 'js', 'css', 4.54];
console.log(mixedDataTypes)
// No 6
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// No 7
console.log(itCompanies)
// No 8
console.log(itCompanies.length);
// No 9
console.log(itCompanies[0])
console.log(itCompanies[3]);
console.log(itCompanies[itCompanies.length - 1])
// No 10
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])
// No 11
// itCompanies.forEach(company, () => {
//     return company.toUpperCase();
// })
// No 12
console.log(`${itCompanies.join(', ')} are big IT companies`);
// No 13
if (itCompanies.indexOf('Google') !== -1) {
    console.log(`${itCompanies[1]}`) 
} else {
    console.log(`The company does not exist in the IT companies `)
}