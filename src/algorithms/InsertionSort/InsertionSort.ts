export const insertionSort = (arr: number[]): number[] => {
	for (let i = 1; i < arr.length; i++) {
		let tempValue = arr[i]
		let position = i - 1

		while (position >= 0) {
			if (arr[position] > tempValue) {
				arr[position + 1] = arr[position]
				position -= 1
			} else {
				break
			}
		}

		arr[position + 1] = tempValue
	}

	return arr
}
