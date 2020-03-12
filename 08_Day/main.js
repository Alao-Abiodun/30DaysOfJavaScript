// EXERCISE LEVEL 1
// No 1
const dog = {};

// No 2
console.log(dog)

// No 3
dog.name = "puppy";
dog.leg = 4;
dog.color = 'light-brown';
dog.age = 49;
dog.bark = function() {
    return 'woof woof'
}

// No 4
console.log(dog.name)
console.log(dog.leg)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())

// No 5
dog.breed = 'Meat'
dog.getDogInfo = function() {
    let dogStatement = `The name of the Dog is ${this.name}\nand it has ${this.leg} and its ${this.color} in complexion and its ${this.age}\n which bark like ${this.bark()}`
    return dogStatement
}
console.log(dog.getDogInfo());

// EXERCISE LEVEL 2
// No 1
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
myUsers = Object.values(users)
const mernStackUser = myUsers.filter(user => user.skills.length >= 8)
console.log(mernStackUser)

// No 2
const loggedInUsers = myUsers.filter(user => user.isLoggedIn === true);
console.log(loggedInUsers)

const userPoints = myUsers.filter (user => user.points >= 50)
console.log(userPoints)

// No 4
let otherName = Object.assign({abiodun: {email: 'abiodunDev@gmail.com', skills: ['MongoDB', 'Express', 'React', 'Node'], age: 23, isLoggedIn: false, points: 45}}, users);
console.log(otherName)

// No 5
let allKeys = Object.keys(otherName)
console.log(allKeys)

// No 6
let allValues = Object.values(otherName)
console.log(allValues)

// No 7
const countries = {
    Nigeria: {
        name : 'Lagos',
        capital : 'Ikeja',
        population: 234000,
        language: ['English', 'Yoruba', 'Igbo', 'Hausa']
    },
    SaudiArabia: {
        name: 'Mecca',
        capital: 'Jedda',
        population: 204000,
        language: ['English', 'Arabic']
    }
}
let country = Object.entries(countries);
console.log(country)
let countryKeys = Object.values(countries)
console.log(countryKeys)
console.log(`The name of the country is ${this.name} and its capital name is ${this.capital} with a population of ${this.population} and `)

// EXERCISE LEVEL 3
// No 1
const personAccount = {
    firstName: 'Abiodun',
    lastName: 'Alao',
    incomes: [
        {
            income: 50000,
            description: 'build a product for a company'
        },
        {
            income: 100000,
            description: 'working as software engineer in Andela'
        }
    ],
    expenses: [
        {
            expense: 50000,
            description: 'taking care of the family'
        },
        {
            expense: 35000,
            description: 'saving for a course'
        }
    ],
    totalIncome: 150000,
    totalExpense: 85000,
    acountInfo: function() {

    },
    addIncome: function() {

    },
    addExpense: function() {

    },
    accountBalance: function() {

    }
}

// No 2
const newUsers = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]


const numbers = [1, 2, 3, 4]

const sumArray = () => {
    let sum = 0;
    const callback = (number) => {
        sum += number;
    }
    numbers.forEach(callback);
    return sum;
}
console.log(sumArray())


