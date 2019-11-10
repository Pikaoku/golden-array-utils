import hardCopy from '.'

test('returns simple input value', () => {
	expect(hardCopy(2)).toEqual(2)
})

test('returns object input value', () => {
	const catInTheHat = { cat: 'in', the: 'hat' }
	expect(hardCopy(catInTheHat)).toEqual({ cat: 'in', the: 'hat' })
})

test('returns array input value', () => {
	const someArray = [1, 2, 3, 4, 5]
	expect(hardCopy(someArray)).toEqual([1, 2, 3, 4, 5])
})

test('return value does not retain reference', () => {
	const catInTheHat = { cat: 'in', the: 'hat' }
	expect(hardCopy(catInTheHat)).not.toBe(catInTheHat)
})

test('nested references are broken', () => {
	const myNestedObject = {
		one: {
			two: {
				more: 'data',
				some: 'data',
				test: 'test',
			},
		},
	}

	expect(hardCopy(myNestedObject).one.two).toEqual(myNestedObject.one.two)
	expect(hardCopy(myNestedObject).one.two).not.toBe(myNestedObject.one.two)
})
