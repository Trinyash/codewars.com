/*
* https://www.codewars.com/kata/56414fdc6488ee99db00002c/train/javascript
*/

const absentVowel = (x) => {
    const vowels2index = new Map([
        ['a', 0],
        ['e', 1],
        ['i', 2],
        ['o', 3],
        ['u', 4],
    ])

    for (const char of x) {
        if (vowels2index.size === 1) {
            break
        }
        if (vowels2index.has(char)) {
            vowels2index.delete(char)
        }
    }
    return vowels2index.values().next().value
}
