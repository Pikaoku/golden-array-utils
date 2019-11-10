import clone from '.'

test('empty value', () => {
	const a: any[] = []
	expect(clone(a)).toEqual([])
	expect(clone(a)).not.toBe(a)
})

test('simple array', () => {
	const a: any[] = [1, 2, 3]
	expect(clone(a)).toEqual([1, 2, 3])
	expect(clone(a)).not.toBe(a)
})

test('immutability', () => {
	const source: any[] = [1, 2, 3]
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
