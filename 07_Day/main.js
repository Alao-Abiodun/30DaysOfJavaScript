// EXERCISE LEVEL 2
//  No 6
// const reverseArray = (array) => {
//     let newArray = []
//     for (let i = array.length - 1; i >= 0; i--) {
//         console.log(array[i])
//     }
// }
// const numbers = [1, 2, 3, 4, 5]
// const alphabets = ['A', 'B', 'C']
// reverseArray(numbers);
// reverseArray(alphabets)

// No 7
// const capitalizeArray = (array) => {
//     let newArray = []
//     for (const arr of array) {
//         newArray.push(arr.toUpperCase())
//     }
//     return newArray
// }
// const mernStacks = ['MongoDB', 'Express', 'React', 'Node.JS'];
// console.log(capitalizeArray(mernStacks))

// No 8
// const addItem = (items) => {
//     let newArray = []
//     for (const item of items) {
//         newArray.push(item);
//     }
//     return newArray
// }
// const item1 = ['Hello']
// const item2 = ['Hello', 'World']
// console.log(addItem(item1));
// console.log(addItem(item2))

// No 14
const sumOfNumber = (...args) => {
    let sum = 0
    for (const element of args) {
        sum += element;
    }
    return sum;
}
console.log(sumOfNumber(1, 2, 3))