const {shuffleArray} = require('./utils')

const testArray = [1,2,3,4,5]

describe('shuffleArray should', () => {
    let returnArray = shuffleArray(testArray)
    test('return an array', () => {
        expect(Array.isArray([returnArray])).toBe(true)
    })
    test('check if the array is the same length as the one sent in', () => {
        expect(returnArray.length).toEqual(testArray.length)
    })
})