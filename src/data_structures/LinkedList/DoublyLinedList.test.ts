import { DoublyLinkedList } from './DoublyLinkedList'

describe('Doubly Linked List', () => {
	it('Should print values in reverse order', () => {
		const list = new DoublyLinkedList()
		list.insertToTail(10)
		list.insertToTail(20)
		list.insertToTail(30)

		expect(list.toArray()).toEqual([10, 20, 30])
		expect(list.toArrayReverse()).toEqual([30, 20, 10])
	})

	it('Should properly delete values', () => {
		const list = new DoublyLinkedList()
		list.insertToTail(10)
		list.insertToTail(20)
		list.insertToTail(30)

		list.delete(0)
		expect(list.toArrayReverse()).toEqual([30, 20])

		list.insertToHead(10)
		list.delete(1)
		expect(list.toArrayReverse()).toEqual([30, 10])

		list.insert(20, 1)
		list.delete(2)
		expect(list.toArrayReverse()).toEqual([20, 10])
	})
})
