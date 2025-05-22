import { getBiggestProductFromArray } from './QuickSortFuncs'

describe('Quick sort Funcs', () => {
	it('It should return the biggest product of 3 numbers from array', () => {
		const arr = [9, 7, 2, 4, 8, 1, 3]
		expect(getBiggestProductFromArray(arr, 3)).toEqual(9 * 8 * 7)
	})
})
