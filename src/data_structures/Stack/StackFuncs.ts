import { Stack } from './Stack'

export const reverseString = (str: string): string => {
	const stack = new Stack()
	let answer = ''
	for (let i = 0; i < str.length; i++) {
		stack.push(str[i])
	}
	while (stack.length() > 0) {
		answer += stack.pop()
	}
	return answer
}
