// (sumToN: Sum numbers from 1 to n.
//     sumToN(5) → 15

//  Sum numbers from 1 to n
//     * 
//  * n = 1
//     * = 1
//         * 
//  * n = 2
//     * = 1 + 2 = 3
//         *  
//  * n = 3
//     * = 1 + 2 + 3 = 6
//         *  
//  * n = 4
//     * = 1 + 2 + 3 + 4 = 10
//         * 
//  * n = 5
//     * = 1 + 2 + 3 + 4 + 5 = 15
//         * 
//  * n < 1 = n <= 0(Base case)
//     * = 0
//         */

const sumToN = (limitNumber) => {
    if (limitNumber < 1) {
        return 0
    }

    let sum = 0
    for (let currentNumber = 1; currentNumber <= limitNumber; currentNumber++) {
        sum += currentNumber
    }

    return sum
}

// test 
console.log(sumToN(-11)) // 0
console.log(sumToN(0)) // 0
console.log(sumToN(1)) // 1
console.log(sumToN(2)) // 3
console.log(sumToN(3)) // 6
console.log(sumToN(4)) // 10
console.log(sumToN(5)) // 15








