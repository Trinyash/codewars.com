/*
* https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript
*/

const orderWeight = (strng) => {
    if (!strng) {
        return ''
    }
    const real = []
    const fake = []
    const result = []
    for (const w of strng.trim().split(' ').sort()) {
        real.push(w)
        fake.push([...w].map((e) => Number.parseInt(e, 10)).reduce((a,b) => a + b))
    }
    while (fake.length) {
        let index = fake.indexOf(Math.min(...fake));
        result.push(real[index])
        fake.splice(index, 1)
        real.splice(index, 1)
    }
    return result.join(' ')
}
