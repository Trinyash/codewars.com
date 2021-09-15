/*
* https://www.codewars.com/kata/546dba39fa8da224e8000467/train/javascript
*/

const head = (arr) => arr[0]
const tail = (arr) => arr.slice(1)

const runLengthEncoding = (str) => {
    if (str.length === 0) {
        return []
    }

    let result = []
    let s = head(str)
    let i = 1
    tail(str).split('').forEach((x) => {
        if (x === s) {
            i += 1
        } else {
            result.push([i, s])
            i = 1
            s = x
        }
    })
    result.push([i, s])
    return result
}
