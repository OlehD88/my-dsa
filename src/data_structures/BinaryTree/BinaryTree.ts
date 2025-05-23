type Node<T> = {
	value: T
	left?: Node<T>
	right?: Node<T>
}

export class BinaryTree<T> {
	private root: Node<T>

	constructor(value: T) {
		this.root = this.getNewNode(value)
	}

	public getRoot() {
		return this.root?.value
	}

	public getNewNode(value: T): Node<T> {
		return { value }
	}

	public insert(value: T, node: Node<T> = this.root) {
		if (value < node.value) {
			if (!node.left) {
				node.left = this.getNewNode(value)
			} else {
				this.insert(value, node.left)
			}
		} else {
			if (!node.right) {
				node.right = this.getNewNode(value)
			} else {
				this.insert(value, node.right)
			}
		}
	}

	public search(value: T): Node<T> | undefined {
		return this.searchNode(value, this.root)
	}

	private searchNode(value: T, node?: Node<T>): Node<T> | undefined {
		if (!node || node.value === value) return node

		if (value < node.value) {
			return this.searchNode(value, node.left)
		} else {
			return this.searchNode(value, node.right)
		}
	}

	public delete(value: T) {
		this.deleteNode(value, this.root)
	}

	private deleteNode(value: T, node?: Node<T>): Node<T> | undefined {
		if (!node) {
			return undefined
		} else if (value < node.value) {
			node.left = this.deleteNode(value, node.left)
			return node
		} else if (value > node.value) {
			node.right = this.deleteNode(value, node.right)
			return node
		} else if (value === node.value) {
			if (!node.left) {
				return node.right
			}

			if (!node.right) {
				return node.left
			}

			node.right = this.lift(node.right, node)
			return node
		}
	}

	private lift(node: Node<T>, nodeToDelete: Node<T>): Node<T> | undefined {
		if (node.left) {
			node.left = this.lift(node.left, nodeToDelete)
			return node
		} else {
			nodeToDelete.value = node.value
			return node.right
		}
	}

	private traverse(node: Node<T> | undefined, nodeAction: (value: T) => void) {
		if (!node) {
			return
		}

		this.traverse(node.left, nodeAction)
		nodeAction(node.value)
		this.traverse(node.right, nodeAction)
	}

	public toArray() {
		const arr: T[] = []
		const nodeAction = (value: T) => {
			arr.push(value)
		}
		this.traverse(this.root, nodeAction)
		return arr
	}
}
