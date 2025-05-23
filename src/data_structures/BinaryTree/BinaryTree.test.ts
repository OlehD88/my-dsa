import { BinaryTree } from './BinaryTree'

describe('Binary tree', () => {
	it('Should create a tree with init node', () => {
		const tree = new BinaryTree(20)
		expect(tree.getRoot()).toEqual(20)
	})

	it('Should insert a few nodes to proper positions', () => {
		const tree = new BinaryTree(20)
		tree.insert(30)
		tree.insert(10)
		tree.insert(21)
		tree.insert(33)
		tree.insert(15)

		expect(tree.getRoot()).toEqual(20)
		const nodeWith10 = tree.search(10)
		expect(nodeWith10?.value).toEqual(10)
		expect(nodeWith10?.left).toEqual(undefined)
		expect(nodeWith10?.right?.value).toEqual(15)

		const nodeWith30 = tree.search(30)
		expect(nodeWith30?.value).toEqual(30)
		expect(nodeWith30?.left?.value).toEqual(21)
		expect(nodeWith30?.right?.value).toEqual(33)

		expect(tree.toArray()).toEqual([10, 15, 20, 21, 30, 33])

		const notExist = tree.search(50)
		expect(notExist).toEqual(undefined)
	})

	it('Should properly delete last node', () => {
		const tree = new BinaryTree(20)
		tree.insert(30)
		tree.insert(10)
		tree.insert(21)
		tree.insert(33)
		tree.insert(15)

		tree.delete(33)
		expect(tree.toArray()).toEqual([10, 15, 20, 21, 30])
	})

	it('Should properly delete root', () => {
		const tree = new BinaryTree(20)
		tree.insert(30)
		tree.insert(10)
		tree.insert(21)
		tree.insert(33)
		tree.insert(15)

		tree.delete(20)
		expect(tree.toArray()).toEqual([10, 15, 21, 30, 33])
		expect(tree.getRoot()).toEqual(21)
	})

	it('Should properly delete node in the middle', () => {
		const tree = new BinaryTree(20)
		tree.insert(30)
		tree.insert(10)
		tree.insert(21)
		tree.insert(33)
		tree.insert(15)

		tree.delete(30)
		expect(tree.toArray()).toEqual([10, 15, 20, 21, 33])
		expect(tree.getRoot()).toEqual(20)
	})
})
