import isInteger from '../isInteger'

export default (index: number) => {
	if (isInteger(index) && index >= 0) {
		return true
	}
	throw new TypeError()
}
