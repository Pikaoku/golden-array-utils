type array = any[]
type int = number

type GenericFilter = (item: any) => boolean

export default class Au {
	public static clone(a: array): array {
		return [...a]
	}

}
