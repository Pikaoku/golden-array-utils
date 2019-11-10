import isInteger from '.'

// Testing Es5 at this point... but it allows for the function to be changed in the future

test('undefined value returns false', () => {
	expect(isInteger(undefined)).toEqual(false)
})

test('non-numeric values return false', () => {
	expect(isInteger('some string')).toEqual(false)
})

test('simple int returns true', () => {
	expect(isInteger(2)).toEqual(true)
})

test('negative simple int returns true', () => {
	expect(isInteger(-2)).toEqual(true)
})
