import { Queue } from './Queue'

describe('Queue', () => {
	it('Should initialize and read the first element', () => {
		const queue = new Queue([1, 4, 7])
		expect(queue.read()).toEqual(1)
	})

	it('Should return length of current Queue', () => {
		const queue = new Queue([1, 4, 7])
		expect(queue.length()).toEqual(3)
	})

	it('Should enqueue a new element', () => {
		const queue = new Queue([1, 4, 7])
		queue.enqueue(8)
		expect(queue.length()).toEqual(4)
		expect(queue.read()).toEqual(8)
	})

	it('Should dequeue elements', () => {
		const queue = new Queue([1, 4, 7])
		const firstElement = queue.dequeue()

		expect(firstElement).toEqual(1)
		expect(queue.length()).toEqual(2)
		expect(queue.read()).toEqual(4)

		queue.dequeue()
		expect(queue.length()).toEqual(1)
		expect(queue.read()).toEqual(7)

		queue.dequeue()

		const notAvailableElement = queue.dequeue()
		expect(notAvailableElement).toEqual(null)
		expect(queue.length()).toEqual(0)
		expect(queue.read()).toEqual(null)
	})
})
