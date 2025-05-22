type Node<T> = {
	value: T
	next?: Node<T>
	prev?: Node<T>
}

export class DoublyLinkedList<T> {
	public length: number = 0
	public head?: Node<T>
	public tail?: Node<T>

	private createNode(value: T): Node<T> {
		return {
			value,
		}
	}

	public insert(value: T, index: number) {
		const newNode = this.createNode(value)

		if (index === 0) {
			this.insertToHead(value)
			return
		}

		if (index >= this.length) {
			this.insertToTail(value)
			return
		}

		const prevIndexNode = this.getNodeAt(index - 1)

		if (!prevIndexNode) {
			throw Error('Wrong index provided')
		}

		const nextNode = prevIndexNode?.next
		newNode.prev = prevIndexNode
		newNode.next = nextNode

		prevIndexNode.next = newNode
		if (nextNode) {
			nextNode.prev = newNode
		}

		this.length++
	}

	public insertToHead(value: T) {
		const newNode = this.createNode(value)
		this.length++

		if (!this.tail || !this.head) {
			this.tail = newNode
			this.head = newNode
			return
		}

		this.head.prev = newNode
		newNode.next = this.head
		this.head = newNode
	}

	public insertToTail(value: T) {
		const newNode = this.createNode(value)
		this.length++

		if (!this.tail || !this.head) {
			this.tail = newNode
			this.head = newNode
			return
		}

		this.tail.next = newNode
		newNode.prev = this.tail
		this.tail = newNode
	}

	private getNodeAt(index: number): Node<T> | null {
		if (index >= this.length) {
			throw new Error('Index is bigger than length of the list')
		}

		if (index === 0 && this.head) {
			return this.head
		}

		if (index === this.length - 1 && this.tail) {
			return this.tail
		}

		let currNode = this.head?.next
		let currIndex = 1

		while (currIndex < index && currNode) {
			currIndex += 1
			currNode = currNode.next
		}

		return currNode || null
	}

	public read(index: number): T | null {
		const node = this.getNodeAt(index)
		return node?.value || null
	}

	public getHead(): T | null {
		return this.head?.value || null
	}

	public getTail(): T | null {
		return this.tail?.value || null
	}

	public toArray(): T[] {
		const list: T[] = []

		let currNode = this.head
		while (currNode) {
			list.push(currNode.value)
			currNode = currNode.next
		}

		return list
	}

	public toArrayReverse(): T[] {
		const list: T[] = []

		let currNode = this.tail
		while (currNode) {
			list.push(currNode.value)
			currNode = currNode.prev
		}

		return list
	}

	public delete(index: number) {
		if (this.length <= index) {
			throw new Error('Index is bigger than length of the list')
		}

		if (this.length === 1) {
			this.head = undefined
			this.tail = undefined
			this.length--
			return
		}

		if (index === 0 && this.head) {
			this.head = this.head.next
			if (this.head) {
				this.head.prev = undefined
			}
		} else {
			const prevNodeToDelete = this.getNodeAt(index - 1)
			const nodeToDelete = prevNodeToDelete?.next
			const nextNode = nodeToDelete?.next

			if (!nodeToDelete) {
				throw Error('Wrong index provided')
			}

			prevNodeToDelete.next = nextNode
			if (nextNode) {
				nextNode.prev = prevNodeToDelete
			}

			if (index === this.length - 1) {
				this.tail = prevNodeToDelete
			}
		}

		this.length--
	}

	public search(value: T): number {
		if (this.length === 0) return -1

		let currNode = this.head
		let currIndex = 0

		while (currNode) {
			if (currNode.value === value) {
				return currIndex
			}

			currIndex++
			currNode = currNode.next
		}

		return -1
	}
}
