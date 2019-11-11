export default (array: any[], index: number): any[] =>
	array.filter((_, i) => i !== index)
