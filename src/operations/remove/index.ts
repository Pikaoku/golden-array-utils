import { integer } from '../../types'

export default (array: any[], index: integer) =>
	array.filter((_, i) => i !== index)
