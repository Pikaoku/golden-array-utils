import Au from '../Au'

test('Clone', () => {
	let ar: any[] = []
	expect(Au.clone(ar)).toEqual(ar)
	expect(Au.clone(ar)).not.toBe(ar)
	ar = ['a', 1, -1, 1e16, ['a', 'b', ['c']]]
	expect(Au.clone(ar)).toEqual(ar)
	expect(Au.clone(ar)).not.toBe(ar)
})

test('My Greeter', () => {
	expect(Greeter('Carl')).toBe('Hello Carl')
})
