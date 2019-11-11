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
	const a = [1, 2, 3]
	expect(move(a, 0, 1)).toEqual([2, 1, 3])
	expect(a).toEqual([1, 2, 3])
})
