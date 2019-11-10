import addMany from '.'

test('add to empty', () => {
	expect(addMany([], [15])).toEqual([15])
})

test('add empty', () => {
	expect(addMany([15], [])).toEqual([15])
})

test('values added at end', () => {
	expect(addMany([1, 3, 4], [2])).toEqual([1, 3, 4, 2])
})
