export class Queue<T> {
	private data: T[] = []

	constructor(initialData: T[] = []) {
		this.data = initialData
	}

	public enqueue(element: T) {
		this.data.unshift(element)
	}

	public dequeue(): T | null {
		if (this.data.length > 0) {
			const element = this.data[0]
			this.data.shift()
			return element
		}

		return null
	}

	public read(): T | null {
		return this.data.length > 0 ? this.data[0] : null
	}

	public length(): number {
		return this.data.length
	}
}
