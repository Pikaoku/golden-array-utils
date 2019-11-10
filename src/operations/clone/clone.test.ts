import clone from '.'
import { array } from '../../types'

test('empty value', () => {
	const a: array = []
	expect(clone(a)).toEqual([])
	expect(clone(a)).not.toBe(a)
})

test('simple array', () => {
	const a: array = [1, 2, 3]
	expect(clone(a)).toEqual([1, 2, 3])
	expect(clone(a)).not.toBe(a)
})

test('immutability', () => {
	const source: array = [1, 2, 3]
	const cloned = clone(source)
	expect(cloned).toEqual(source)
	expect(cloned).not.toBe(source)

	source[0] = 'lemon'
	expect(cloned[0]).not.toEqual(source[0])
	expect(cloned[0]).toEqual(1)

	cloned[1] = 'grape'
	expect(source[1]).not.toEqual(cloned[1])
	expect(source[1]).toEqual(2)
})
