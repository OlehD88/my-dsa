export const selectionSort = (arr: number[]): number[] => {
	for (let i = 0; i < arr.length - 1; i++) {
		let lowest_number_index = i

		for (let j = i + 1; j < arr.length; j++) {
			let lowestItem = arr[lowest_number_index]

			if (arr[j] < lowestItem) {
				lowest_number_index = j
			}
		}

		if (lowest_number_index != i) {
			let temp = arr[lowest_number_index]
			arr[lowest_number_index] = arr[i]
			arr[i] = temp
		}
	}

	return arr
}
