// EXERCISE LEVEL 1

//NO 1
localStorage.setItem('firstname', 'Abiodun');
localStorage.setItem('lastname', 'Alao');
localStorage.setItem('age', '23');
localStorage.setItem('country', 'Nigerian');
localStorage.setItem('city', 'Lagos');
console.log(localStorage.getItem('firstname'));
console.log(localStorage.getItem('lastname'));
console.log(localStorage.getItem('age'));
console.log(localStorage.getItem('country'));
console.log(localStorage.getItem('city'));

// EXERCISE LEVEL 2

// N0 2
const student = {
    firstname: 'Fatimah',
    lastname: 'Azeez',
    age:'22',
    skills: ['chemist', 'tailor'],
    country: 'Nigerian',
    enrolledKeys: 'BioChemisty'
}

const studentJSON = JSON.stringify(student, undefined, 4);
localStorage.setItem('studentDetails', studentJSON);
console.log(localStorage.getItem('studentDetails'));


// EXERCISE LEVEL 3

// N0 3 
const personAccount = {
    firstname: 'Abiodun',
    lastname: 'Alao',
    incomes: {
        income: 230000000,
        description: 'Software Engineering'
    },
    expenses: {
        expense: 100000000,
        description: 'Keep things surrounding me good and well'
    },
    totalIncome: function(){
        
    },
    totalExpense: function(){

    },
    accountInfo: function(){

    },
    addIncome: function(){

    },
    addExpenses: function(){

    },
    accountBalance: function(){
        
    }
}