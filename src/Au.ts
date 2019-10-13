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

	public static remove(a: array, index: int): array {
		return a.filter((value, i) => i !== index)
	}

	public static replace(a: array, index: int, value: any): array {
		return a.map((v, i) => (i === index ? value : v))
	}

	public static add(a: array, value: any): array {
		return [...a, value]
	}

	public static addManyAt(a: array, index: int, values: array) {
		return [...a.slice(0, index), ...values, ...a.slice(index)]
	}

	public static addAt(a: array, index: int, value: any) {
		return Au.addManyAt(a, index, [value])
	}

	public static byKeyEquals(
		key: string,
		value: any,
		not: boolean = false
	): GenericFilter {
		return (item: { [key: string]: any }) =>
			not ? item[key] !== value : item[key] === value
	}

	public static byKeyNotEquals(key: string, value: any): GenericFilter {
		return Au.byKeyEquals(key, value, true)
	}

	public static byId(id: string | number) {
		return Au.byKeyEquals('id', id)
	}
}
