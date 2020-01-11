// Exercises Solution

// Exercise 1 solution
const dog = {
    name: 'Cat',
    legs: 4,
    color: 'black and White',
    age: 40,
    bark : function(){
        return `woof woof`
  }
};

//  Exercise 2 solution
console.log(dog);

// Exercise 3 solution
// dog.name = 'Cat';
// dog.leg = 4;
// dog.color = blackWhite;
// dog.age = 40;
// dog.bark : function(){
    
// }

// Exercise 4 solution
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark)

// Exercise 5 solution
dog.breed = 'fish';
dog.getDogInfo = function(){
    let sentence = `The name of the dog is ${this.name} is, it has ${this.legs} and its skin color is ${this.color} and it's age is ${this.age} with a barking style as ${this.bark}`;
    return sentence;
}

console.log(dog.breed);
console.log(dog.getDogInfo());

//  Exercise 6 solution
const personAccount = {
    firstName: 'Abiodun',
    lastName: 'Alao',
    incomes: [
        23,000,
        30,000,
        35,000,
        'Buy books',
    ],
    expenses: [
        40,000,
        'Buy food stuff',
        'Take family for a Shopping',
        'Give wife money to use if needed'
    ],
    totalIncome: function(){
        const sumOfIncome = 0;
        for (let income of this.incomes){
            sumOfIncome += income;
            return sumOfIncome;
        }
    },
    totalExpenses: function(){
        const sumOfExpenses = 0;
        for (let expense of this.expenses){
            sumOfExpenses += expense;
            return sumOfExpenses;
        }
    },
    accountInfo:{
        accountName:'Alao Abiodun AbdulRahman',
        bankType: 'Access Bank',
        accountNumber: 82938923023,
    },
    addIncome: function(){
        const newIncome = 3000000;
            newIncome += this.sumOfIncome;
            return newIncome;
    },
    addExpense: function(){
        const newExpense = 1500000;
            newExpense += this.totalExpenses;
            return newExpense;
    },
    accountBalance: function(){
        return `The remaining amount in the account is 250000`       
    }
}

// Exercise 7 solution
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

 const copyUser = Object.assign({name: 'Alao'}, users);
 console.log(copyUser);

 const copyUserKey = Object.keys(users);
 console.log(copyUserKey);

 const copyUserValues = Object.values(users);
 console.log(copyUserValues);