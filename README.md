# Golden Array Utils

I found myself repeating he same logic repeatedly when working with immutable or stateful data in React. To save some time I've compiled useful array functionality into an importable package, with tests!

The purpose of this package is that it _never_ modifies the original array.

## Installation

Just run `npm install golden-array-utils` and you've good to go!

## Usage

To use the array utils in your project simply import the Array Utils (Au) object

```JS
import Au from 'golden-array-utils'
```

And use one of it's functions

```JS
this.setState({ todos: Au.remove(this.state.todos, clickedIndex) })
```

### Functions

Every function returns a _new array_ with the function applied. The original array will never be altered.

| Name         | Function                                                    |
| :----------- | :---------------------------------------------------------- |
| .clone()     | Returns a brand new version of the exact same array.        |
| .move()      | Moves an element of the array `from` one index `to` another |
| .remove()    | Removes an array element at `index`                         |
| .replace()   | Replaces the element at `index` with `value`                |
| .add()       | Push `value` on to the end of the array                     |
| .addAt()     | Add `value` at a specific `index`                           |
| .addManyAt() | Add all `values` starting at `index`                        |
