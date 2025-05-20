export const countCharacters = (arr: string[]): number => {
	if (arr.length === 0) return 0
	return arr[0].length + countCharacters(arr.slice(1))
}

export const getEvenNumbers = (arr: number[], result: number[] = []): number[] => {
	if (arr.length === 0) return result
	if (arr[0] % 2 === 0) {
		result.push(arr[0])
	}

	return getEvenNumbers(arr.slice(1), result)
}

export const getNumberFromTriangularNumbers = (num: number): number => {
	if (num === 1) return 1

	return num + getNumberFromTriangularNumbers(num - 1)
}

export const getXIndexFromString = (str: string): number => {
	return str[0] === 'x' ? 0 : 1 + getXIndexFromString(str.slice(1))
}

export const getUniquePathsCount = (x: number, y: number): number => {
	if (y === 1 || x === 1) return 1
	return getUniquePathsCount(x - 1, y) + getUniquePathsCount(x, y - 1)
}
