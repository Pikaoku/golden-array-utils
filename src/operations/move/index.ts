import { integer } from '../../types'
import addAt from '../addAt'
import remove from '../remove'

export default (array: any[], from: integer, to: integer) =>
	addAt(remove(array, from), to, array[from])
