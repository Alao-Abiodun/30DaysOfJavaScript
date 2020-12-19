// EXERCISE LEVEL 1

//  Q1
 
function myOuterFunc() {
    let sum = 0;
    function myInnerFunc() {
        sum++;
        return sum;
    }
    return myInnerFunc;
}
const  innerFunc = myOuterFunc();

console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());

// EXERCISE LEVEL 2
// Q1

function anotherOuterFunc() {
    let count = 2;
    function anotherInnerAddFunc() {
        count++;
        return count;
    }
    function anotherInnerMinusFunc() {
        count--;
        return count;
    }
    function anotherInnerMultiplyFunc() {
        count *= count;
        return count;
    }
    return {
        addFunc: anotherInnerAddFunc(),
        MinusFunc: anotherInnerMinusFunc(),
        MultiplyFunc: anotherInnerMultiplyFunc()
    }
}

const anotherInnerFunc = anotherOuterFunc();
console.log(anotherInnerFunc.addFunc);
console.log(anotherInnerFunc.MinusFunc);
console.log(anotherInnerFunc.MultiplyFunc);

// EXERCISE LEVEL 3
// Q1
function personAccount() {
    let firstName = 'Abiodun'
    let lastName = 'Alao'
    let incomes = 2000000000
    let expenses = 100000;
    function totalIncome() {
        return incomes * 12;
    }
    function totalExpenses() {
        return ((incomes * 12) - expenses);
    }
    function accountInfo() {
        return `my name ${lastName} ${firstName}`;
    }
    function addIncome() {
        return incomes + 1000000;
    }
    function addExpenses() {
        return expenses +  50000;
    }
    function accountBalance() {
        return `my remaining account for this year is ${((this.totalIncome() + this.addIncome()) - (this.totalExpenses() + this.addExpenses()))}`
    }
    return {
        totalIncome,
        totalExpenses,
        accountInfo,
        addIncome,
        addExpenses,
        accountBalance
    }
}

const someInnerFunc = personAccount();

console.log(someInnerFunc.totalIncome());
console.log(someInnerFunc.totalExpenses());
console.log(someInnerFunc.accountInfo());
console.log(someInnerFunc.addIncome());
console.log(someInnerFunc.addExpenses());
console.log(someInnerFunc.accountBalance());

