import { array } from '../../types'
import hardCopy from '../../utils/hardCopy'

export default (a: array): array => [...hardCopy(a)]
