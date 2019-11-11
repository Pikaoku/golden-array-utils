export default (array: any[], index: number, value: any): any[] =>
	array.map((v, i) => (i === index ? value : v))
