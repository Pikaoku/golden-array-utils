import addManyAt from '.'

test('add to empty', () => {
	expect(addManyAt([], 0, [15])).toEqual([15])
})

test('add empty', () => {
	expect(addManyAt([15], 0, [])).toEqual([15])
})

test('values added at right place', () => {
	expect(addManyAt([1, 3, 4], 1, [2])).toEqual([1, 2, 3, 4])
})
