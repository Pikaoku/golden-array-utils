import Au from '../Au'

test('Clone', () => {
	let ar: any[] = []
	expect(Au.clone(ar)).toEqual(ar)
	expect(Au.clone(ar)).not.toBe(ar)
	ar = ['a', 1, -1, 1e16, ['a', 'b', ['c']]]
	expect(Au.clone(ar)).toEqual(ar)
	expect(Au.clone(ar)).not.toBe(ar)
})

test('Remove', () => {
	const ar: any[] = ['a', 'b', 'c']
	expect(Au.remove(ar, 1)).toEqual(['a', 'c'])
	expect(ar).toEqual(['a', 'b', 'c'])
})

test('Add', () => {
	const ar: any[] = []
	expect(Au.add(ar, 'a')).toEqual(['a'])
	expect(Au.add(ar, 'b')).toEqual(['b'])
	expect(Au.add(Au.add(ar, 'a'), 'b')).toEqual(['a', 'b'])
	expect(ar).toEqual([])
})

test('Add At', () => {
	const ar: any[] = ['a', 'b', 'c']
	expect(Au.addAt(ar, 1, 'aa')).toEqual(['a', 'aa', 'b', 'c'])
	expect(ar).toEqual(['a', 'b', 'c'])
})

test('Add Many At', () => {
	const ar: any[] = ['a', 'b']
	expect(Au.addManyAt(ar, 1000, ['c', 'd'])).toEqual(['a', 'b', 'c', 'd'])
	expect(Au.addManyAt(ar, -2, ['c', 'd'])).toEqual(['c', 'd', 'a', 'b'])
	expect(Au.addManyAt(ar, 2, ['c', 'd'])).toEqual(['a', 'b', 'c', 'd'])
	expect(Au.addManyAt(ar, 0, ['c', 'd'])).toEqual(['c', 'd', 'a', 'b'])
	expect(ar).toEqual(['a', 'b'])
})

test('Move', () => {
	const ar: any[] = ['a', 'b', 'c']
	expect(Au.move(ar, 0, 1)).toEqual(['b', 'a', 'c'])
	expect(Au.move(ar, 0, 2)).toEqual(['b', 'c', 'a'])
	expect(Au.move(ar, 0, 400)).toEqual(['b', 'c', 'a'])
	expect(ar).toEqual(['a', 'b', 'c'])
})

test('Replace', () => {
	const ar: any[] = ['a', 'b', 'c']
	expect(Au.replace(ar, 1, 'v')).toEqual(['a', 'v', 'c'])
	expect(Au.replace(ar, 400, 'v')).toEqual(['a', 'b', 'c'])
	expect(Au.replace(ar, -1, 'v')).toEqual(['a', 'b', 'c'])
	expect(Au.replace(ar, 2, 'v')).toEqual(['a', 'b', 'v'])
	expect(ar).toEqual(['a', 'b', 'c'])
})
