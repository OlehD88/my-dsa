import { binarySearch } from './BinarySearch'

describe('Binary search', () => {
	it("Should find a value inside array and return it's index", () => {
		const arr = [1, 2, 3, 4, 5, 6, 7]

		expect(binarySearch(arr, 5)).toEqual(4)
		expect(binarySearch(arr, 1)).toEqual(0)
		expect(binarySearch(arr, 7)).toEqual(arr.length - 1)
	})

	it('Should not find a value and return -1', () => {
		const arr = [1, 2, 3, 4, 5, 6, 7]

		expect(binarySearch(arr, 20)).toEqual(-1)
	})
})
