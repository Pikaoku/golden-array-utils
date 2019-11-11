import addMany from '../addMany'

export default function add(array: any[], value: any) {
	return addMany(array, [value])
}
