export default (array: any[], index: number) =>
	array.filter((_, i) => i !== index)
