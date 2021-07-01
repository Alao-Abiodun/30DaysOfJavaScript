// EXERCISE LEVEL 1

class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs
    }
    animalSound() {
        let animalDescribe = `${this.name} is a  ${this.age} years old and ${this.color} in complexion with ${this.legs} legs`
        return animalDescribe;
    }
    animalFood() {
        let food = `bone`
        return food;
    }
}

class Dog extends Animal {
    constructor(name, age, color, legs, animalType) {
        super(name, age, color, legs);
        this.animalType = animalType;
    }

    dogSound() {
        let dogDescribe = `${this.name} is a ${this.animalType} and it is  ${this.age} years old and ${this.color} in complexion with ${this.legs} legs`
    }
}

class Cat extends Animal {
    constructor(name, age, color, legs) {
        super(name, age, color, legs);
    }

    catSound() {
        let catDescribe = `The ${this.name} is ${this.age}. It is ${this.color} with ${this.legs}`
    }
}

class Statictics {
    constructor(array) {
        this.array = array;
    }

    count() {
        return this.array.length;
    }

    sum() {
        let sum = 0
        for (let i = 0; i < this.array.length; i++) {
            sum += this.array[i];
        }
        return sum;
    }

    min() {
        return Math.min(...this.array);
    }

    max() {
        return Math.max(...this.array);
    }

    range() {
        const range = Math.max(...this.array) - Math.min(...this.array);
        return range;
    }

    mean() {
        let sum = 0;
        for (const arr of this.array) {
            sum += arr;
        }
        const sumOfNumbers = Math.round(sum / this.array.length);
        return sumOfNumbers
    }

    median() {
        const sortedAges = this.array.sort((a, b) => a - b);
        return sortedAges.slice(12, 13).join();
    }

    mode() {
        const number = new Set(this.array);
        const newAges = [];
        for (const num of number) {
            const filterNumber = this.array.filter(no => no === num);
            console.log(filterNumber)
            for (const filt of filterNumber) {
                if (filt.length === 6) {
                    newAges.push({ 'mode': num, 'count': filterNumber.length })
                }
            }
        }
        return newAges
    }

    std() {
        let sum = 0;
        for (const arr of this.array) {
            sum += arr;
        }
        const sumOfNumbers = Math.round(sum / this.array.length);
        return sumOfNumbers
        // anotherMethod() {
        //     const newNum = [];
        //     const newSum = 0;
        //     for (let i = 0; i < this.array.length; i++) {
        //         const value = this.array[i] - sumOfNumbers;
        //         const no = Math.pow(value, 2);
        //         newNum.push(no);
        //     }
        // }

    }

}
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const statistics = new Statictics(ages);
console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ', statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}


