/*
* https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
*/

const expr = (number, operation) => !operation ? number : operation(number)
const zero = (operation) => expr(0, operation)
const one = (operation) => expr(1, operation)
const two = (operation) => expr(2, operation)
const three = (operation) => expr(3, operation)
const four = (operation) => expr(4, operation)
const five = (operation) => expr(5, operation)
const six = (operation) => expr(6, operation)
const seven = (operation) => expr(7, operation)
const eight = (operation) => expr(8, operation)
const nine = (operation) => expr(9, operation)
const plus = (x) => (y) => y + x
const minus = (x) => (y) => y - x
const times = (x) => (y) => y * x
const dividedBy = (x) => (y) => Math.floor(y / x)
