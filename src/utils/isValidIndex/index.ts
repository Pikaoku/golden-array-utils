import { integer } from '../../types'
import isInteger from '../isInteger'

export default (index: integer) => isInteger(index) && index >= 0
