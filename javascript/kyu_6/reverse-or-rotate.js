/*
* https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/javascript
*/

const revrot = (str, sz) => {
    if (sz <= 0 || str.length === 0) {
        return ''
    }
    if (sz > str.length) {
        return ''
    }

    const chunks = []
    for (let i = 0; i < str.length; i += sz) {
        chunks.push(str.substring(i, i + sz));
    }
    if (chunks[0].length !== chunks[chunks.length - 1].length) {
        chunks.pop()
    }

    return chunks.map(
        (x) =>
            x.split('').reduce((acc, cur) => acc + Number.parseInt(cur, 10) ** 3, 0) % 2 === 0
            ?
            x.split('').reverse().join('')
            :
            x.slice(1) + x.slice(0, 1)
    ).join('')
}
