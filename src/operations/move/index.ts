import addAt from '../addAt'
import remove from '../remove'

export default (array: any[], from: number, to: number) =>
	addAt(remove(array, from), to, array[from])
