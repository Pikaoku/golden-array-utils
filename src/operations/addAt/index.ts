import isValidIndex from '../../utils/isValidIndex'
import addManyAt from '../addManyAt'

export default (array: any[], index: number, value: any): any[] =>
	addManyAt(array, index, [value])
