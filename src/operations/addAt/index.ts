import { integer } from '../../types'
import isInteger from '../../utils/isInteger'
import addManyAt from '../addManyAt'

export default (array: any[], index: integer, value: any) => {
	if (!isInteger(index) || index < 0) {
		throw new TypeError()
	}
	return addManyAt(array, index, [value])
}
