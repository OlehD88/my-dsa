import { Stack } from './Stack'

describe('Stack', () => {
	it('Should initialize and read last element', () => {
		const stack = new Stack([1, 4, 7])
		expect(stack.read()).toEqual(7)
	})

	it('Should return length of current stack', () => {
		const stack = new Stack([1, 4, 7])
		expect(stack.length()).toEqual(3)
	})

	it('Should push new element', () => {
		const stack = new Stack([1, 4, 7])
		stack.push(8)
		expect(stack.length()).toEqual(4)
		expect(stack.read()).toEqual(8)
	})

	it('Should pop element', () => {
		const stack = new Stack([1, 4, 7])
		const lastElement = stack.pop()

		expect(lastElement).toEqual(7)
		expect(stack.length()).toEqual(2)
		expect(stack.read()).toEqual(4)

		stack.pop()
		stack.pop()

		const notAvailableElement = stack.pop()
		expect(notAvailableElement).toEqual(null)
		expect(stack.length()).toEqual(0)
		expect(stack.read()).toEqual(null)
	})
})
