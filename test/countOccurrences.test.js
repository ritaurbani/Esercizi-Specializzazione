const {countOccurrences} = require("../3.countOccurrences")
const {expect} = require("chai")
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
describe("countOccurrences", function() {
    it("count the occurrences of the elem in the array", function() {
        const arr = [1, 1, 2]
        const elem = 2
        const countOccurrences = countOccurrences(arr, elem)

        expect(countOccurrences).to.equal(1)
    });

    it("return 0 if an empty array is provided", function() {
        const arr = []
        const elem = 2
        const countOccurrences = countOccurrences(arr, elem)
        
        expect(countOccurrences).to.equal(0)
    });

    it('return 0 if the elem provided is not in the array' function() {
        const arr = [1,2,3,5]
        const elem = 8

        expect(countOccurrences).to.equal(0)
    })


})