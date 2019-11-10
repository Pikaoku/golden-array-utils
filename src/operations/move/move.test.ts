import move from '.'

test('simple move', () => {
	expect(move([1, 2], 1, 0)).toEqual([2, 1])
})
