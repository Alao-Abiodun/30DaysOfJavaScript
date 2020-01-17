// // EXERCISE LEVEL 1

// // NO 1
// class Animal {
//     constructor(name, age, colors, legs){
//          this.name = name;
//          this.age = age;
//          this.colors = colors;
//          this.legs = legs;
//     }
    
//     getAnimalInfo(){
//         return `The name of the ${this.name}, and it's ${this.age} old till now, it's skin color is ${this.colors} and it has ${this.legs} legs`;
//     }

//     get getName(){
//         return this.name;
//     }

//     get getAge(){
//         return this.age;
//     }

//     get getColor(){
//         return this.colors;
//     }

//     get getLegs(){
//         return this.legs;
//     }

// }

// const animal1 = new Animal('Cow', 60, 'WhiteandBlack', 4);
// console.log(animal1.getAnimalInfo());
// // console.log(animal1.getName);
// // console.log(animal1.getAge);
// // console.log(animal1.getColor);
// // console.log(animal1.getLegs);


// // EXERCISE LEVEL 2
// // NO 2
// class Dog extends Animal {
//     constructor(name, age, color, legs, action){
//         super(name, age, color, legs);
//         this.action = action;
//     }

//     getAnimalInfo(){
//         return `The name of the ${this.name}, and it's ${this.age} old till now, it's skin color is ${this.colors} and it has ${this.legs} legs`;
//     }

//     get getName(){
//         return this.name;
//     }

//     get getAge(){
//         return this.age;
//     }

//     get getColor(){
//         return this.colors;
//     }

//     get getLegs(){
//         return this.legs;
//     }

//     get getAction(){
//         return this.action;
//     }
// }

// const dog = new Dog('Puppy', 100, 'Brown', 4, 'bark');
// console.log(dog.getAnimalInfo());




// class Cat extends Animal {
//     constructor(name, age, color, legs, action){
//         super(name, age, color, legs);
//         this.action = action;
//     }

//     getAnimalInfo(){
//         return `The name of the ${this.name}, and it's ${this.age} old till now, it's skin color is ${this.colors} and it has ${this.legs} legs`;
//     }

//     get getName(){
//         return this.name;
//     }

//     get getAge(){
//         return this.age;
//     }

//     get getColor(){
//         return this.colors;
//     }

//     get getLegs(){
//         return this.legs;
//     }

//     get getAction(){
//         return this.action;
//     }
// }

// const cat = new Dog('Pussy-cat', 120, 'White', 4, 'meuw');
// console.log(cat.getAnimalInfo());

// EXERCISE LEVEL 3

// NO 1 
class Statistics {
    constructor(ages){
        this.ages = ages;
    }

    getAllAges(){
        return this.ages;
    }

    count(){
        return this.ages.length;
    }

    sum(){
        let sum = 0; 
        for (const age of this.ages){
            sum += age;
            return sum;
        }
    }
    max(){
        return this.ages.min();
    }
}
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const statistics = new Statistics(ages);
console.log('Count:', statistics.count());
console.log('Sum: ', statistics.sum());
console.log('Min: ', statistics.min());



// EXERCISE LEVEL 3

// NO 1
class personAccount{
    constructor(firstname, lastname, incomes, expenses){
        this.firstname = firstname;
        this.lastname = lastname;
        this.incomes = [
            {
                income: 234000000,
                description:'Software Engineering'
            }
        ];
        this.expenses = [
            {
                expense: 4000000,
                description:'Build a mansion for the parent that guild me through the beginning of my life since my mother died'
            }
        ];
    }

    totalIncome(){

    }

    totalExpense(){

    }
    
    addIncome(){

    }

    addExpense(){

    }

    accountBalance(){

    }
}

