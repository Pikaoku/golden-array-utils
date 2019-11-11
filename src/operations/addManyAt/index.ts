export default (array: any[], index: number, values: any[]): any[] => [
	...array.slice(0, index),
	...values,
	...array.slice(index),
]
