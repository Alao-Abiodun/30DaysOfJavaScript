const constants = [2.72, 3.14, 9.81, 37, 100];

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);


const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);

// const rectangle = {
//     width,
//     height
// };  

const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ]

for (const {name, scores, skills, age} of users){
    console.log(name, scores, skills, age);
}

const userLessThan2Skills = users.filter(user => user.skills.length < 2);
console.log(userLessThan2Skills);



const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

const convertArrayToObject = array => {
    const newArray = [];
    for (const [name, skills, scores] of array){
        newArray.push ({name, skills, scores});
    }
    return newArray;
};

console.log(convertArrayToObject(students));

// const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
// const [name, skills, scores] = student;
// const secondToTheLast = skills.length - 2;
// const Last
// const [jsScore] = secondToTheLast;
// const [name , skills, scores] = student;
// console.log(name, skills, scores);


