import { array } from '../../types'

export default (a: array): array => [...JSON.parse(JSON.stringify(a))]
