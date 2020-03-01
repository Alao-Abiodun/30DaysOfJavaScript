// EXERCISE: LEVEL 1

// 1
const personIncomeTxt = `He earns 4000 euro from salary per month, 
10000 euro annual bonus, 
5500 euro online courses per month.`
const digitPattern = /\d+/g;
const [monthlySalaryA, annualSalary, monthlySalaryB] = personIncomeTxt  .match(digitPattern);
const totalAnnualIncome = parseInt(monthlySalaryA)  + parseInt(annualSalary * 12)  + parseInt(monthlySalaryB)
console.log(`The total annual income of the person is: ${totalAnnualIncome}`);

// 2
const particleDistanceTxt = `
The position of some particleson the horizontal
 x-axis -12, -4, -3 and -1 in the negative direction
, 0 at origin, 4 and 8 in the positive direction.`

const particleDigit = /-\d|\d/gi;
const points = particleDistanceTxt.match(particleDigit)
const [a, b, c, d, e, f, g, h] = points;
const newArray = [];
newArray.push(parseInt(a), parseInt(b), parseInt(c), parseInt(d), parseInt(e), parseInt(f), parseInt(g), parseInt(h));
const sortedPoints = newArray.sort();
sortedPoints[0] = -4
sortedPoints[1] = -3
sortedPoints[2] = -1
sortedPoints[3] = -1
console.log(sortedPoints)
const distance = sortedPoints[6] + sortedPoints[sortedPoints.length - 1]
console.log(distance)


//3
const is_valid_variable = (string) => {
    const pattern = /[A-Z][a-z]_?name/gi
    const validVariable = string.search(pattern)
    return validVariable
}
console.log(is_valid_variable('first_name'))

// EXERCISE LEVEL: 2

//1
// const tenMostFrequentWords = (string) => {
//     const myArray = [];
//     const patterns = /love|you/;
//     patterns.forEach(pat => {
//         newArray.push({word:})
//     });
//     const result = string.match(pattern);
//     return myArray
// }

// paragraph = `I love teaching. 
// If you do not love teaching what else can you love. 
// I love Python if you do not love something 
// which can give you all the capabilities to develop an application 
// what else can you love.`
// console.log(tenMostFrequentWords(paragraph));

// EXERCISE 3

// 1
const cleanText = (string) => {
    const result = string.replace(/%|@|#|\$|&/gi, '')
    return result 
}

sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
console.log(cleanText(sentence))

// 2
const mostFrequentWord  = () => {
    const pattern = /\d/;
}


