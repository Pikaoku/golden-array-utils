type array = any[]
type int = number

type GenericFilter = (item: any) => boolean

export default class Au {
	public static clone(a: array): array {
		return [...a]
	}

	public static move(a: array, from: int, to: int): array {
		return Au.addAt(Au.remove(a, from), to, a[from])
	}
}
