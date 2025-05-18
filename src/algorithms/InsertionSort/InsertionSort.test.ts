import { insertionSort } from './InsertionSort'

describe('Insertion Sort', () => {
	const arr = [4, 1, 3, 7, 9, 2]
	const sorted = [1, 2, 3, 4, 7, 9]

	it('Should sort an array', () => {
		expect(insertionSort(arr)).toEqual(sorted)
	})
})
