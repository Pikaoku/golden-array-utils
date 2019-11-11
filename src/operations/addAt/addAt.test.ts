import addAt from '.'

test('original values retained in array', () => {
	expect(addAt([1], 0, 0)).toContain(1)
})

test('new value returned in array', () => {
	expect(addAt([1], 0, 2)).toContain(2)
})
