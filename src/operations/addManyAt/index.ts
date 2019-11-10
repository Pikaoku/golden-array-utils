import { integer } from '../../types'

export default (array: any[], index: integer, values: any[]) => [
	...array.slice(0, index),
	...values,
	...array.slice(index),
]
