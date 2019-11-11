import remove from '.'

test('simple', () => {
	expect(remove([1, 2], 1)).not.toContain(2)
	expect(remove([1, 2], 1)).toHaveLength(1)
})
