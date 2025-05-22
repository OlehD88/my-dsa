import { quickSort } from './QuickSort'

export const getBiggestProductFromArray = (arr: number[], numbersAmount: number): number => {
	const sorted = quickSort(arr)
	let product = 1

	for (let i = 0; i < numbersAmount; i++) {
		product *= sorted[arr.length - i - 1]
	}

	return product
}
