export const getIntersection = (arr: number[], arr2: number[]): number[] => {
	const arr_map: { [key: number]: boolean } = {}
	let result = []

	for (let i = 0; i < arr.length; i++) {
		arr_map[arr[i]] = true
	}

	for (let i = 0; i < arr2.length; i++) {
		if (arr_map[arr2[i]]) {
			result.push(arr2[i])
		}
	}
	return result
}

export const getFirstDuplicate = (arr: string[]): string | null => {
	let values: { [key: string]: boolean } = {}

	for (let i = 0; i < arr.length; i++) {
		const value = arr[i]
		if (values[value]) {
			return value
		} else {
			values[value] = true
		}
	}
	return null
}

export const getMissingAlphabetLetter = (str: string): string | null => {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'
	let letters_map: { [key: string]: boolean } = {}

	for (let i = 0; i < str.length; i++) {
		letters_map[str.charAt(i)] = true
	}

	for (let i = 0; i < alphabet.length; i++) {
		let letter = alphabet.charAt(i)
		if (!letters_map[letter]) {
			return letter
		}
	}

	return null
}

export const getFirstNonDuplicateCharacter = (str: string): string | null => {
	let letters_map: { [key: string]: number } = {}
	let letters_in_str = []

	for (let i = 0; i < str.length; i++) {
		const letter = str.charAt(i)

		if (letters_map[letter]) {
			letters_map[letter]++
		} else {
			letters_map[letter] = 1
			letters_in_str.push(letter)
		}
	}

	for (let i = 0; i < letters_in_str.length; i++) {
		const letter = letters_in_str[i]
		if (letters_map[letter] === 1) {
			return letter
		}
	}

	return null
}
