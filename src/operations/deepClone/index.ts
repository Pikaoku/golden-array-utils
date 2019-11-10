import hardCopy from '../../utils/hardCopy'

export default (a: any[]): any[] => [...hardCopy(a)]
