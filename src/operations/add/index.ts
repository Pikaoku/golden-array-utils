import { array } from '../../types'
import deepClone from '../deepClone'

export default (array: array, value: any) => [...array, value]
