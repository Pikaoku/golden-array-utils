export default (a: any[]): any[] => [...JSON.parse(JSON.stringify(a))]
