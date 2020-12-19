const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false
  }
];

const signUp = (data) => {
  const foundUser = users.find((user) => user._id === data._id);
  if (foundUser) return `User already has an account`;
  return users.push(data);
}

const signIn = (data) => {
    const foundEmail = users.find((user) => user.email === data.email);
    if (!foundEmail) return `user does not exist`;
    return `user loggged into the application`
}


const rateProduct = (data) => {

};

// const newUser1 = {
//   _id: 'abby345',
//   username: 'abbey',
//   email: 'abbey@abbey.com',
//   password: 'abbey123',
//   createdAt: '10/05/2020 5:54 PM',
//   isLoggedIn: false
// };
// const newUser2 = {
//   _id: 'josh2002',
//   username: 'josh',
//   email: 'joshking@joshking.com',
//   password: 'joshking123',
//   createdAt: '18/05/2020 8:22 PM',
//   isLoggedIn: false
// };

// const newUser3 =  {
//   _id: 'zwf8md',
//   username: 'Brook',
//   email: 'brook@brook.com',
//   password: '123111',
//   createdAt: '08/01/2020 9:45 AM',
//   isLoggedIn: true
// };

// const newUser4 =  {
//   _id: 'zwf8md',
//   username: 'Brook',
//   email: 'alao@alao.com',
//   password: '123111',
//   createdAt: '08/01/2020 9:45 AM',
//   isLoggedIn: true
// };

// console.log(signUp(newUser1));
// console.log(signUp(newUser2));
// console.log(signUp(newUser3));
// console.log(signIn(newUser4));

// console.log(signIn(newUser2))

// console.log(users);

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