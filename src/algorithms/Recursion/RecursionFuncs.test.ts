import {
	countCharacters,
	getEvenNumbers,
	getNumberFromTriangularNumbers,
	getUniquePathsCount,
	getXIndexFromString,
} from './RecursionFuncs'

describe('Recursion Funcs', () => {
	it('Should return total characters count', () => {
		const input = ['ab', 'c', 'def', 'ghij']

		expect(countCharacters(input)).toEqual(10)
	})

	it('Should return an array with even numbers only', () => {
		const input = [2, 1, 7, 8, 7, 6]

		expect(getEvenNumbers(input)).toEqual([2, 8, 6])
	})

	it('Should return proper number for the N number from "Triangular Numbers"', () => {
		expect(getNumberFromTriangularNumbers(7)).toEqual(28)
		expect(getNumberFromTriangularNumbers(8)).toEqual(36)
	})

	it('Should return the index of character x', () => {
		const input = 'abcdefghijklmnopqrstuvwxyz'

		expect(getXIndexFromString(input)).toEqual(23)
	})

	it('Should calculate the shortest path', () => {
		expect(getUniquePathsCount(3, 3)).toEqual(6)
	})
})
