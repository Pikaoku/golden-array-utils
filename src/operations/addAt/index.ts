import isValidIndex from '../../utils/isValidIndex'
import addManyAt from '../addManyAt'

export default (array: any[], index: number, value: any) => {
	if (isValidIndex(index)) return addManyAt(array, index, [value])
}
