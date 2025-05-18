export const bubbleSort = (arr: number[]): number[] => {
	let unsorted_until_index = arr.length - 1
	let sorted = false

	while (sorted === false) {
		sorted = true

		for (let i = 0; i < unsorted_until_index; i++) {
			if (arr[i] > arr[i + 1]) {
				let temp = arr[i]
				arr[i] = arr[i + 1]
				arr[i + 1] = temp
				sorted = false
			}
		}

		unsorted_until_index -= 1
	}

	return arr
}
