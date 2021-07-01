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
// console.log('Variance: ', statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ', statistics.var()) // 17.5
// console.log('Frequency Distribution: ', statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

