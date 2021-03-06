// EXERCISE LEVEL 1

// No 1
let string = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const regExp = /\d+/g;
let result = string.match(regExp);
const [monthlySalary, annualSalary, onlineCourse] = result;
const totalAnnualIncome = (parseInt(monthlySalary) * 12) + parseInt(annualSalary) + (parseInt(onlineCourse) * 12);
console.log(totalAnnualIncome);

// No 2
let anotherString = 'The position of some particles on the horizontal x-axis -1, 2, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.';
let numPattern = /-\d{1}| \d{1}/g;
let numbers = anotherString.match(numPattern);
const sortedPoints = numbers.sort((a, b) => a - b);
const [a, b, c, d, e, f, g, h] = sortedPoints;
console.log(sortedPoints)
const distance = ((parseInt(g) + parseInt(h)) - parseInt(f));
console.log(distance);

// No 3
const is_valid_variable = (str) => {
    const regPattern = /^([a-z]+)_?([a-z]+)$/;
    return regPattern.test(str);
};
console.log(is_valid_variable('first_name'));
console.log(is_valid_variable('first-name'));
console.log(is_valid_variable('1first_name'));
console.log(is_valid_variable('firstname'));



// EXERCISE LEVEL 2
const tenMostFrequentWords = (word) => {
    const regexP = /love|you|can|what|teaching|not|else|do|I|which|to|the|something|If|give|develop|capabilities|application|an|all|pyhton|If/gi;
    const result = word.match(regexP);
    const counts = [];
    let sortedResult;
    const uniqueResult = new Set(result);
    for (const res of uniqueResult) {
        const filteredResult = result.filter(resp => resp === res);
        counts.push({ word: res, count: filteredResult.length });
        sortedResult = counts.sort((b, a) => {
            return a.count - b.count;
        })
    }
    return sortedResult;
};
const paragraph = `I love teaching.If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

console.log(tenMostFrequentWords(paragraph));

// EXERCISE LEVEL 3
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
const regexP = /[%&$;@#]?/g;
const result_3 = sentence.replace(regexP, '');
console.log(result_3);

