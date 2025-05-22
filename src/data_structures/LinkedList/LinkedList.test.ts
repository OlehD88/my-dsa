import { LinkedList } from './LinkedList'

describe('Linked List', () => {
	it('Should create a list, insert a new node and read it', () => {
		const list = new LinkedList()
		list.insertToHead(10)

		expect(list.read(0)).toEqual(10)
		expect(list.getHead()).toEqual(10)
		expect(list.getTail()).toEqual(10)
	})

	it('Should create a list, add 2 nodes and read head and tail', () => {
		const list = new LinkedList()
		list.insertToHead(10)
		expect(list.read(0)).toEqual(10)
		expect(list.getHead()).toEqual(10)
		expect(list.getTail()).toEqual(10)

		list.insertToTail(20)
		expect(list.getHead()).toEqual(10)
		expect(list.read(0)).toEqual(10)
		expect(list.getTail()).toEqual(20)
		expect(list.read(1)).toEqual(20)

		expect(list.toArray()).toEqual([10, 20])
	})

	it('Should create a list with three nodes', () => {
		const list = new LinkedList()
		list.insertToHead(10)
		expect(list.read(0)).toEqual(10)
		expect(list.getHead()).toEqual(10)
		expect(list.getTail()).toEqual(10)

		list.insertToTail(20)
		expect(list.getHead()).toEqual(10)
		expect(list.read(0)).toEqual(10)
		expect(list.getTail()).toEqual(20)
		expect(list.read(1)).toEqual(20)

		list.insert(30, 1)
		expect(list.getHead()).toEqual(10)
		expect(list.getTail()).toEqual(20)
		expect(list.read(1)).toEqual(30)

		expect(list.toArray()).toEqual([10, 30, 20])
	})

	it('Should handle delete of nodes', () => {
		const list = new LinkedList()
		list.insertToHead(10)
		list.insertToTail(20)
		list.insert(30, 1)

		expect(list.toArray()).toEqual([10, 30, 20])

		list.delete(0)
		expect(list.getHead()).toEqual(30)
		expect(list.getTail()).toEqual(20)

		expect(list.toArray()).toEqual([30, 20])

		list.insertToHead(10)

		list.delete(2)
		expect(list.getHead()).toEqual(10)
		expect(list.getTail()).toEqual(30)

		expect(list.toArray()).toEqual([10, 30])

		list.insertToTail(20)

		list.delete(1)
		expect(list.getHead()).toEqual(10)
		expect(list.getTail()).toEqual(20)

		expect(list.toArray()).toEqual([10, 20])
	})

	it('Should properly search by value', () => {
		const list = new LinkedList()
		list.insertToHead(10)
		list.insertToTail(20)
		list.insert(30, 1)

		expect(list.search(10)).toEqual(0)
		expect(list.search(20)).toEqual(2)
		expect(list.search(30)).toEqual(1)
		expect(list.search(50)).toEqual(-1)
	})

	it('Should reverse linked list', () => {
		const list = new LinkedList()
		list.insertToHead(10)
		list.insertToTail(20)
		list.insert(30, 1)
		list.reverse()

		expect(list.toArray()).toEqual([20, 30, 10])
	})
})
