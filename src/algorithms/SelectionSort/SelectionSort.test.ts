import { selectionSort } from './SelectionSort'

describe('Selection Sort', () => {
	const arr = [4, 1, 3, 7, 9, 2]
	const sorted = [1, 2, 3, 4, 7, 9]

	it('Should sort an array', () => {
		expect(selectionSort(arr)).toEqual(sorted)
	})
})
