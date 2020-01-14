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
let anotherRexExp = /\d{1}/gi;
let result_1 = anotherString.match(anotherRexExp);
console.log(result_1);

// No 3
const is_valid_variable = (val) => {
    const regEx = /[(a-z)*_(a-z)*]|[(a-z)*]/g;
    const result = val.match(regEx);
    return result;
};

is_valid_variable('first_name');

// EXERCISE LEVEL 2


const tenMostFrequentWords = (word) => {
    const regexP = /love|you|can|what|teaching|not|else|do|I|which|to|the|something|if|give|develop|capabilities|application|an|all|pyhton|if/gi;
    const result =  word.match(regexP);
    return result;
};
const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

console.log(tenMostFrequentWords(paragraph));

// EXERCISE LEVEL 3

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
const regexP = /[%&$;@#]?/g;
const result_3 = sentence.replace(regexP, '');
console.log(result_3);


