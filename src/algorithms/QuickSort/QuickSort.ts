const partition = (arr: number[], leftIndex: number, rightIndex: number): number => {
	// console.log(arr)
	let pivotIndex = rightIndex
	let pivot = arr[pivotIndex]

	while (true) {
		while (arr[leftIndex] < pivot) {
			leftIndex += 1
		}

		while (arr[rightIndex] >= pivot) {
			rightIndex -= 1
		}

		if (leftIndex >= rightIndex) {
			break
		} else {
			let temp = arr[leftIndex]
			arr[leftIndex] = arr[rightIndex]
			arr[rightIndex] = temp

			leftIndex += 1
		}
	}

	let temp = arr[leftIndex]
	arr[leftIndex] = arr[pivotIndex]
	arr[pivotIndex] = temp

	return leftIndex
}

export const quickSort = (
	arr: number[],
	leftIndex: number = 0,
	rightIndex: number = arr.length - 1,
) => {
	if (rightIndex - leftIndex <= 0) return arr

	const pivot_index = partition(arr, leftIndex, rightIndex)

	quickSort(arr, leftIndex, pivot_index - 1)
	quickSort(arr, pivot_index + 1, rightIndex)

	return arr
}
