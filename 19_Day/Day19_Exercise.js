// EXERCISE LEVEL 1

// N0 1

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

// NO 2

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