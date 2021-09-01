/*
* https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
*/

const duplicateCount = (text) => {
    let char2times = new Map()
    text.toLowerCase().split('').forEach((item) => {
        if (char2times.has(item)) {
            char2times.set(item, char2times.get(item) + 1)
        } else {
            char2times.set(item, 1)
        }
    })
    let result = 0
    for (const times of char2times.values()) {
        if (times !== 1) {
            result += 1
        }
    }
    return result
}
