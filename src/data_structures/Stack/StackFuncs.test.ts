import { reverseString } from './StackFuncs'

describe('Stack Funcs', () => {
	it('Should reverse a string with stack', () => {
		const str = 'abcde'
		const expected = 'edcba'

		expect(reverseString(str)).toEqual(expected)
	})
})
