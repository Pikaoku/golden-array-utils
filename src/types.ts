export type array = any[]

// This isn't actually typesafe, but at least it gives better type hinting
export type integer = number

export type GenericFilter = (item: any) => boolean
