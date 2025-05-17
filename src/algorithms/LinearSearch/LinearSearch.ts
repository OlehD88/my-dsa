export const linearSearch = (arr: number[], value: number): number => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === value) {
			return i
		}
	}

	return -1
}
