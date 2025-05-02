const { search } = require("../search")
const { expect } = require("chai")

describe('search', () => {
    it('Search should return false in case the input array is empty', () => {
        expect(search([], 1)).to.be.false
    })

    it('Returns true when the element is found in an array of numbers', () => {
        expect(search([1, 2, 3], 3)).to.be.true
    })

    it('Returns false when the element is not found in an array of numbers', () => {
        expect(search([1, 2, 3], 4)).to.be.false
    })
})