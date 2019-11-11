import move from '.'

test('simple integer move', () => {
	expect(move([1, 2], 1, 0)).toEqual([2, 1])
})

test('nested integer moved', () => {
	expect(move([1, [2, 3], 4, [5]], 1, 2)).toEqual([1, 4, [2, 3], [5]])
})

test('simple object moved', () => {
	const a = 'a'
	const b = 'b'
	expect(move([a, b], 1, 0)).toEqual([b, a])
})

test('immutability', () => {
	const d = {
		e: 3,
		f: 4,
	}
	const a = {
		b: 1,
		c: 2,
		d,
	}
	expect(move([a, 1], 0, 1)).toEqual([1, a])
	expect(move([a, 1], 0, 1)[1].d).toEqual(d)
	expect(move([a, 1], 0, 1)[1].d).not.toBe(d)
})
