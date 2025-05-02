const { countOccurrences } = require("../3.countOccurrences")
const { expect } = require("chai")
// const countOccurrences = (arr, elem) => {
//     count = 0
//     for (let e of arr) {
//         if (e === elem) {
//             count++
//         }
//     }
//     return count
// }
// console.log(countOccurrences([1, 1, 2], 2))

//Documento il comportamento 
//atteso della funzione in un caso specifico
describe("countOccurrences", function () {
    it("Counts the occurrences of the elem in the array", function () {
        const arr = [1, 1, 2]
        const elem = 2
        const result = countOccurrences(arr, elem)

        expect(result).to.equal(1)
    });

    it("Counts the occurrences of the elem present multiple time in the array", function () {
        const arr = [1, 2, 1, 3, 5, 7, 1, 5, 1]
        const elem = 1
        const result = countOccurrences(arr, elem)

        expect(result).to.equal(4)
    });

    it("Counts the occurrences of 0 in the array ", function () {
        const arr = [1, 2, 1, 0, 0, 0, 1, 5, 1]
        const elem = 0
        const result = countOccurrences(arr, elem)

        expect(result).to.equal(3)
    });

    it('Returns 0 as default in case the array passed is undefined', () => {
        expect(countOccurrences(undefined, 1)).to.equal(0)
    })

    it("return 0 if an empty array is provided", function () {
        const arr = []
        const elem = 2
        const result = countOccurrences(arr, elem)

        expect(result).to.equal(0)
    });

    it('return 0 if the elem provided is not in the array', function () {
        // const arr = [1,2,3,5]
        // const elem = 8
        // const result = countOccurrences(arr, elem)
        expect(countOccurrences([1, 2, 3, 5], 8)).to.equal(0)
    })


})