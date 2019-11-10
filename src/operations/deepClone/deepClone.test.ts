import deepClone from '.'
import { array } from '../../types'

test('empty', () => {
	const original: array = []
	expect(deepClone(original)).not.toBe(original)
	expect(deepClone(original)).toEqual([])
})

test('shallow clone', () => {
	const originalArray = [1, 2, 'three', 'king kong', { horse: 'power' }]
	expect(deepClone(originalArray)).toEqual(originalArray)
	expect(deepClone(originalArray)).not.toBe(originalArray)
})

test('immutability', () => {
	const original = [1, 2, 3, 4, 5]
	const cloned = deepClone(original)
	cloned[0] = 'fivel'
	original[1] = 8000
	expect(cloned[0]).toEqual('fivel')
	expect(original[0]).toEqual(1)
	expect(cloned[1]).toEqual(2)
})

test('deep clone', () => {
	const objectToReference = { a: 'a', b: 'b', c: { d: 'd', e: 'e' } }
	const original = [[1, 2, 3], objectToReference]
	const clone = deepClone(original)
	objectToReference.c.d = 'dee'
	expect(original[0]).not.toBe(clone[0])
	expect(original[1]).not.toBe(clone[1])
	expect(clone[1]).not.toEqual(objectToReference)
	expect(clone[1]).not.toBe(objectToReference)
})
