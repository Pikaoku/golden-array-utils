export default (array: any[], index: number, value: any) =>
	array.map((v, i) => (i === index ? value : v))
