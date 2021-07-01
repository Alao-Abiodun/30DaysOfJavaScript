// EXERCISE LEVEL 1

//NO 1
localStorage.setItem('firstname', 'Abiodun');
localStorage.setItem('lastname', 'Alao');
localStorage.setItem('age', '23');
localStorage.setItem('country', 'Nigerian');
localStorage.setItem('city', 'Lagos');
// localStorage.getItem('firstname');
// localStorage.getItem('lastname');
// localStorage.getItem('age');
// localStorage.getItem('country');
// localStorage.getItem('city');


// EXERCISE LEVEL 2

// N0 2
const student = {
    firstname: 'Aminah',
    lastname: 'Adekunle',
    age:'23',
    skills: ['Nurse', 'scienceLaboratory'],
    country: 'Nigerian',
    enrolledKeys: 'ScienceLaboratoryTechnology'
}

const studentJSON = JSON.stringify(student, undefined, 4);
localStorage.setItem('studentDetails', studentJSON);
localStorage.getItem('studentDetails');

// EXERCISE LEVEL 3

// N0 3 
const personAccount = {
    firstname: 'Abiodun',
    lastname: 'Alao',
    incomes: [
        {
            income: 2300000,
            description: 'Software Engineering'
        }
    ],
    expenses: [
        {
            expense: 500000,
            description: 'Keep things surrounding me good and well'
        }
    ],
    totalIncome(){

    },
    totalExpense() {

    },
    accountInfo() {
        const userAcctInfo = `The owner of the account ${this.lastname} ${this.lastname} has total amount of ${this.incomes.income} and 
        spent an amount of ${this.expenses.expense} with the remaining amount to be ${this.incomes.income - this.expenses.expense}`;
        return userAcctInfo;
    },
    addIncome() {

    },
    addExpenses() {

    },
    accountBalance() {

    }
}