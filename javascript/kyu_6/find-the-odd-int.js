/*
* https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
*/

const findOdd= (A) => {
    let result = new Map()
    A.forEach((item) => {
        if (result.has(item)) {
            result.set(item, result.get(item) + 1)
        } else {
            result.set(item, 1)
        }
    })
    for (const [key, value] of result.entries()) {
        if (value % 2 === 1) {
            return key
        }
    }
}
