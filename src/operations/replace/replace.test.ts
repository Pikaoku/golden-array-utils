import replace from '.'

test('simple replace', () => {
	expect(replace([1, 2, 3], 1, 4)).toEqual([1, 4, 3])
})

test('immutability', () => {
	const a = [1, 2, 3]
	expect(replace(a, 0, 4)).not.toBe(a)
	expect(a).toEqual([1, 2, 3])
})
