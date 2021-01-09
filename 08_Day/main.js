const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: 'asab@asab.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node',
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: 'paul@paul.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node',
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// Exercise Level 2

// Question 1
let highestSkills = obj => {
  let skillsLengthArray = [];
  let objArray = Object.entries(obj);
  for (let i = 0; i < 7; i++) {
    let skillsLength = objArray[i][1].skills.length;
    skillsLengthArray.push(skillsLength);
  }
  const skills = Math.max(...skillsLengthArray);
  let largestSkills = skillsLengthArray.indexOf(skills);
  let result = objArray[largestSkills][0];
  return result;
};
// console.log(`The person with the highest skills is:`, highestSkills(users));

// Question 2
const isLoggedIn = obj => {
  let userLoggedIn = [];
  const objArray = Object.entries(obj);
  for (let i = 0; i < objArray.length; i++) {
    let loggedInUser = objArray[i][1].isLoggedIn;
    userLoggedIn.push(loggedInUser);
  }
  let loggedStatus = [];
  userLoggedIn.map(item => {
    let status = item.toString().match(/true/g);
    status ? loggedStatus.push(item) : false;
  });
  console.log(`The number of users loggedIn is: ${loggedStatus.length}`);
};
// isLoggedIn(users);
// Question 2
const userPointLength = obj => {
  let userPointArr = [];
  let pointFifty = [];
  const objArray = Object.entries(obj);
  for (let i = 0; i < objArray.length; i++) {
    let userPoints = objArray[i][1].points;
    userPointArr.push(userPoints);
    userPoints >= 50 ? pointFifty.push(userPoints) : false;
  }
  console.log(
    `The number of users points greater or equal 50 is: ${pointFifty.length}`
  );
};
// userPointLength(users);

// question 3
const mernStackDeveloper = obj => {
  let mernDevelopers = [];
  let userObj = Object.entries(obj);
  for (let i = 0; i < userObj.length; i++) {
    const mernSkills = userObj[i][1].skills;
    let validMernSkills = [];
    mernSkills.filter(item => {
      if (
        item === 'MongoDB' ||
        item === 'Express' ||
        item === 'React' ||
        item === 'Node'
      ) {
        validMernSkills.push(item);
      }
    });
    if (validMernSkills.length === 4) {
      mernDevelopers.push(userObj[i][0]);
    }
  }
  console.log(`The users skilled in MERN stack are: ${mernDevelopers}`);
};
// mernStackDeveloper(users);

// question 4
let setName = obj => {
  obj.Abiodun = {};
  obj.Abiodun.email = 'abiodundev@gmail.com';
  console.log(obj);
};
// console.log(users);
// setName(users);

// question 5
const allUserKeys = obj => {
  const keys = Object.keys(obj);
  console.log(keys);
};
// allUserKeys(users);

// question 6
const allUserValues = obj => {
  const values = Object.values(obj);
  console.log(values);
};
// allUserValues(users);

// question 7
const countryDetails = arrObj => {
  console.log(`Country name is ${arrObj[0].name}`);
  console.log(`Country capital is ${arrObj[0].capital}`);
  console.log(`Country population is ${arrObj[0].population}`);
  console.log(`Country language is ${arrObj[0].languages}`);
};
// countryDetails(countries);

// Exercise Level 3
// question 1
const personAccount = () => {
  let personAccount = {
    firstName: 'Abiodun',
    lastName: 'Alao',
    income: {
      freelance: 2300000,
      gig: 235930000,
    },
    expenses: {
      rent: 8203839,
      expenditure: 8321030,
    },
    totalIncome() {},
    totalExpense() {},
    accountInfo() {},
    addIncome() {},
    addExpense() {},
    accountBalance() {},
  };
  console.log(personAccount);
};
// personAccount();

const users2 = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
];

// question a
const userValidation = (name, password) => {
  for (let i = 0; i < users2.length; i++) {
    if (users2[i].username === name && users2[i].password === password) {
      return true;
    }
  }
};
// console.log(userValidation('thomas@thomas.com', '123333'));

let signUp = (name, ...arg) => {
  let result = userValidation(name);
  if (result) {
    console.log(name, ' is a registered user');
  } else {
    let details = {
      _id: arg[0][3],
      username: arg[0][0],
      email: arg[0][1],
      password: arg[0][2],
      createdAt: new Date(),
    };
    users2.push(details);
    console.log(name, 'is not a registered user');
  }
};

// signUp('Tope', ['Tope', 'tope@gmail.com', '123321', '34ere3']);
// signUp('Abiodun', ['Abiodun', 'abiodundev@gmail.com', '12345', 'derfcg']);
// signUp('Thomas', ['Thomas', 'thomas@thomas.com', '123333', 'ghderc']);
// console.log(users2);

let signIn = (username, password) => {
  let answer = userValidation(username, password);
  answer
    ? console.log('Login successful')
    : console.log('Login unsuccesful, wrong details');
};
signIn('Thomas', '123333');

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
];

let rateProduct = (product, rating) => {
  let rate = {
    userId: rating[0],
    rate: rating[1],
  };
  let index;
  products.map(item => {
    if (item.name === product) {
      index = products.indexOf(item);
    }
  });

  products[index].ratings.push(rate);
};

rateProduct('Laptop', ['ere4343', 4.5]);
console.log(products);

let likeProduct = userId => {
  for (let i = 0; i < products.length; i++) {
    if (products[i].likes === []) {
      products[i].likes.push(userId);
    } else if (products[i].likes.join('').includes(userId)) {
      let index = products[i].likes.indexOf(userId);
      products[i].likes.splice(index, 1);
    } else {
      products[i].likes.push(userId);
    }
  }
};
likeProduct('aegfal');
likeProduct('hedfcg');
console.log(products);
