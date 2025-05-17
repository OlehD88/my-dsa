import { linearSearch } from './LinearSearch'

describe('Linear search', () => {
	it("Should find a value inside array and return it's index", () => {
		const arr = [2, 4, 5, 8, 1, 6]

		expect(linearSearch(arr, 5)).toEqual(2)
	})

	it('Should not find a value and return -1', () => {
		const arr = [2, 4, 5, 8, 1, 6]

		expect(linearSearch(arr, 20)).toEqual(-1)
	})
})
