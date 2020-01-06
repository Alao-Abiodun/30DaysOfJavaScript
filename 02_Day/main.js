// this is your main.js script

// Exercise Answer

// Exercise 1
let challenge = '30 Days Of JavaScript';
let challenge_2 = '30 Days Of Python';
// Exercise 2
console.log(challenge);
// Exercise 3
console.log(challenge.length);
// Exercise 4
console.log(challenge.toUpperCase());
// Exercise 5
console.log(challenge.toLowerCase());
// Exercise 6
console.log(challenge.substr(0,2));
console.log(challenge.substring(0,3));
// Exercise 7
console.log(challenge.substring(3,21));
// Exercise 8
let newChallengeString = 'You cannot end a sentence with because because because is a conjunction';
console.log(newChallengeString.substr(31,23));
// Exercise 9
console.log(challenge.includes('Script'));
// Exercise 10
console.log(challenge.split());
// Exercise 11
console.log(challenge.split(' '));
// Exercise 12 
let techCompany = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(techCompany.split(','));
// Exercise 13
console.log(challenge.replace('JavaScript', 'Python'));
// Exercise 14
console.log(challenge.charAt(15));
// Exercise 15
console.log(challenge.charCodeAt('J'));
// Exercise 16
console.log(challenge.indexOf('a'));
// Exercise 17
console.log(challenge.lastIndexOf('a'));
// Exercise 18
console.log(newChallengeString.indexOf('because'));
// Exercise 19
console.log(newChallengeString.lastIndexOf('because'));
// Exercise 20
console.log(newChallengeString.search('because'));
// Exercise 21
console.log(challenge.trim());
// Exercise 22
console.log(challenge.startsWith('30 Days Of JavaScript'));
// Exercise 23
console.log(challenge.endsWith('30 Days Of JavaScript'));
// Exercise 24
let challengePattern = '30 Days of JavaScript';
let pattern = /a/g;
console.log(challengePattern.match(pattern));
// Exercise 25
console.log(newChallengeString.match('because'));
// Exercise 26
let str_1 = '30 Days of';
let str_2 = 'JavaScript';
console.log(str_1.concat(str_2));
// Exercise 27
console.log(challenge.repeat(2));
// Exercise 29
let string = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const [income_1, income_2, income_3] = string.match(/\d+/g);
let totalAnnualIncome = parseInt(income_1) + parseInt(income_2) + parseInt(income_3);
console.log(`The total annual income of the person is: ${totalAnnualIncome}`);
// Exercise 30
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is also $the $result of &love& of tea&ching'

// Exercise 31 
console.log(`The quote '\There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help to one another.`);
// Exercise 32
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)
// Exercise 33 
console.log(challenge.includes('on'));
console.log(challenge_2.includes('on'));
// Exercise 34
let sentence_2 = 'I hope this course is not full of jargon.';
console.log(sentence_2.includes('jargon'));
// Exercise 35
console.log(Math.floor(Math.random() * 101));
// Exercise 36

// Exercise 37

// Exercise 38

let randValue = challenge.substr()
// Exercise 39
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 17\n4 1 4 16 64\n5 1 5 25 125');
// Exercise 41
console.log(10 == '10');
console.log(10 === '10');
// Exercise 42 
console.log(parseInt(9.8));
console.log(Math.round(9.8));

