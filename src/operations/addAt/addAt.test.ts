import addAt from '.'

test('original values retained in array', () => {
	expect(addAt([1], 0, 0)).toContain(1)
})

test('new value returned in array', () => {
	expect(addAt([1], 0, 2)).toContain(2)
})

test('index must be an integer', () => {
	expect(() => addAt([1], 4.2, 2)).toThrowError(TypeError)
})

test('index must be a positive integer', () => {
	expect(() => addAt([1], -1, 2)).toThrowError(TypeError)
})
