import {
	getFirstDuplicate,
	getFirstNonDuplicateCharacter,
	getIntersection,
	getMissingAlphabetLetter,
} from './HashTableFuncs'

describe('Hash Table', () => {
	it('Should make intersection of two arrays with complexity O(n)', () => {
		const arr = [1, 2, 3, 4, 5]
		const arr2 = [0, 2, 4, 6, 8]

		expect(getIntersection(arr, arr2)).toEqual([2, 4])
		expect(getIntersection(arr, [])).toEqual([])
		expect(getIntersection([2], [3])).toEqual([])
	})

	it('Should return first duplicate value in array', () => {
		const arr = ['a', 'b', 'c', 'd', 'c', 'e']

		expect(getFirstDuplicate(arr)).toEqual('c')
		expect(getFirstDuplicate(['a', 'b', 'c'])).toEqual(null)
		expect(getFirstDuplicate([])).toEqual(null)
	})

	it('Should return the missing letter from alphabet that is not in the string', () => {
		const str = 'the quick brown box jumps over a lazy dog'

		expect(getMissingAlphabetLetter(str)).toEqual('f')
		expect(getMissingAlphabetLetter('')).toEqual('a')
		expect(getMissingAlphabetLetter(str + 'f')).toEqual(null)
	})

	it('Should return the first non-duplicated character', () => {
		const str = 'minimum'

		expect(getFirstNonDuplicateCharacter(str)).toEqual('n')
		expect(getFirstNonDuplicateCharacter('nmnmnmdada')).toEqual(null)
		expect(getFirstNonDuplicateCharacter('')).toEqual(null)
	})
})
