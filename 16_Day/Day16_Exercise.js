// // EXERCISE LEVEL 1

// // NO 1

// const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python'];
// const skillConvertToJson = JSON.stringify(skills, undefined, 2);
// console.log(skillConvertToJson);

// // NO 2
// let age = 250;
// const ageVariable = JSON.stringify(age);
// console.log(ageVariable);

// // NO 3
// let isMarried = true
// const marriedVariable = JSON.stringify(isMarried);
// console.log(marriedVariable);

// // NO 4
// const student_1 = {
//     firstName:'Asabeneh',
//     lastName:'Yetayehe',
//     age:250,
//     isMarried:true,
//     skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
// }
// const studentStringify = JSON.stringify(student_1, undefined, 2);
// console.log(studentStringify);


// // EXERCISE LEVEL 2

// // NO 1
// const student_2 = {
//     firstName:'Asabeneh',
//     lastName:'Yetayehe',
//     age:250,
//     isMarried:true,
//     skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
// } 
// const studentVariable = JSON.stringify(student_2, ['firstName', 'lastName', 'skills'], 3);
// console.log(studentVariable);

// // EXERCISE LEVEL 3

// // NO 1
// const text = `{
//     "Alex": {
//         "email": "alex@alex.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 30
//     },
//     "Asab": {
//         "email": "asab@asab.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Redux",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node"
//         ],
//         "age": 25,
//         "isLoggedIn": false,
//         "points": 50
//     },
//     "Brook": {
//         "email": "daniel@daniel.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Redux"
//         ],
//         "age": 30,
//         "isLoggedIn": true,
//         "points": 50
//     },
//     "Daniel": {
//         "email": "daniel@alex.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Python"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     },
//     "John": {
//         "email": "john@john.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Redux",
//             "Node.js"
//         ],
//         "age": 20,
//         "isLoggedIn": true,
//         "points": 50
//     },
//     "Thomas": {
//         "email": "thomas@thomas.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     },
//     "Paul": {
//         "email": "paul@paul.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     }
// }
// `
// // const txtObj = JSON.parse(text, undefined, 2);
// // console.log(txtObj);

// // // NO 2
// // for (const txtObj of text) {
// //     const userWithManySkills = Math.max(txtObj.skills.length);
// //     return userWithManySkills;
// // }
// // console.log()
