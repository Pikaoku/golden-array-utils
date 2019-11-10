import { array, integer } from '../../types'
import isInteger from '../../utils/isInteger'

export default (array: array, index: integer, value: any) => {
	if (!isInteger(index) || index < 0) {
		throw new TypeError()
	}
	return [...array]
}
