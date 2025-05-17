export const binarySearch = (arr: number[], searchValue: number): number => {
	let left = 0
	let right = arr.length - 1

	while (left <= right) {
		const middle = Math.floor((left + right) / 2)

		if (arr[middle] === searchValue) return middle
		if (searchValue > arr[middle]) {
			left = middle + 1
		} else {
			right = middle - 1
		}
	}

	return -1
}
