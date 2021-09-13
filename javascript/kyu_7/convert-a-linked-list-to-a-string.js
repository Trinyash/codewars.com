/*
* https://www.codewars.com/kata/582c297e56373f0426000098/train/javascript
*/

const stringify = (list) => {
    let curr = list
    let data = []
    while (curr !== null) {
        data.push(curr.data.toString())
        curr = curr.next
    }
    data.push('null')
    return data.join(' -> ')
}
