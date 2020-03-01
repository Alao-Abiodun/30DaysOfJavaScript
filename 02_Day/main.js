//  EXERCISE LEVEL 1
// No 1
let challenge = '30 Days Of JavaScript'
//  No 2
console.log(challenge)
//  No 3 
console.log(challenge.length)
//  No 4
console.log(challenge.toUpperCase())
//  No 5
console.log(challenge.toLowerCase())
//  No 6
console.log(challenge.substr(0, 2))
console.log(challenge.substring(0, 2))
//  No 7
console.log(challenge.substring(3,  21))
// No 8
console.log(challenge.includes('Script'))
// No 9
console.log(challenge.split(' '))
// No 10
console.log(challenge.split(' '))
//  No 11
const companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split())
// 12
console.log(challenge.replace('JavaScript', 'Python'))
// No 13
console.log(challenge.charAt(15))
//  No 14
console.log(challenge.charCodeAt('J'))
// No 15
console.log(challenge.indexOf('Days'))
//  No 16
console.log(challenge.lastIndexOf('Days'))
// No 17
let phraseSentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(phraseSentence.lastIndexOf('because'))
// No 18
console.log(phraseSentence.indexOf('because'))
// No 19
console.log(phraseSentence.search('because'))
// No 20
console.log(challenge.trim())
// No 21
console.log(challenge.startsWith('30'))
//  No 22
console.log(challenge.endsWith('JavaScript'))
// No 23
console.log(challenge.match(/a/g))
// No 24
let newChallenge = '30 Days Of'
console.log(newChallenge.concat(' JavaScript'))
// No 25
console.log(challenge.repeat(2))

// EXERCISE LEVEL 2
// No 1
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\'by John Holmes teaches us to help another')
// No 2
console.log("Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.")
// No 3
let num = '10'
typeof num === 10 ?  console.log('it is  not exactly the same') : console.log(`It is now exactly the same now : ${parseInt(num)}`)
// No 4
parseFloat('9.8') === 10 ? console.log('it is not the same') : console.log(``)
// No 5
let nameSet = 'python' || 'jargon'
if (nameSet.includes('on')) {
    console.log('It contain')
} else {
    console.log('It\'s not contain')
}
// No 6
console.log('I hope this course is not full of jargon'.includes('jargon'))
// No 7
console.log(Math.floor(Math.random() * 101));
// No 8
console.log(Math.floor(Math.random() * 51)  + 50);
// No 9
console.log(Math.floor(Math.random() * 255))
// No 10
let word = 'JavaScript'
let wordRandom = Math.floor(Math.random() * word.length);
console.log(word[wordRandom]);
// No 11
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n5 1 5 25 215')
// No 12
console.log(phraseSentence.substr(30, 25))
// EXERCISE LEVEL 3
//  No 1
console.log('Love is the best thing in this world. Some found their love and some are still looking for their love.'.match(/love/gi))
// No 2
console.log('You cannot end a sentence with because because because is a conjunction'.match(/because/gi).length)
// No 3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const regexPat = /%|@|\$|&|#|;/g
console.log(sentence.replace(regexPat, ''));
// No 4
const accountStatement = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const digitPattern = /\d+/g
const accountDetails = accountStatement.match(digitPattern)
const [money1, money2, money3] = accountDetails;
const totalIncome = (parseInt(money1) * 12) + (parseInt(money2)) + (parseInt(money3) * 12);
console.log(`The totalIncome is : ${totalIncome}`)
