import { array } from '../../types'
import addMany from '../addMany'

export default (array: array, value: any) => addMany(array, [value])
