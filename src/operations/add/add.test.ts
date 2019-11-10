import add from '.'
import { array } from '../../types'

test('empty array', () => {
	expect(add([], 1)).toEqual([1])
})

test('empty value should work', () => {
	expect(add([], null)).toEqual([null])
	expect(add([], undefined)).toEqual([undefined])
})

test('new value is added', () => {
	expect(add([1, 2], 3)).toContain(3)
})

test('source values are retained', () => {
	expect(add([1, 2], 3)).toContain(1)
	expect(add([1, 2], 3)).toContain(2)
})

test('new element is added to end', () => {
	expect(add([1, 2, 3], 4)).toEqual([1, 2, 3, 4])
})

test('source array immutability', () => {
	const source: array = [1, 2, 3]
	const clone = add(source, 4)

	expect(clone[0]).toEqual(source[0])
	source[0] = 'pie'
	expect(clone[0]).not.toEqual(source[0])
	expect(clone[0]).toEqual(1)
})
