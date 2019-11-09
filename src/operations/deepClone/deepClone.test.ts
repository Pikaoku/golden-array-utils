import deepClone from '.'

test('empty', () => {
	const original = []
	expect(deepClone(original)).not.toBe(original)
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
	expect(cloned[0]).toEqual('fivel')
	expect(original[0]).toEqual(1)
})

test('deep clone', () => {
	const original = [[1, 2, 3], { a: 'a', b: 'b', c: { d: 'd', e: 'e' } }]
	const clone = deepClone(original)
	expect(original[0]).not.toBe(clone[0])
	expect(original[1]).not.toBe(clone[1])
})
