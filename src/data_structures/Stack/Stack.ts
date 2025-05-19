export class Stack<T> {
	private data: T[]

	constructor(initData: T[] = []) {
		this.data = initData
	}

	public push(element: T) {
		this.data.push(element)
	}

	public pop(): T | null {
		if (this.data.length > 0) {
			const element = this.data[this.data.length - 1]
			this.data.pop()
			return element
		}

		return null
	}

	public read(): T | null {
		if (this.data.length > 0) {
			return this.data[this.data.length - 1]
		}

		return null
	}

	public length(): number {
		return this.data.length
	}
}
