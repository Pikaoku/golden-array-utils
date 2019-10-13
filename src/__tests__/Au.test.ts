import Au from '../Au'

test('Clone', () => {
	let ar: any[] = []
	expect(Au.clone(ar)).toEqual(ar)
	expect(Au.clone(ar)).not.toBe(ar)
	ar = ['a', 1, -1, 1e16, ['a', 'b', ['c']]]
	expect(Au.clone(ar)).toEqual(ar)
	expect(Au.clone(ar)).not.toBe(ar)
})

test('Move', () => {
	const ar: any[] = ['a', 'b', 'c']
	expect(Au.move(ar, 0, 1)).toEqual(['b', 'a', 'c'])
	expect(Au.move(ar, 0, 2)).toEqual(['b', 'c', 'a'])
	expect(Au.move(ar, 0, 400)).toEqual(['b', 'c', 'a'])
	expect(ar).toEqual(['a', 'b', 'c'])
})
})
