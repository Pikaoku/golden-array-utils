import { integer } from '../../types'

export default (array: any[], index: integer, value: any) =>
	array.map((v, i) => (i === index ? value : v))
